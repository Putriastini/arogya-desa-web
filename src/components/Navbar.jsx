import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#06371B] text-white z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo sesuai UI */}
          <div className="flex-shrink-0">
            <span className="text-sm font-bold tracking-[0.2em] text-[#A2C11C]">
              AROGYA DESA
            </span>
          </div>

          {/* Menu Tengah - Perhatikan warna hover dan font-nya */}
          <div className="hidden md:flex space-x-10 text-[13px] font-medium tracking-wide">
            <a href="#" className="hover:text-[#A2C11C] transition-all">Beranda</a>
            <a href="#" className="hover:text-[#A2C11C] transition-all">Daftar TOGA</a>
            <a href="#" className="hover:text-[#A2C11C] transition-all">Tentang</a>
            <a href="#" className="hover:text-[#A2C11C] transition-all">Kontak</a>
          </div>
          
          {/* Sisi kanan dikosongkan biar menu agak ke kanan sesuai UI */}
          <div className="w-20 hidden md:block"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;