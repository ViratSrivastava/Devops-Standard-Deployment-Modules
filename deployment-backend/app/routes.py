# File: app/routes.py
from flask import Blueprint, request, jsonify
from app.services.prediction_service import predict

main = Blueprint('main', __name__)

@main.route('/api/predict', methods=['POST'])
def api_predict():
    data = request.json
    if not data or 'input' not in data:
        return jsonify({'error': 'Invalid input'}), 400
    
    result = predict(data['input'])
    return jsonify({'result': result})
