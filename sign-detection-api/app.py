import os
from flask import Flask, request, jsonify
import numpy as np
import io
from PIL import Image
import requests
from io import BytesIO
import tensorflow as tf
from flask_cors import CORS
import logging
from flask_socketio import SocketIO, emit, rooms
import mediapipe as mp
import cv2
import numpy as np
import os
import tempfile 
from pyngrok import ngrok, conf
import threading
import sys
import uuid 
import ffmpeg

app = Flask(__name__)

# Load the pre-trained model for holistic
langmodel = tf.keras.models.load_model("models/keras_model.h5")

mp_holistic = mp.solutions.holistic  # Holistic model
mp_drawing = mp.solutions.drawing_utils  # Drawing utilities

# Video process start at
start_frame = -90

# Holistic functions
def mediapipe_detection(image, model):
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # COLOR CONVERSION BGR 2 RGB
    image.flags.writeable = False  # Image is no longer writeable
    results = model.process(image)  # Make prediction
    image.flags.writeable = True  # Image is now writeable
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)  # COLOR COVERSION RGB 2 BGR
    return image, results

def extract_keypoints(results):
    lh = np.array([[res.x, res.y, res.z] for res in results.left_hand_landmarks.landmark]).flatten() if results.left_hand_landmarks else np.zeros(21 * 3)
    rh = np.array([[res.x, res.y, res.z] for res in results.right_hand_landmarks.landmark]).flatten() if results.right_hand_landmarks else np.zeros(21 * 3)
    return np.concatenate([lh, rh])

# Add this function to reshape the input
def prepare_input(sequence):
    # Reshape to (30, 126)
    reshaped = sequence.reshape(30, 126)
    
    # Normalize the values to be between 0 and 1
    normalized = (reshaped - reshaped.min()) / (reshaped.max() - reshaped.min())
    
    # Resize to 224x224
    resized = cv2.resize(normalized, (224, 224))
    
    # Add color channels
    with_channels = np.repeat(resized[:, :, np.newaxis], 3, axis=2)
    
    # Add batch dimension
    return np.expand_dims(with_channels, axis=0)

# Threshold value for prediction
thresholdValue = 0.6

# Answers array
lang_answer_array = ['a', 'aa', 'ea', 'e']

@app.route('/detection/lang/v2', methods=['POST'])
def lang_detection():
    try:
        data = request.get_json()
        image_url = data['image_url']
        actual_answer = data['answer']

        #check if the answer is valid
        if actual_answer not in lang_answer_array:
            raise ValueError("Invalid answer")


        final_answer = True
        correct_prediction_count = 0
        predicted_answer = None  # Initialize predicted_answer to avoid undefined variable error

        # Download the image from the URL
        response = requests.get(image_url)

        if not response.content:
            raise ValueError("Empty image content")

        # Define the path to save the video
        download_folder = './downloads/'
        os.makedirs(download_folder, exist_ok=True)
        video_filename = f"video_{uuid.uuid4().hex[:5]}.webm"
        video_path = os.path.join(download_folder, video_filename)
        
        # Save the downloaded webm video
        with open(video_path, 'wb') as f:
            f.write(response.content)
        
        # Convert webm to mov using ffmpeg-python
        mp4_video_path = video_path.replace('.webm', '.mov')
        ffmpeg.input(video_path).output(
            mp4_video_path,
            vcodec='libx264',
            acodec='aac',
            strict='experimental',
            movflags='faststart'
        ).run(overwrite_output=True)

        # Use the mp4 video path for further processing
        video_path = mp4_video_path

        # Holistic Prediction
        cap = cv2.VideoCapture(video_path)
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        frame_count = 0
        sequence = []

        print("Total frames:", total_frames)

        # Set up the Mediapipe model
        with mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
            while cap.isOpened() and frame_count < total_frames:
                sequence = []
                for _ in range(30):  # Read 30 frames
                    ret, frame = cap.read()
                    if not ret:
                        break
                    # Make detections
                    image, results = mediapipe_detection(frame, holistic)
                    keypoints = extract_keypoints(results)
                    sequence.append(keypoints)
                    frame_count += 1

                if len(sequence) == 30:
                    # Prepare the input for the model
                    input_data = prepare_input(np.array(sequence))
                    res = langmodel.predict(input_data)[0]
                    prediction_result_array = res.tolist()
                    max_index = np.argmax(prediction_result_array)
                    predicted_answer = lang_answer_array[max_index]
                    print("Predicted answer:", predicted_answer, "Actual answer:", actual_answer)

                    if predicted_answer == actual_answer:
                        correct_prediction_count += 1
                
                if correct_prediction_count >= 2:
                    break

        cap.release()
        cv2.destroyAllWindows()

        print("Correct prediction count:", correct_prediction_count)
        if correct_prediction_count >= 2:
            final_answer = True
        else:
            final_answer = False

        # If predicted_answer was not assigned during processing, return an error message
        if predicted_answer is None:
            raise ValueError("No valid prediction could be made")

        print("Final answer:", final_answer, "Predicted answer:", predicted_answer, "Actual answer:", actual_answer)
        return jsonify({"result": final_answer, "predicted": predicted_answer})

    except Exception as e:
        logging.error(str(e))
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    CORS(app, resources={r"/*": {"origins": "*"}})
    app.run(host="0.0.0.0", port=5001)
