import React from 'react';

const Footer = () => {
  return (
    // Padding vertikal dikurangi (py-12) agar tidak terlalu tinggi
    <footer id="kontak" className="bg-[#1e1e1e] text-white py-12 font-poppins">
      <div className="max-w-5xl mx-auto px-8">
        
        {/* Judul Tentang Kami - Lebih Kecil & Rapat */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">
            Tentang Kami
          </h2>
          {/* Garis hijau aksen yang lebih pendek sesuai SS */}
          <div className="h-[3px] w-16 bg-[#A2C11C] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Garis Pembatas Tipis */}
        <div className="border-t border-white/10 mb-10 w-full"></div>

        {/* Konten Grid - Jarak antar kolom dirapatkan (gap-10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Sisi Kiri: Kontak */}
          <div className="space-y-4 text-sm font-light tracking-wide">
            <div className="flex items-center gap-4 group">
              <span className="text-lg opacity-70">📍</span>
              <p className="opacity-80">Desa Batuan, Sukawati, Gianyar, Bali</p>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-lg opacity-70">✉️</span>
              <p className="opacity-80 border-b border-white/20 pb-0.5 hover:border-[#A2C11C] transition-colors">
                arogyadesa@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="text-lg opacity-70">📞</span>
              <p className="opacity-80">+62 812 7275 5504</p>
            </div>
          </div>

          {/* Sisi Kanan: Deskripsi - Dibuat lebih ramping (max-w-md) */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
               <div className="w-1 h-5 bg-[#A2C11C]"></div> {/* Garis tegak aksen */}
               <h3 className="text-[#A2C11C] font-bold text-sm tracking-widest uppercase">
                AROGYA DESA
              </h3>
            </div>
            <p className="text-[13px] leading-relaxed font-light opacity-60 text-justify tracking-wide">
              Website edukasi dan monitoring kesehatan berbasis TOGA Desa Batuan yang bertujuan 
              meningkatkan kesadaran masyarakat terhadap kesehatan dan pemanfaatan tanaman 
              obat keluarga melalui integrasi kearifan lokal dan teknologi digital.
            </p>
          </div>

        </div>

        {/* Copyright - Ukuran teks dikecilkan */}
        <div className="mt-16 text-center">
          <p className="text-[9px] text-white/20 tracking-[0.3em] uppercase">
            © 2026 Arogya Desa — Empowering Village Health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;