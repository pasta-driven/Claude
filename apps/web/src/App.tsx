import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Claude - Digitales Whiteboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Echtes Whiteboard-Gefühl, digital erlebbar
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700">
            🚧 In Entwicklung - US-001 abgeschlossen: Tech-Stack festgelegt
          </p>
          <p className="text-sm text-gray-500 mt-4">
            React + Excalidraw + Yjs + PostgreSQL
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
