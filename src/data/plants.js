// src/data/plants.js
import imgTemulawak from "../assets/temulawak.jpg";
import imgSeledri from "../assets/seledri.jpg";
import imgKunyit from "../assets/kunyit.webp";
import imgDaunKatuk from "../assets/daun katuk.jpeg";
import imgDaunDewa from "../assets/daun dewa.jpeg";
import imgJaheMerah from "../assets/jahe merah.jpg";
import imgKemangi from "../assets/kemangi.jpg";
import imgKencur from "../assets/kencur.jpeg";
import imgSereh from "../assets/sereh.jpeg";
import imgLidahBuaya from "../assets/lidah buaya.jpg";
import imgBawangMerah from "../assets/bawang merah.jpeg";
import imgBawangPutih from "../assets/bawang putih.jpg";
import imgBrotowali from "../assets/brotowali.jpg";
import imgBungaTelang from "../assets/bunga telang.jpg";
import imgDaunKayuManis from "../assets/daun kayu manis.jpg";

export const plants = [
  { 
    id: "temulawak",
    name: "Temulawak", 
    latin: "Curcuma xanthorrhiza", 
    image: imgTemulawak,
    deskripsi: "Temulawak Adalah Tanaman Obat Unggulan Dalam Taru Pramana Yang Dikenal Sebagai 'The Golden Ginger'. Berkhasiat Tinggi Untuk Menjaga Fungsi Hati, Meningkatkan Imunitas Tubuh, Serta Efektif Meredakan Nyeri Sendi Akibat Penyakit Musim Hujan Seperti Cikungunya.",
    manfaat: ["Meningkatkan Imunitas", "Menjaga Kesehatan Hati", "Anti-Inflamasi"],
    olahan: ["Wedang Temulawak", "Jamu Temulawak", "Serbuk Temulawak Instan"],
    linkBudidaya: "https://Bit.ly/BudidayaTemulawak",
    linkResep: ["https://Bit.ly/ResepJamuTemulawak", "https://Bit.ly/ResepMinumanTemulawak"]
  },
  { 
    id: "bawang-merah",
    name: "Bawang Merah", 
    latin: "Allium cepa L.", 
    image: imgBawangMerah,
    deskripsi: "Bawang Merah mengandung senyawa sulfur dan kuersetin yang berfungsi sebagai antibiotik alami. Sangat efektif untuk menurunkan suhu tubuh saat demam dan mengatasi gigitan serangga.",
    manfaat: ["Menurunkan Panas Demam", "Mengatasi Masuk Angin", "Obat Luka Luar"],
    olahan: ["Parutan Bawang Kompres", "Minyak Bawang Telon"],
    linkBudidaya: "https://Bit.ly/BudidayaBawangMerah",
    linkResep: ["https://Bit.ly/OlahBawangMerah"]
  },
  { 
    id: "bawang-putih",
    name: "Bawang Putih", 
    latin: "Allium sativum", 
    image: imgBawangPutih,
    deskripsi: "Dikenal sebagai antibiotik paling kuat dari alam. Mengandung Alisin yang dapat menurunkan tekanan darah tinggi dan menjaga kesehatan jantung secara optimal.",
    manfaat: ["Menurunkan Kolesterol", "Mengontrol Tekanan Darah", "Anti-Bakteri & Jamur"],
    olahan: ["Bawang Putih Panggang", "Baceman Bawang Putih"],
    linkBudidaya: "https://Bit.ly/BudidayaBawangPutih",
    linkResep: ["https://Bit.ly/OlahBawangPutih"]
  },
  { 
    id: "brotowali",
    name: "Brotowali", 
    latin: "Tinospora crispa", 
    image: imgBrotowali,
    deskripsi: "Tanaman merambat yang terkenal dengan rasa pahitnya. Berkhasiat sebagai pembersih darah alami dan membantu mengontrol kadar gula darah bagi penderita diabetes.",
    manfaat: ["Mengontrol Gula Darah", "Mengatasi Gatal Kulit", "Meningkatkan Nafsu Makan"],
    olahan: ["Rebusan Batang Brotowali", "Jamu Pahitan"],
    linkBudidaya: "https://Bit.ly/BudidayaBrotowali",
    linkResep: ["https://Bit.ly/OlahBrotowali"]
  },
  { 
    id: "bunga-telang",
    name: "Bunga Telang", 
    latin: "Clitoria ternatea", 
    image: imgBungaTelang,
    deskripsi: "Bunga berwarna biru cantik yang kaya akan antioksidan antosianin. Sangat baik untuk kesehatan mata, mempertajam daya ingat, dan detoksifikasi tubuh.",
    manfaat: ["Menjaga Kesehatan Mata", "Detoksifikasi Tubuh", "Meningkatkan Fokus"],
    olahan: ["Teh Bunga Telang", "Nasi Biru Telang"],
    linkBudidaya: "https://Bit.ly/BudidayaBungaTelang",
    linkResep: ["https://Bit.ly/OlahBungaTelang"]
  },
  { 
    id: "daun-dewa",
    name: "Daun Dewa", 
    latin: "Gynura divaricata", 
    image: imgDaunDewa,
    deskripsi: "Disebut Daun Dewa karena khasiatnya dalam melancarkan peredaran darah dan mengatasi pembengkakan. Sering digunakan dalam terapi pendamping luka memar.",
    manfaat: ["Melancarkan Sirkulasi Darah", "Mengobati Luka Memar", "Menurunkan Darah Tinggi"],
    olahan: ["Lalapan Daun Dewa", "Rebusan Daun Dewa"],
    linkBudidaya: "https://Bit.ly/BudidayaDaunDewa",
    linkResep: ["https://Bit.ly/OlahDaunDewa"]
  },
  { 
    id: "daun-katuk",
    name: "Daun Katuk", 
    latin: "Sauropus androgynus", 
    image: imgDaunKatuk,
    deskripsi: "Kaya akan vitamin A, C, dan mineral. Daun Katuk sangat terkenal untuk meningkatkan produksi ASI bagi ibu menyusui serta menjaga stamina tubuh.",
    manfaat: ["Melancarkan ASI", "Mencegah Osteoporosis", "Kesehatan Mata"],
    olahan: ["Sayur Bening Katuk", "Tumis Katuk Jagung"],
    linkBudidaya: "https://Bit.ly/BudidayaDaunKatuk",
    linkResep: ["https://Bit.ly/OlahDaunKatuk"]
  },
  { 
    id: "daun-kayu-manis",
    name: "Daun Kayu Manis", 
    latin: "Cinnamomum burmannii", 
    image: imgDaunKayuManis,
    deskripsi: "Mengandung minyak atsiri yang menghangatkan. Berfungsi memperbaiki sistem pencernaan dan sering digunakan sebagai aroma terapi alami.",
    manfaat: ["Menghangatkan Tubuh", "Mengatasi Perut Kembung", "Aroma Terapi Alami"],
    olahan: ["Wedang Rempah", "Campuran Teh"],
    linkBudidaya: "https://Bit.ly/BudidayaKayuManis",
    linkResep: ["https://Bit.ly/OlahKayuManis"]
  },
  { 
    id: "jahe-merah",
    name: "Jahe Merah", 
    latin: "Zingiber officinale var. Rubrum", 
    image: imgJaheMerah,
    deskripsi: "Memiliki rasa lebih pedas dari jahe biasa. Sangat efektif untuk menghangatkan badan, meredakan nyeri otot, dan memperkuat sistem imun tubuh.",
    manfaat: ["Meredakan Pegal Linu", "Mencegah Mual/Mabuk", "Anti-Oksidan Tinggi"],
    olahan: ["Susu Jahe Merah", "Wedang Ronde"],
    linkBudidaya: "https://Bit.ly/BudidayaJaheMerah",
    linkResep: ["https://Bit.ly/OlahJaheMerah"]
  },
  { 
    id: "kemangi",
    name: "Kemangi", 
    latin: "Ocimum basilicum", 
    image: imgKemangi,
    deskripsi: "Tanaman aromatik yang segar. Selain penghilang bau badan, kemangi dapat meredakan stres ringan dan menjaga kesegaran rongga mulut.",
    manfaat: ["Menghilangkan Bau Badan", "Meredakan Stres Ringan", "Menjaga Kesegaran Mulut"],
    olahan: ["Lalapan Segar", "Pepes Ikan Kemangi"],
    linkBudidaya: "https://Bit.ly/BudidayaKemangi",
    linkResep: ["https://Bit.ly/OlahKemangi"]
  },
  { 
    id: "kencur",
    name: "Kencur", 
    latin: "Kaempferia galanga", 
    image: imgKencur,
    deskripsi: "Sahabat suara merdu. Kencur sangat baik untuk melegakan tenggorokan, mengobati batuk, serta meningkatkan nafsu makan pada anak-anak.",
    manfaat: ["Meredakan Batuk & Dahak", "Menghilangkan Stress", "Meningkatkan Nafsu Makan"],
    olahan: ["Jamu Beras Kencur", "Bumbu Seblak"],
    linkBudidaya: "https://Bit.ly/BudidayaKencur",
    linkResep: ["https://Bit.ly/OlahKencur"]
  },
  { 
    id: "kunyit",
    name: "Kunyit", 
    latin: "Curcuma longa", 
    image: imgKunyit,
    deskripsi: "Mengandung Kurkumin sebagai antibiotik alami. Sangat baik untuk menjaga kesehatan lambung, detoksifikasi hati, dan mengatasi nyeri haid.",
    manfaat: ["Meredakan Asam Lambung", "Mengatasi Nyeri Haid", "Detoks Hati"],
    olahan: ["Kunyit Asam", "Nasi Kuning"],
    linkBudidaya: "https://Bit.ly/BudidayaKunyit",
    linkResep: ["https://Bit.ly/OlahKunyit"]
  },
  { 
    id: "lidah-buaya",
    name: "Lidah Buaya", 
    latin: "Aloe vera", 
    image: imgLidahBuaya,
    deskripsi: "Tanaman serbaguna untuk kesehatan kulit dan pencernaan. Bagus untuk penyembuhan luka bakar ringan, kesehatan rambut, dan mengatasi sembelit.",
    manfaat: ["Penyembuh Luka Bakar", "Kesehatan Rambut", "Mengatasi Sembelit"],
    olahan: ["Minuman Jelly Aloe", "Masker Wajah"],
    linkBudidaya: "https://Bit.ly/BudidayaAloeVera",
    linkResep: ["https://Bit.ly/OlahAloeVera"]
  },
  { 
    id: "seledri",
    name: "Seledri", 
    latin: "Apium graveolens", 
    image: imgSeledri,
    deskripsi: "Dikenal sebagai obat alami untuk darah tinggi. Kandungan fitonutriennya membantu merelaksasi pembuluh darah dan membantu membersihkan ginjal.",
    manfaat: ["Menurunkan Darah Tinggi", "Membersihkan Ginjal", "Penyubur Rambut"],
    olahan: ["Jus Seledri", "Taburan Sup"],
    linkBudidaya: "https://Bit.ly/BudidayaSeledri",
    linkResep: ["https://Bit.ly/OlahSeledri"]
  },
  { 
    id: "sereh",
    name: "Sereh", 
    latin: "Cymbopogon citratus", 
    image: imgSereh,
    deskripsi: "Memiliki aroma Citronella yang menenangkan. Air rebusannya dapat meredakan nyeri sendi, merelaksasi pikiran, dan mengusir nyamuk alami.",
    manfaat: ["Meredakan Nyeri Sendi", "Detoksifikasi Pencernaan", "Relaksasi Pikiran"],
    olahan: ["Teh Sereh", "Bumbu Soto"],
    linkBudidaya: "https://Bit.ly/BudidayaSereh",
    linkResep: ["https://Bit.ly/OlahSereh"]
  },
];