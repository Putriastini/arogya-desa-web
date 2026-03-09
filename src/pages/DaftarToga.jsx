import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { plants } from "../data/plants"; 

const DaftarToga = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.latin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pt-10 pb-24 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 1. Judul Sekarang di Atas */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#06371B] mb-2 uppercase tracking-tight">Daftar TOGA</h2>
          <div className="h-1.5 w-20 bg-[#A2C11C] mx-auto rounded-full"></div>
        </div>

        {/* 2. Kolom Search Sekarang di Bawah Judul */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input
            type="text"
            placeholder="Cari tanaman (Contoh: Bawang Merah)..."
            className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#f0f4f0] focus:border-[#A2C11C] outline-none transition-all shadow-sm italic text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>

        {/* Container Utama Kartu Tanaman */}
        <div className="border-2 border-[#f0f4f0] rounded-[50px] p-8 md:p-14 shadow-sm bg-[#fafdfa]">
          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPlants.map((plant) => (
                <div 
                  key={plant.id} 
                  className="bg-white border border-gray-100 rounded-[35px] p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
                >
                  <div className="mb-6 overflow-hidden rounded-3xl h-48 bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-[#06371B] font-extrabold text-xl mb-1">{plant.name}</h3>
                  <p className="text-gray-400 text-xs italic mb-6">{plant.latin}</p>
                  
                  <Link 
                    to={`/daftartoga/${plant.id}`} 
                    className="inline-block bg-[#06371B] text-white text-[12px] font-bold py-2.5 px-8 rounded-lg hover:bg-[#A2C11C] transition-colors shadow-md active:scale-95"
                  >
                    Lihat Detail
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🍃</div>
              <h3 className="text-xl font-bold text-[#06371B]">
                Tanaman "{searchTerm}" tidak ditemukan
              </h3>
              <p className="text-gray-500 mt-2 text-sm">Coba gunakan kata kunci lain.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DaftarToga;