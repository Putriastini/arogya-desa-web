import React from 'react';

const Tentang = () => {
  return (
    <section id="tentang" className="relative bg-gradient-to-b from-[#06371B] to-[#476824] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Judul dengan Ikon Info sesuai UI */}
        <div className="flex items-center justify-center gap-3 text-white mb-8">
          <span className="text-3xl">ⓘ</span>
          <h2 className="text-3xl font-bold tracking-wide">Tentang</h2>
        </div>

        {/* Box Putih Melayang */}
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <p className="text-gray-800 leading-relaxed text-justify md:text-center text-sm md:text-base">
            Website <span className="font-bold text-[#06371B]">AROGYA DESA</span> menyediakan layanan informasi digital yang membantu masyarakat dalam mengenal dan memahami tanaman obat secara mudah dan cepat. Website ini bertujuan untuk meningkatkan literasi kesehatan masyarakat Desa Batuan melalui pemanfaatan kearifan lokal Usada Bali dan Taru Pramana. Melalui platform ini, pengguna dapat mengakses informasi tanaman herbal, manfaat, budidaya, serta pengolahannya secara informatif dan terpercaya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tentang;