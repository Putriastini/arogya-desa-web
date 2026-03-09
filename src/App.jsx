import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Spacer supaya konten tidak tertutup Navbar yang fixed */}
      <div className="pt-16">
        {/* Nanti kita lanjut bikin bagian Hero di sini */}

      </div>
    </div>
  );
}

export default App;