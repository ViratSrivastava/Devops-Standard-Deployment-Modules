# app/routes.py
from flask import request, jsonify
from app import app
from app.ml_model import predict

@app.route('/api/predict', methods=['POST'])
def api_predict():
    data = request.json
    result = predict(data['input'])
    return jsonify({'result': result})