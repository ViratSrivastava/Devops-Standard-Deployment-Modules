// File: src/pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact & Resources</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
        <a href="https://github.com/yourusername/your-repo" className="text-blue-400 hover:underline">
          View on GitHub
        </a>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Report an Issue</h2>
        {/* Add a form to create GitHub issues */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Connect with Me</h2>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/yourusername" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="https://github.com/yourusername" className="text-blue-400 hover:underline">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default Contact;