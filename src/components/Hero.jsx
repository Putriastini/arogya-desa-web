import React from 'react';
import bgHero from '../assets/hero-bg.png'; 

const Hero = () => {
  return (
    <div id="beranda" className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        {/* Overlay hitam tipis sesuai UI agar teks putih terbaca jelas */}
        <div className="absolute inset-0 bg-black/30"></div> 
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center text-white mt-10">
        
        {/* Judul: Ukuran dikecilkan agar lebih elegan sesuai request */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-[0.25em] mb-3 uppercase">
          AROGYA DESA
        </h1>
        
        {/* Slogan */}
        <p className="text-sm md:text-lg font-semibold mb-12 tracking-wide max-w-2xl">
          Platform Edukasi Herbal & Monitoring Kesehatan Berbasis Digital
        </p>

        {/* Buttons: Menggunakan tag <a> agar bisa diklik langsung */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-8 w-full">
          {/* Tombol TOGA */}
          <a 
            href="/daftartoga" 
            className="flex items-center justify-center gap-3 bg-white text-[#06371B] px-6 py-2 md:px-10 md:py-2.5 rounded-full font-bold text-sm md:text-base shadow-lg hover:scale-105 transition-all min-w-[140px] md:min-w-[180px]"
          >
            <span className="text-xl">🌿</span> TOGA
          </a>
          
          {/* Tombol Laporan - Isi href dengan link Google Form kamu nanti */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWpGWoh5lZTWKEx3RiO27Lj41QtO0LOH7Apj3cokOtGXjU5w/viewform?usp=publish-editor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-[#06371B] px-6 py-2 md:px-10 md:py-2.5 rounded-full font-bold text-sm md:text-base shadow-lg hover:scale-105 transition-all min-w-[140px] md:min-w-[180px]"
          >
            <span className="text-xl">📋</span> Laporan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;