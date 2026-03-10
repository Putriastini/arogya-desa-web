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
            Website <span className="font-bold text-[#06371B]">AROGYA DESA</span> merupakan platform digital Desa Batuan yang mengintegrasikan edukasi tanaman obat berbasis kearifan lokal Usada Bali dan Taru Pramana dengan sistem monitoring kesehatan masyarakat. Melalui platform ini, pengguna dapat mengakses informasi terpercaya mengenai manfaat, budidaya, dan pengolahan herbal, sekaligus melakukan pelaporan kesehatan secara mandiri melalui fitur laporan digital. Kehadiran website ini bertujuan untuk meningkatkan literasi kesehatan serta mendukung kemandirian kesehatan komunitas melalui pemanfaatan teknologi dan tradisi secara selaras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tentang;