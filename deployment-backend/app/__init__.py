# File: app/__init__.py
from flask import Flask
from flask_cors import CORS
from app.config import Config  # Updated import statement

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    CORS(app)

    from app.routes import main
    app.register_blueprint(main)

    return app