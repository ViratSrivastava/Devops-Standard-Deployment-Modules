// File: src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="w-64 bg-gray-800 p-4">
      <ul>
        <li><Link to="/" className="block py-2 hover:text-blue-400">Home</Link></li>
        <li><Link to="/overview" className="block py-2 hover:text-blue-400">Overview</Link></li>
        <li><Link to="/model" className="block py-2 hover:text-blue-400">Model Interface</Link></li>
        <li><Link to="/contact" className="block py-2 hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;