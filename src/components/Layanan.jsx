import React from 'react';

const Layanan = () => {
  const dataLayanan = [
    { id: 1, icon: "🌿", title: "15+ Tanaman TOGA", color: "bg-green-50" },
    { id: 2, icon: "📄", title: "1.800+ KK Terdata", color: "bg-blue-50" },
    { id: 3, icon: "📈", title: "Monitoring Kesehatan Rutin", color: "bg-indigo-50" },
    { id: 4, icon: "🔔", title: "Reminder Digital Berkala", color: "bg-yellow-50" },
  ];

  return (
    <section className="py-12 bg-[#F9FAFB]"> {/* Padding atas bawah dikurangi */}
      <div className="max-w-4xl mx-auto px-6"> {/* Max-width dikecilkan dari 5xl ke 4xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"> {/* Jarak antar kartu dirapatkan */}
          {dataLayanan.map((item) => (
            <div 
              key={item.id}
              className="flex items-center gap-4 p-5 bg-white rounded-[25px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 hover:translate-y-[-2px] transition-all duration-300"
            >
              {/* Box Ikon lebih kecil */}
              <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center ${item.color} rounded-xl text-xl`}>
                {item.icon}
              </div>
              
              {/* Teks lebih ramping */}
              <h3 className="text-[#334155] font-bold text-sm md:text-base tracking-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layanan;