# File: ml_model.py
import joblib

# Load your ML model
model = joblib.load('path/to/your/model.joblib')

def predict(input_data):
    # Preprocess input_data if necessary
    prediction = model.predict([input_data])
    return prediction.tolist()
