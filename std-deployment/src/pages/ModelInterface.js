import React, { useState } from 'react';

function ModelInterface() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would call your backend API
    // const response = await fetch('/api/predict', { method: 'POST', body: JSON.stringify({ input }) });
    // const data = await response.json();
    // setOutput(data.result);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Model Interface</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 rounded"
          placeholder="Enter your input here"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      {output && (
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-2xl font-semibold mb-2">Output:</h2>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
}

export default ModelInterface