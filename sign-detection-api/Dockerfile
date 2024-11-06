# Use the official Python 3.11.9 image
FROM python:3.11.9-slim

# Install system dependencies
RUN apt-get update && apt-get install -y libgl1 libglib2.0-0

# Set a working directory inside the container
WORKDIR /app

# Copy only requirements.txt initially to leverage Docker caching
COPY requirements.txt requirements.txt

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Expose port 5000 to the outside world
EXPOSE 5001

# Define the command to run the app
CMD ["python", "app.py"]
