// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import ModelInterface from './pages/ModelInterface';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/overview" component={Overview} />
            <Route path="/model" component={ModelInterface} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;