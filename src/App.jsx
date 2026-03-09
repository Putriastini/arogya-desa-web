import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Spacer supaya konten tidak tertutup Navbar yang fixed */}
      <div className="pt-16">
        {/* Nanti kita lanjut bikin bagian Hero di sini */}
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-800">Navbar Berhasil Terpasang!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;