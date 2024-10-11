# File: app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from ml_model import predict

app = Flask(__name__)
CORS(app)

@app.route('/api/predict', methods=['POST'])
def api_predict():
    data = request.json
    result = predict(data['input'])
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
    