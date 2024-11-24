import { initializeApp } from 'firebase/app';
import { getToken, getMessaging, onMessage } from 'firebase/messaging';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAzp7Rf-3eiuikIzAKa9WyFXBUUofK9c0o",
    authDomain: "sign-app-1f522.firebaseapp.com",
    projectId: "sign-app-1f522",
    storageBucket: "sign-app-1f522.appspot.com",
    messagingSenderId: "578529233560",
    appId: "1:578529233560:web:b38faacfff5a0f72781eed",
    measurementId: "G-DHZ2WDQR5E"
  };



const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
const storage = getStorage(firebaseApp);

// export const getOrRegisterServiceWorker = () => {
//   if ('serviceWorker' in navigator) {
//     return window.navigator.serviceWorker
//       .getRegistration('/firebase-push-notification-scope')
//       .then((serviceWorker) => {
//         if (serviceWorker) return serviceWorker;
//         return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
//           scope: '/firebase-push-notification-scope',
//         });
//       });
//   }
//   throw new Error('The browser doesn`t support service worker.');
// };

// export const getFirebaseToken = () =>
//   getOrRegisterServiceWorker()
//     .then((serviceWorkerRegistration) =>
//       getToken(messaging, { vapidKey: 'BK_L26hBgyHhNaHojN_B3HpHkP5DBau9ZuYXuGAInGct4RjBGS946RGbNymVdQtcGAwfK7rlzB_EMdyauxOsh1U', serviceWorkerRegistration }));

// export const onForegroundMessage = () =>
//   new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));

export const uploadFile = async (file: File): Promise<string> => {
  // Check file type compatibility
  // const supportedTypes = ['video/mp4', 'video/quicktime'];
  // if (!supportedTypes.includes(file.type)) {
  //   throw new Error('Unsupported file type for QuickTime Player.');
  // }

  console.log('File being uploaded:', file);

  const date = new Date();
  const fileName = `${date.getTime()}.mp4`;

  // Use Firebase Storage for uploading
  const storageRef = ref(storage, fileName);

  // Upload the file to Firebase
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);

  return url;
};

import React, { useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const VideoConverter = () => {
    const [file, setFile] = useState(null);
    const [outputUrl, setOutputUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const ffmpeg = createFFmpeg({ log: true });

    const convertToMp4 = async () => {
        if (!file) return;

        setLoading(true);

        try {
            // Load FFmpeg core
            if (!ffmpeg.isLoaded()) {
                await ffmpeg.load();
            }

            // Write the file to the FFmpeg filesystem
            const fileName = file.name;
            const outputFileName = 'output.mp4';

            ffmpeg.FS('writeFile', fileName, await fetchFile(file));

            // Run FFmpeg command to convert to MP4
            await ffmpeg.run('-i', fileName, '-c:v', 'libx264', '-t', '60', outputFileName);

            // Read the output file from the FFmpeg filesystem
            const data = ffmpeg.FS('readFile', outputFileName);

            // Create a Blob from the output data
            const videoBlob = new Blob([data.buffer], { type: 'video/mp4' });

            // Generate a downloadable URL
            const url = URL.createObjectURL(videoBlob);
            setOutputUrl(url);
        } catch (error) {
            console.error('Error converting video:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Video to MP4 Converter</h1>
            <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={convertToMp4} disabled={!file || loading}>
                {loading ? 'Converting...' : 'Convert to MP4'}
            </button>
            {outputUrl && (
                <div>
                    <h3>Converted Video:</h3>
                    <video src={outputUrl} controls width="400" />
                    <a href={outputUrl} download="output.mp4">
                        Download MP4
                    </a>
                </div>
            )}
        </div>
    );
};

export default VideoConverter;
