import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    
    # Add other configuration variables as needed
    # For example:
    # DATABASE_URI = os.environ.get('DATABASE_URI') or 'sqlite:///your_database.db'
    # ML_MODEL_PATH = os.environ.get('ML_MODEL_PATH') or 'path/to/your/model.joblib'
    
    # Flask-specific configurations
    DEBUG = os.environ.get('FLASK_DEBUG') or False
    TESTING = os.environ.get('FLASK_TESTING') or False