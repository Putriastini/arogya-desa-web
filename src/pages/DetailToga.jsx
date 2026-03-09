import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { plants } from "../data/plants"; // Import data terpusat

const DetailToga = () => {
  const { id } = useParams(); // Ambil ID dari URL (misal: 'temulawak')
  const navigate = useNavigate();

  // Cari data tanaman berdasarkan ID yang ada di URL
  const selectedPlant = plants.find((p) => p.id === id);

  // Scroll ke atas otomatis saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Jika ID tidak ditemukan di data plants
  if (!selectedPlant) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-red-600">Tanaman tidak ditemukan!</h2>
        <button 
          onClick={() => navigate("/togalist")}
          className="mt-4 bg-[#06371B] text-white px-6 py-2 rounded-lg"
        >
          Kembali ke Daftar
        </button>
      </div>
    );
  }

  return (
    <section className="py-10 bg-white font-poppins">
      <div className="max-w-5xl mx-auto px-6">
        {/* Tombol Kembali menggunakan navigate(-1) untuk kembali ke halaman sebelumnya */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 text-[#06371B] text-4xl hover:scale-110 transition-transform font-bold"
        >
          ←
        </button>

        <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
          {/* Foto Tanaman */}
          <div className="w-full md:w-1/2">
            <img 
              src={selectedPlant.image} 
              alt={selectedPlant.name} 
              className="w-full h-80 object-cover rounded-[40px] shadow-lg border-2 border-gray-50"
            />
          </div>
          
          {/* Judul & Deskripsi */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-[#06371B]">{selectedPlant.name}</h2>
            <p className="text-gray-500 italic mb-4">({selectedPlant.latin})</p>
            
            <h4 className="text-[#06371B] font-bold mb-2">Deskripsi:</h4>
            <div className="bg-[#06371B] text-white p-6 rounded-[25px] shadow-xl leading-relaxed text-sm">
              {selectedPlant.deskripsi}
            </div>
          </div>
        </div>

        {/* Baris 1: Manfaat & Olahan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white border-2 border-gray-100 rounded-[30px] p-8 shadow-sm relative overflow-visible">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#06371B] px-8 py-2 rounded-2xl flex items-center gap-2 text-white text-sm font-bold shadow-md w-max">
              <span>💡</span> Manfaat
            </div>
            <ul className="mt-6 space-y-4">
              {selectedPlant.manfaat.map((m, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-semibold text-gray-700">
                  <span className="bg-[#06371B] text-white w-6 h-6 flex-shrink-0 flex items-center justify-center rounded font-bold text-xs">{i + 1}</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-[30px] p-8 shadow-sm relative overflow-visible">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#06371B] px-8 py-2 rounded-2xl flex items-center gap-2 text-white text-sm font-bold shadow-md w-max">
              <span>🍵</span> Olahan
            </div>
            <ul className="mt-6 space-y-4">
              {selectedPlant.olahan.map((o, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-semibold text-gray-700">
                  <span className="bg-[#06371B] text-white w-6 h-6 flex-shrink-0 flex items-center justify-center rounded font-bold text-xs">{i + 1}</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Baris 2: Budidaya & Cara Pengolahan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-100 rounded-[30px] p-8 shadow-sm relative overflow-visible flex flex-col items-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#06371B] px-8 py-2 rounded-2xl flex items-center gap-2 text-white text-sm font-bold shadow-md w-max">
              <span>🌱</span> Budidaya
            </div>
            <a href={selectedPlant.linkBudidaya} target="_blank" rel="noreferrer" className="mt-6 text-[#06371B] text-sm font-bold hover:underline break-all text-center">
              🔗 {selectedPlant.linkBudidaya}
            </a>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-[30px] p-8 shadow-sm relative overflow-visible flex flex-col items-center">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#06371B] px-8 py-2 rounded-2xl flex items-center gap-2 text-white text-sm font-bold shadow-md w-max">
              <span>🔄</span> Cara Pengolahan
            </div>
            <div className="mt-6 space-y-2 flex flex-col items-center">
              {selectedPlant.linkResep.map((l, i) => (
                <a key={i} href={l} target="_blank" rel="noreferrer" className="text-[#06371B] text-sm font-bold hover:underline break-all text-center">
                  🔗 {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailToga;