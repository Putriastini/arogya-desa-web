import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      
      {/* 1. NAVBAR SECTION */}
      <nav className="bg-[#054026] text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-lg tracking-wider">
          AROGYA DESA
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-green-200">Beranda</a>
          <a href="#" className="hover:text-green-200">Daftar TOGA</a>
          <a href="#" className="hover:text-green-200">Tentang</a>
          <a href="#" className="hover:text-green-200">Kontak</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      {/* Catatan: Ganti URL gambar background dengan gambar asli dari folder assets kamu nanti */}
      <section 
        className="relative h-[500px] flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587334274328-64186a80aebf?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Konten Hero */}
        <div className="relative z-10 text-white mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">AROGYA DESA</h1>
          <p className="text-lg md:text-xl font-medium mb-8 drop-shadow-md">
            Platform Edukasi Herbal & Monitoring Kesehatan Berbasis Digital
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#054026] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <span>🌿</span> TOGA
            </button>
            {/* Tombol Laporan ini nanti tinggal kamu arahin href-nya ke Google Form Tasya */}
            <button className="bg-white text-[#054026] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <span>📋</span> Laporan
            </button>
          </div>
        </div>
      </section>

      {/* 3. TENTANG SECTION */}
      {/* Menggunakan gradient sesuai desain Figma */}
      <section className="bg-gradient-to-b from-[#1c4d33] to-[#749d68] py-16 px-4">
        
        {/* Judul Tentang */}
        <div className="text-center text-white mb-8 flex justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold">Tentang</h2>
        </div>

        {/* Card Deskripsi */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-center">
            Website <strong className="text-[#054026]">AROGYA DESA</strong> menyediakan layanan informasi digital yang membantu masyarakat dalam mengenal dan memahami tanaman obat secara mudah dan cepat. Website ini bertujuan untuk meningkatkan literasi kesehatan masyarakat Desa Batuan melalui pemanfaatan kearifan lokal Usada Bali dan Taru Pramana. Melalui platform ini, pengguna dapat mengakses informasi tanaman herbal, manfaat, budidaya, serta pengolahannya secara informatif dan terpercaya.
          </p>
        </div>

        {/* 4. STATISTIK & FITUR GRID */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center gap-4 hover:shadow-lg transition cursor-default">
            <span className="text-3xl">🌱</span>
            <span className="text-[#054026] font-bold text-lg">15+ Tanaman TOGA</span>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center gap-4 hover:shadow-lg transition cursor-default">
            <span className="text-3xl">📄</span>
            <span className="text-[#054026] font-bold text-lg">1.800+ KK Terdata</span>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center gap-4 hover:shadow-lg transition cursor-default">
            <span className="text-3xl">📈</span>
            <span className="text-[#054026] font-bold text-lg text-center leading-tight">Monitoring<br/>Kesehatan Rutin</span>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center gap-4 hover:shadow-lg transition cursor-default">
            <span className="text-3xl">🔔</span>
            <span className="text-[#054026] font-bold text-lg text-center leading-tight">Reminder<br/>Digital Berkala</span>
          </div>

        </div>
      </section>

      {/* 5. FOOTER (Simple Footer) */}
      <footer className="bg-[#2a2a2a] text-gray-400 py-8 text-center text-sm">
        <p>&copy; 2026 Arogya Desa - PPK Ormawa HME. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;
