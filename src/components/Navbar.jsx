import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#06371B] text-white z-50 shadow-lg font-poppins">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-center relative">
        
        {/* 1. Logo - Tetap di kiri */}
        <div className="absolute left-6">
          <Link to="/" className="text-sm font-bold tracking-[0.2em] text-[#A2C11C]">
            AROGYA DESA
          </Link>
        </div>

        {/* 2. Menu Navigasi - Kembali ke Tengah */}
        <div className="hidden md:flex space-x-10 text-[13px] font-medium tracking-wide">
          <a href="/#beranda" className="hover:text-[#A2C11C] transition-all">Beranda</a>
          
          {/* Link ini diarahkan ke /togalist sesuai rute di App.jsx */}
          <Link to="/daftartoga" className="hover:text-[#A2C11C] transition-all">Daftar TOGA</Link>
          
          <a href="/#tentang" className="hover:text-[#A2C11C] transition-all">Tentang</a>
          <a href="/#kontak" className="hover:text-[#A2C11C] transition-all">Kontak</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;