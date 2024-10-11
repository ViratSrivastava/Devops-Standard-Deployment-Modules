# Devops Standard Deployment Modules

# Local Setup Instructions for ML Project

## Frontend Setup (React)

1. Install Node.js and npm:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/)

   - This will also install npm (Node Package Manager)

2. Create a new React project:

   ```bash
   npx create-react-app std-deployment

   cd std-deployment
   ```

3. Install additional dependencies:

   ```bash
   npm install react-router-dom tailwindcss @craco/craco
   ```

4. Set up Tailwind CSS:

   ```bash
   npx tailwindcss init -p
   ```

5. Replace the content of `src` folder with the provided React components.

6. Update `package.json` to use Craco:

   ```json
   "scripts": {
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
     "eject": "react-scripts eject"
   }
   ```

7. Create a `craco.config.js` file in the root directory:

   ```javascript
   module.exports = {
     style: {
       postcss: {
         plugins: [require('tailwindcss'), require('autoprefixer')],
       },
     },
   };
   ```

8. Run the development server:

   ```bash
   npm start
   ```

## Backend Setup (Python/Flask)

1. Install Python:
   - Download and install Python from [python.org](https://www.python.org/downloads/)

2. Create a new directory for the backend:

   ```bash
   mkdir deployment-backend
   cd deployment-backend
   ```

3. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

4. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`

5. Create the necessary files (`app.py`, `ml_model.py`, `requirements.txt`) with the provided content.

6. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

7. Run the Flask application:

   ```bash
   python app.py
   ```

## Docker Setup (Optional)

1. Install Docker:
   - Download and install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)

2. Build the Docker image:

   ```bash
   docker build -t deployment-backend .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 5000:5000 deployment-backend
   ```

## Final Steps

1. Ensure your ML model file is in the correct location and update the path in `ml_model.py`.

2. Update the API endpoint in the React frontend (`ModelInterface.js`) to match your local backend URL (usually `http://localhost:5000`).

3. You should now be able to run both the frontend and backend locally!

## Folder Structures

## Frontend Structure (React)

```
ml-project-frontend/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   └── Sidebar.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Overview.js
│   │   ├── ModelInterface.js
│   │   └── Contact.js
│   │
│   ├── assets/
│   │   └── (images, icons, etc.)
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── utils/
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── tailwind.config.js
└── craco.config.js
```

## Backend Structure (Python/Flask)

```
Copyml-project-backend/
│
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── ml_model.py  # Moved here
│   │
│   ├── services/
│   │   └── prediction_service.py
│   │
│   └── utils/
│       └── data_preprocessing.py
│
├── tests/
│   ├── __init__.py
│   ├── test_routes.py
│   └── test_ml_model.py
│
├── model/
│   └── trained_model.joblib
│
├── config/
│   └── config.py
│
├── logs/
│   └── .gitkeep
│
├── app.py
├── requirements.txt
├── Dockerfile
├── .gitignore
├── README.md
└── .env
```

# Running the ML Project

## Step 1: Start the Backend

1. Open a terminal and navigate to your backend directory:
   ```
   cd deployment-backend
   ```

2. Activate your virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

3. Ensure all dependencies are installed:
   ```
   pip install -r requirements.txt
   ```

4. Set any necessary environment variables:
   - On Windows:
     ```
     set FLASK_APP=app.py
     set FLASK_ENV=development
     ```
   - On macOS/Linux:
     ```
     export FLASK_APP=app.py
     export FLASK_ENV=development
     ```

5. Run the Flask application:
   ```
   flask run
   ```

   Your backend should now be running on `http://localhost:5000`.

## Step 2: Start the Frontend

1. Open a new terminal window and navigate to your frontend directory:
   ```
   cd std-deployemnt
   ```

2. Ensure all dependencies are installed:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

   Your frontend should now be running on `http://localhost:3000`.

## Step 3: Access the Application

1. Open a web browser and go to `http://localhost:3000`.
2. You should see your React application running and be able to interact with it.

## Troubleshooting

- If you encounter any "module not found" errors in the backend, make sure you've activated the virtual environment and installed all dependencies.
- If the frontend can't connect to the backend, check that the backend URL in your React code (probably in `src/utils/api.js` or similar) matches the URL where your Flask app is running.
- Make sure both terminal windows (for backend and frontend) remain open while you're using the application.