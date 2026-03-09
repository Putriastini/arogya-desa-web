import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Layanan from './components/Layanan';
import Footer from './components/Footer';
import DaftarToga from './pages/DaftarToga';
import DetailToga from './pages/DetailToga'; // 1. Import file DetailToga

// Komponen untuk menampung semua isi Landing Page
const LandingPage = () => (
  <>
    <Hero />
    <Tentang />
    <Layanan />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-poppins">
        <Navbar />
        
        {/* Tambahkan padding top agar konten tidak tertutup Navbar yang fixed */}
        <main className="flex-grow pt-14"> 
          <Routes>
            {/* Halaman Utama (Beranda) */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Halaman Daftar TOGA */}
            <Route path="/daftartoga" element={<DaftarToga />} />

            {/* 2. Jalur Dinamis untuk Detail TOGA menggunakan :id */}
            <Route path="/daftartoga/:id" element={<DetailToga />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;