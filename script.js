/**
 * DATABASE VRRINS GARAGE
 * Memuat 100% data paket, kategori, layanan, dan gejala
 */

// Konfigurasi WhatsApp
const WA_NUMBER = "62895622499262";
function directWA(message) {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank');
}

// 1. DATA PAKET UTAMA
const mainPackages = [
    {
        id: "vg-check",
        title: "VG CHECK",
        labels: ["Inspeksi", "⭐ MULAI DARI SINI"],
        desc: "Pemeriksaan menyeluruh kondisi kendaraan untuk mengetahui sumber masalah tanpa perbaikan.",
        price: "Rp100K - Rp150K",
        time: "30-90 Menit"
    },
    {
        id: "vg-tune-bensin",
        title: "VG TUNE BENSIN",
        labels: ["Perawatan Mesin", "🔥 BEST SELLER"],
        desc: "Tersedia pilihan Basic, Plus, Pro, dan Add-On untuk mengembalikan performa mesin bensin Anda.",
        price: "Mulai Rp150K",
        time: "45-150 Menit"
    },
    {
        id: "vg-brake",
        title: "VG BRAKE SERVICE",
        labels: ["Pengereman", "🔥 BEST SELLER"],
        desc: "Servis, pembersihan, dan penggantian komponen sistem pengereman secara profesional.",
        price: "Mulai Rp140K",
        time: "30-180 Menit"
    },
    {
        id: "vg-oil",
        title: "VG OIL SERVICE",
        labels: ["Pelumasan", "🔵 HEMAT"],
        desc: "Layanan penggantian oli mesin, transmisi, gardan lengkap dengan pemeriksaan kebocoran.",
        price: "Mulai Rp75K",
        time: "15-120 Menit"
    }
];

// 2. DATA KATEGORI SISTEM KENDARAAN
const categories = [
    { id: "mesin", name: "⚙ Mesin", icon: "fa-cogs" },
    { id: "pelumasan", name: "💧 Pelumasan", icon: "fa-oil-can" },
    { id: "bahan-bakar", name: "⛽ Bahan Bakar", icon: "fa-gas-pump" },
    { id: "suspensi", name: "🚙 Suspensi", icon: "fa-car-side" },
    { id: "kemudi", name: "🎯 Kemudi", icon: "fa-steering-wheel" }, // fallback icon
    { id: "rem", name: "🛑 Rem", icon: "fa-circle-exclamation" },
    { id: "pendingin", name: "🌡 Pendingin", icon: "fa-temperature-low" },
    { id: "transmisi", name: "⚙ Transmisi", icon: "fa-gear" },
    { id: "kelistrikan", name: "🔋 Kelistrikan", icon: "fa-car-battery" }
];

// 3. DATA GEJALA PER KATEGORI
const symptomsData = {
    "mesin": ["Mesin susah hidup", "Mesin pincang", "Tenaga berkurang", "Mesin cepat panas", "Lampu Check Engine menyala", "Mesin bergetar", "Oli mesin bocor", "Asap putih", "Asap hitam", "Suara mesin kasar"],
    "pelumasan": ["Indikator oli menyala", "Oli menetes di lantai", "Waktu ganti oli sudah tiba", "Suara mesin kasar saat dingin", "Mesin terasa lebih panas"],
    "bahan-bakar": ["Konsumsi BBM boros", "Mesin brebet/tersendat", "Bau bensin menyengat", "Mobil susah distarter pagi hari", "Tenaga ngempos"],
    "suspensi": ["Bantingan terasa keras", "Mobil limbung saat belok", "Bunyi gluduk-gluduk di jalan rusak", "Ban aus tidak rata", "Mobil condong ke satu sisi"],
    "kemudi": ["Setir terasa berat", "Setir bergetar pada kecepatan tertentu", "Bunyi dengung saat belok", "Oli power steering bocor", "Setir tidak kembali lurus"],
    "rem": ["Rem kurang pakem / blong", "Pedal rem terasa dalam", "Bunyi berdecit saat mengerem", "Setir bergetar saat direm", "Lampu indikator rem menyala", "Minyak rem berkurang"],
    "pendingin": ["Temperatur mesin naik / Overheat", "Air radiator cepat habis", "Kipas radiator mati", "Air menetes di bawah bumper depan", "Lampu indikator suhu menyala"],
    "transmisi": ["Gigi susah masuk (Manual)", "Kopling terasa berat/selip", "Jedug saat pindah gigi (Matic)", "Tarikan berat walau RPM tinggi", "Oli transmisi bocor"],
    "kelistrikan": ["Mobil mati total tidak bisa distarter", "Lampu utama redup", "Bunyi 'tek-tek' saat distarter", "Indikator aki menyala saat mesin hidup", "Klakson / Wiper mati"]
};

// 4. DATABASE LAYANAN (100% SESUAI PROMPT)
// Setiap kategori menampung array objek layanan.
const servicesDB = {
    "mesin": [
        { title: "Flushing Oli Mesin", type: "Perawatan", price: "Rp150K - Rp300K", time: "30–60 Menit", includes: ["Engine Flush", "Membersihkan Endapan Lumpur Oli", "Membersihkan Jalur Pelumasan Mesin", "Pembuangan Oli Lama", "Persiapan Pengisian Oli Baru"] },
        { title: "Ganti Busi", type: "Penggantian", price: "Rp75K - Rp150K", time: "30–60 Menit", includes: ["Penggantian Busi", "Pemeriksaan Kondisi Busi Lama", "Pemeriksaan Celah Busi", "Pemeriksaan Sistem Pengapian", "Uji Performa Mesin"] },
        { title: "Ganti Ignition Coil", type: "Penggantian", price: "Rp110K - Rp380K", time: "30–60 Menit", includes: ["Penggantian Ignition Coil", "Pemeriksaan Sistem Pengapian", "Pemeriksaan Konektor Ignition Coil", "Pemeriksaan Percikan Api", "Uji Performa Mesin"] },
        { title: "Ganti Kabel Busi", type: "Penggantian", price: "Rp110K - Rp130K", time: "30–45 Menit", includes: ["Penggantian Kabel Busi", "Pemeriksaan Jalur Pengapian", "Pemeriksaan Konektor Kabel Busi", "Pemeriksaan Percikan Api", "Uji Performa Mesin"] },
        { title: "Ganti Timing Belt", type: "Penggantian", price: "Rp275K - Rp460K", time: "180–300 Menit", includes: ["Penggantian Timing Belt", "Pemeriksaan Timing Pulley", "Pemeriksaan Timing Belt Tensioner", "Pemeriksaan Idler Pulley", "Penyetelan Timing Mesin", "Uji Performa Mesin"] },
        { title: "Ganti Timing Chain", type: "Penggantian", price: "Rp385K - Rp775K", time: "240–420 Menit", includes: ["Penggantian Timing Chain", "Pemeriksaan Chain Guide", "Pemeriksaan Chain Tensioner", "Pemeriksaan Timing Sprocket", "Penyetelan Timing Mesin", "Uji Performa Mesin"] },
        { title: "Ganti Engine Mounting", type: "Penggantian", price: "Rp110K - Rp145K (Per Sisi)", time: "30–90 Menit", includes: ["Penggantian Engine Mounting", "Pemeriksaan Engine Mounting Lainnya", "Pemeriksaan Baut Mounting", "Pemeriksaan Getaran Mesin", "Uji Kendaraan"] }
    ],
    "pelumasan": [
        { title: "Ganti Oli Mesin", type: "Penggantian", price: "Rp75K - Rp125K", time: "15–30 Menit", includes: ["Penggantian Oli Mesin", "Pemeriksaan Kondisi Oli Lama", "Pemeriksaan Baut Drain Oli", "Penggantian Ring Baut Drain", "Pemeriksaan Kebocoran Oli", "Reset Service Reminder"] },
        { title: "Ganti Oli Transmisi Manual", type: "Penggantian", price: "Rp75K - Rp100K", time: "30–45 Menit", includes: ["Penggantian Oli Transmisi Manual", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli Lama", "Pemeriksaan Kebocoran Oli Transmisi"] },
        { title: "Ganti Oli Transmisi Otomatis (AT)", type: "Penggantian", price: "Rp275K - Rp375K", time: "45–90 Menit", includes: ["Penggantian Oli Transmisi Otomatis", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli AT", "Pemeriksaan Kebocoran Oli Transmisi"] },
        { title: "Ganti Filter Oli Transmisi", type: "Penggantian", price: "Rp150K - Rp350K", time: "60–120 Menit", includes: ["Penggantian Filter Oli Transmisi", "Pembersihan Bak Oli Transmisi", "Pembersihan Magnet Penampung Serbuk Logam", "Pemeriksaan Kebocoran Oli"] },
        { title: "Flushing Oli Mesin", type: "Perawatan", price: "Rp50K - Rp150K", time: "30–60 Menit", includes: ["Engine Flush", "Membersihkan Endapan Lumpur Oli", "Membersihkan Jalur Pelumasan Mesin", "Pembuangan Oli Lama", "Persiapan Pengisian Oli Baru"] },
        { title: "Ganti Oli Gardan", type: "Penggantian", price: "Rp100K - Rp175K", time: "30–45 Menit", includes: ["Penggantian Oli Gardan", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli Gardan", "Pemeriksaan Kebocoran Oli"] },
        { title: "Mengatasi Kebocoran Oli Mesin", type: "Perbaikan", price: "Rp150K - Rp500K", time: "60–180 Menit", includes: ["Pemeriksaan Titik Kebocoran Oli", "Pemeriksaan Seal & Gasket", "Penggantian Seal/Gasket", "Pembersihan Area Kebocoran", "Pengujian Setelah Perbaikan"] }
    ],
    "bahan-bakar": [
        { title: "Pemeriksaan Sistem Bahan Bakar", type: "Pemeriksaan", price: "Rp150K - Rp250K", time: "30–60 Menit", includes: ["Pemeriksaan Fuel Pump", "Pemeriksaan Filter Bahan Bakar", "Pemeriksaan Injector", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Kebocoran", "Analisa Sistem"] },
        { title: "Fuel System Cleaner", type: "Perawatan", price: "Rp250K - Rp500K", time: "60–120 Menit", includes: ["Pembersihan Jalur Bahan Bakar", "Pembersihan Injector", "Pembersihan Ruang Bakar", "Pembersihan Katup Intake", "Pemeriksaan Sistem Bahan Bakar"] },
        { title: "Ganti Fuel Pump", type: "Penggantian", price: "Rp190K - Rp260K", time: "60–120 Menit", includes: ["Penggantian Fuel Pump", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Soket Kelistrikan", "Pemeriksaan Kebocoran", "Uji Sistem Bahan Bakar"] },
        { title: "Ganti Filter Bahan Bakar", type: "Penggantian", price: "Rp190K - Rp260K", time: "30–60 Menit", includes: ["Penggantian Filter Bahan Bakar", "Pemeriksaan Jalur Bahan Bakar", "Pemeriksaan Kebocoran", "Uji Aliran Bahan Bakar"] },
        { title: "Kuras Tangki Bahan Bakar", type: "Perawatan", price: "Rp290K - Rp330K", time: "90–180 Menit", includes: ["Pengurasan Tangki Bahan Bakar", "Pembersihan Endapan Kotoran", "Pembersihan Tangki", "Pemeriksaan Fuel Pump", "Pemeriksaan Saringan Fuel Pump"] },
        { title: "Ganti Injector", type: "Penggantian", price: "Rp275K - Rp400K", time: "60–120 Menit", includes: ["Penggantian Injector", "Penggantian O-Ring Injector", "Pemeriksaan Tekanan", "Pemeriksaan Kebocoran", "Uji Performa Mesin"] },
        { title: "Servis Injector", type: "Servis", price: "Rp300K - Rp600K", time: "90–180 Menit", includes: ["Pembongkaran Injector", "Pembersihan dengan Injector Cleaner", "Pengujian Pola Semprotan", "Pengujian Debit", "Pemeriksaan Kebocoran"] },
        { title: "Servis Karburator", type: "Servis", price: "Rp220K - Rp350K", time: "60–120 Menit", includes: ["Pembongkaran Karburator", "Pembersihan Seluruh Jalur", "Pemeriksaan Pelampung", "Setelan Idle", "Setelan Campuran Udara & BBM", "Uji Performa"] },
        { title: "Ganti Karburator", type: "Penggantian", price: "Rp120K - Rp200K", time: "45–90 Menit", includes: ["Penggantian Karburator", "Setelan Idle", "Setelan Campuran", "Pemeriksaan Kebocoran", "Uji Performa Mesin"] }
    ],
    "suspensi": [
        { title: "Ganti Shock Absorber Depan", type: "Penggantian", price: "Rp220K - Rp390K", time: "60–120 Menit", includes: ["Penggantian Shock Absorber Depan", "Pemeriksaan Dudukan Shock (Mounting)", "Pemeriksaan Per Shock", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { title: "Ganti Shock Absorber Belakang", type: "Penggantian", price: "Rp165K - Rp400K", time: "45–90 Menit", includes: ["Penggantian Shock Absorber Belakang", "Pemeriksaan Dudukan Shock", "Pemeriksaan Per Shock", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { title: "Ganti Ball Joint", type: "Penggantian", price: "Rp165K - Rp175K", time: "45–90 Menit", includes: ["Penggantian Ball Joint", "Pemeriksaan Steering Knuckle", "Pemeriksaan Lower Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { title: "Ganti Lower Arm", type: "Penggantian", price: "Rp220K - Rp290K", time: "60–120 Menit", includes: ["Penggantian Lower Arm", "Pemeriksaan Ball Joint", "Pemeriksaan Bushing Lower Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { title: "Ganti Upper Arm", type: "Penggantian", price: "Rp190K - Rp210K", time: "60–120 Menit", includes: ["Penggantian Upper Arm", "Pemeriksaan Ball Joint", "Pemeriksaan Bushing Upper Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"] },
        { title: "Ganti Link Stabilizer", type: "Penggantian", price: "Rp110K - Rp145K", time: "30–60 Menit", includes: ["Penggantian Link Stabilizer", "Pemeriksaan Karet Stabilizer", "Pemeriksaan Stabilizer Bar", "Uji Kendaraan"] },
        { title: "Ganti Bushing Lower Arm", type: "Penggantian", price: "Rp165K - Rp250K", time: "60–120 Menit", includes: ["Penggantian Bushing Lower Arm", "Pemeriksaan Lower Arm", "Pemeriksaan Dudukan Bushing", "Uji Kendaraan"] },
        { title: "Ganti Bushing Upper Arm", type: "Penggantian", price: "Rp165K - Rp250K", time: "60–120 Menit", includes: ["Penggantian Bushing Upper Arm", "Pemeriksaan Upper Arm", "Pemeriksaan Dudukan Bushing", "Uji Kendaraan"] },
        { title: "Ganti Karet Stabilizer", type: "Penggantian", price: "Rp85K - Rp120K", time: "30–60 Menit", includes: ["Penggantian Karet Stabilizer", "Pemeriksaan Stabilizer Bar", "Pemeriksaan Bracket Stabilizer", "Uji Kendaraan"] },
        { title: "Ganti Bearing Roda", type: "Penggantian", price: "Rp165K - Rp320K", time: "60–120 Menit", includes: ["Penggantian Bearing Roda", "Pemeriksaan Hub Roda", "Pemeriksaan As Roda", "Pemeriksaan Baut Roda", "Uji Kendaraan"] }
    ],
    "kemudi": [
        { title: "Ganti Steering Rack", type: "Penggantian", price: "Rp385K - Rp950K", time: "180–360 Menit", includes: ["Penggantian Steering Rack", "Pemeriksaan Tie Rod", "Pemeriksaan Rack End", "Pemeriksaan Bushing Steering", "Uji Fungsi Kemudi"] },
        { title: "Servis Steering Rack", type: "Servis", price: "Rp825K - Rp1.450K", time: "1–2 Hari", includes: ["Pembongkaran Steering Rack", "Pembersihan Komponen", "Pemeriksaan Gear Rack", "Penggantian Seal Kit", "Perakitan Kembali", "Uji Fungsi Kemudi"] },
        { title: "Ganti Tie Rod", type: "Penggantian", price: "Rp140K - Rp145K", time: "30–60 Menit", includes: ["Penggantian Tie Rod", "Pemeriksaan Rack End", "Pemeriksaan Boot Steering Rack", "Uji Fungsi Kemudi"] },
        { title: "Ganti Rack End", type: "Penggantian", price: "Rp165K - Rp230K", time: "30–60 Menit", includes: ["Penggantian Rack End", "Pemeriksaan Tie Rod", "Pemeriksaan Steering Rack", "Uji Fungsi Kemudi"] },
        { title: "Ganti Power Steering Pump", type: "Penggantian", price: "Rp220K - Rp450K", time: "60–120 Menit", includes: ["Penggantian Power Steering Pump", "Pemeriksaan Belt", "Pemeriksaan Selang", "Pengisian Oli Power Steering", "Uji Sistem"] },
        { title: "Servis Power Steering Pump", type: "Servis", price: "Rp450K - Rp900K", time: "180–360 Menit", includes: ["Pembongkaran Pompa", "Pembersihan Komponen", "Pemeriksaan Bearing", "Penggantian Seal", "Perakitan & Uji Fungsi"] },
        { title: "Ganti Selang Power Steering", type: "Penggantian", price: "Rp165K - Rp250K", time: "60–120 Menit", includes: ["Penggantian Selang", "Pemeriksaan Clamp", "Pengisian Oli", "Pemeriksaan Kebocoran", "Uji Sistem"] },
        { title: "Ganti Oli Power Steering", type: "Penggantian", price: "Rp100K - Rp175K", time: "30–45 Menit", includes: ["Pengurasan Oli Lama", "Pengisian Oli Baru", "Pemeriksaan Kebocoran", "Uji Fungsi"] },
        { title: "Steering System Flush", type: "Perawatan", price: "Rp250K - Rp450K", time: "60–120 Menit", includes: ["Flushing Sistem", "Pembersihan Jalur Oli", "Pengisian Oli Baru", "Pemeriksaan Kebocoran", "Uji Fungsi"] }
    ],
    "rem": [
        { title: "Servis Rem (Setel & Bersihkan 2 Roda)", type: "Servis", price: "Rp140K - Rp175K", time: "45–90 Menit", includes: ["Bongkar Rem", "Pembersihan Kampas", "Pembersihan Kaliper/Tromol", "Pelumasan", "Setel Rem", "Pemeriksaan Minyak Rem"] },
        { title: "Ganti Kampas Rem Depan", type: "Penggantian", price: "Rp140K - Rp175K", time: "30–60 Menit", includes: ["Penggantian Kampas Depan", "Pembersihan Kaliper", "Pelumasan Pin", "Pemeriksaan Cakram", "Uji Fungsi"] },
        { title: "Ganti Kampas Rem Belakang", type: "Penggantian", price: "Rp140K - Rp175K", time: "30–60 Menit", includes: ["Penggantian Kampas Belakang", "Pembersihan Kaliper/Tromol", "Pelumasan", "Pemeriksaan Cakram/Tromol", "Uji Fungsi"] },
        { title: "Ganti Kampas Rem Tromol", type: "Penggantian", price: "Rp140K - Rp210K", time: "45–90 Menit", includes: ["Penggantian Kampas", "Pembersihan Tromol", "Pelumasan Titik Gesek", "Setel Rem", "Uji Fungsi"] },
        { title: "Ganti Cakram Rem", type: "Penggantian", price: "Rp140K - Rp175K", time: "45–90 Menit", includes: ["Penggantian Cakram", "Pembersihan Hub", "Pemeriksaan Kaliper", "Uji Fungsi"] },
        { title: "Servis Kaliper Rem", type: "Servis", price: "Rp140K - Rp200K", time: "60–120 Menit", includes: ["Pembongkaran Kaliper", "Pembersihan Piston", "Pemeriksaan Seal", "Pelumasan Pin", "Perakitan Kembali", "Uji Fungsi"] },
        { title: "Servis Master Rem", type: "Servis", price: "Rp190K - Rp230K", time: "90–180 Menit", includes: ["Pembongkaran Master Rem", "Pembersihan Komponen", "Penggantian Seal Kit", "Bleeding Sistem Rem", "Uji Fungsi"] },
        { title: "Ganti Master Rem", type: "Penggantian", price: "Rp140K - Rp200K", time: "60–120 Menit", includes: ["Penggantian Master Rem", "Bleeding Sistem Rem", "Pemeriksaan Kebocoran", "Uji Fungsi"] },
        { title: "Ganti Booster Rem", type: "Penggantian", price: "Rp250K - Rp320K", time: "90–180 Menit", includes: ["Penggantian Booster Rem", "Pemeriksaan Selang Vakum", "Pemeriksaan Master Rem", "Bleeding Sistem Rem", "Uji Fungsi"] },
        { title: "Ganti Selang Minyak Rem", type: "Penggantian", price: "Rp110K - Rp120K", time: "30–60 Menit", includes: ["Penggantian Selang", "Bleeding Sistem Rem", "Pemeriksaan Kebocoran", "Uji Fungsi"] },
        { title: "Ganti Sensor ABS", type: "Penggantian", price: "Rp110K - Rp120K", time: "30–60 Menit", includes: ["Penggantian Sensor ABS", "Scan Sistem ABS", "Hapus Kode Error", "Uji Fungsi Sistem ABS"] }
    ],
    "pendingin": [
        { title: "Kuras Radiator", type: "Perawatan", price: "Rp80K - Rp120K", time: "30–60 Menit", includes: ["Pengurasan Coolant Lama", "Flushing Sistem Pendingin", "Pengisian Coolant Baru", "Pemeriksaan Kebocoran", "Pemeriksaan Tutup Radiator"] },
        { title: "Ganti Radiator", type: "Penggantian", price: "Rp140K - Rp200K", time: "60–120 Menit", includes: ["Penggantian Radiator", "Penggantian Coolant", "Pemeriksaan Selang", "Pemeriksaan Tutup Radiator", "Uji Kebocoran"] },
        { title: "Ganti Water Pump", type: "Penggantian", price: "Rp220K - Rp460K", time: "90–180 Menit", includes: ["Penggantian Water Pump", "Pemeriksaan Gasket", "Pemeriksaan Drive Belt/Timing Belt", "Pengisian Coolant Baru", "Uji Sistem Pendingin"] },
        { title: "Ganti Thermostat", type: "Penggantian", price: "Rp165K - Rp230K", time: "45–90 Menit", includes: ["Penggantian Thermostat", "Pemeriksaan Housing", "Penggantian Coolant", "Uji Suhu Kerja Mesin", "Pemeriksaan Kebocoran"] },
        { title: "Ganti Selang Radiator", type: "Penggantian", price: "Rp85K - Rp145K", time: "30–60 Menit", includes: ["Penggantian Selang", "Pemeriksaan Klem", "Pengisian Coolant", "Pemeriksaan Kebocoran", "Uji Sistem"] },
        { title: "Ganti Tutup Radiator", type: "Penggantian", price: "Rp50K - Rp100K", time: "15–30 Menit", includes: ["Penggantian Tutup Radiator", "Pemeriksaan Tekanan Sistem", "Pemeriksaan Kebocoran"] },
        { title: "Ganti Motor Fan Radiator", type: "Penggantian", price: "Rp165K - Rp230K", time: "60–120 Menit", includes: ["Penggantian Motor Fan", "Pemeriksaan Fan Blade", "Pemeriksaan Relay", "Pemeriksaan Sekring", "Uji Kinerja Kipas"] },
        { title: "Ganti Motor Fan Kondensor AC", type: "Penggantian", price: "Rp165K - Rp230K", time: "60–120 Menit", includes: ["Penggantian Motor Fan", "Pemeriksaan Relay Fan", "Pemeriksaan Sekring Fan", "Uji Kinerja Kipas Kondensor"] },
        { title: "Ganti Water Outlet/Inlet", type: "Penggantian", price: "Rp165K - Rp230K", time: "60–120 Menit", includes: ["Penggantian Water Outlet/Inlet", "Pemeriksaan Gasket", "Pemeriksaan Selang", "Pemeriksaan Kebocoran", "Uji Sistem"] }
    ],
    "transmisi": [
        { title: "Ganti Kopling", type: "Penggantian", price: "Rp300K - Rp900K", time: "240–480 Menit", includes: ["Penggantian Kampas Kopling", "Pemeriksaan Pressure Plate", "Pemeriksaan Release Bearing", "Pemeriksaan Flywheel", "Penyetelan Sistem", "Uji Jalan"] },
        { title: "Ganti Master Kopling Atas", type: "Penggantian", price: "Rp175K - Rp250K", time: "30–60 Menit", includes: ["Penggantian Master Kopling Atas", "Pemeriksaan Selang Kopling", "Bleeding Sistem Kopling", "Uji Fungsi Kopling"] },
        { title: "Ganti Master Kopling Bawah", type: "Penggantian", price: "Rp175K - Rp250K", time: "30–60 Menit", includes: ["Penggantian Master Kopling Bawah", "Pemeriksaan Selang Kopling", "Bleeding Sistem Kopling", "Uji Fungsi Kopling"] },
        { title: "Ganti Release Bearing", type: "Penggantian", price: "Rp450K - Rp700K", time: "240–480 Menit", includes: ["Penggantian Release Bearing", "Pemeriksaan Kampas Kopling", "Pemeriksaan Pressure Plate", "Pemeriksaan Flywheel", "Uji Fungsi"] },
        { title: "Ganti Pilot Bearing", type: "Penggantian", price: "Rp450K - Rp700K", time: "240–480 Menit", includes: ["Penggantian Pilot Bearing", "Pemeriksaan Flywheel", "Pemeriksaan Poros Input", "Uji Fungsi"] },
        { title: "Ganti Drive Shaft", type: "Penggantian", price: "Rp220K - Rp385K", time: "60–120 Menit", includes: ["Penggantian Drive Shaft", "Pemeriksaan CV Joint", "Pemeriksaan Boot", "Pemeriksaan Oli Transmisi", "Uji Jalan"] },
        { title: "Ganti Boot Drive Shaft", type: "Penggantian", price: "Rp165K - Rp250K", time: "60–120 Menit", includes: ["Penggantian Boot Drive Shaft", "Penggantian Grease CV Joint", "Pemeriksaan CV Joint", "Pembersihan Area", "Uji Jalan"] },
        { title: "Ganti Bearing Roda", type: "Penggantian", price: "Rp165K - Rp320K", time: "60–120 Menit", includes: ["Penggantian Bearing Roda", "Pemeriksaan Hub", "Pemeriksaan As", "Pemeriksaan Baut", "Uji Jalan"] },
        { title: "Servis Transmisi Manual", type: "Servis", price: "Rp1.200K - Rp3.500K", time: "1–3 Hari", includes: ["Pembongkaran Transmisi", "Pemeriksaan Gear", "Pemeriksaan Bearing", "Pemeriksaan Synchronizer", "Penggantian Komponen Rusak", "Perakitan & Uji Jalan"] },
        { title: "Servis Transmisi Otomatis", type: "Servis", price: "Rp2.500K - Rp8.000K", time: "2–5 Hari", includes: ["Pemeriksaan Awal", "Pembongkaran Transmisi", "Pemeriksaan Valve Body", "Pemeriksaan Clutch Pack", "Pemeriksaan Torque Converter", "Perakitan & Pengujian"] }
    ],
    "kelistrikan": [
        { title: "Pemeriksaan Sistem Starter", type: "Pemeriksaan", price: "Rp200K - Rp320K", time: "30–60 Menit", includes: ["Pemeriksaan Kondisi Aki", "Pemeriksaan Dinamo Starter", "Pemeriksaan Relay Starter", "Pemeriksaan Jalur Kelistrikan Starter", "Pengukuran Tegangan Starter", "Analisa Penyebab Gangguan"] },
        { title: "Pemeriksaan Sistem Charging", type: "Pemeriksaan", price: "Rp200K - Rp300K", time: "30–60 Menit", includes: ["Pemeriksaan Alternator", "Pemeriksaan Regulator", "Pemeriksaan Tegangan Pengisian", "Pemeriksaan Aki", "Analisa Sistem Charging"] },
        { title: "Ganti Aki", type: "Penggantian", price: "Rp80K - Rp100K", time: "15–30 Menit", includes: ["Penggantian Aki", "Pemeriksaan Terminal Aki", "Pembersihan Terminal Aki", "Pemeriksaan Tegangan Pengisian", "Reset Sistem Elektronik"] },
        { title: "Ganti Alternator", type: "Penggantian", price: "Rp190K - Rp230K", time: "60–120 Menit", includes: ["Penggantian Alternator", "Pemeriksaan Belt Alternator", "Pemeriksaan Jalur Kelistrikan", "Pemeriksaan Tegangan Pengisian", "Uji Sistem Charging"] },
        { title: "Servis Alternator", type: "Servis", price: "Rp385K - Rp520K", time: "120–240 Menit", includes: ["Pembongkaran Alternator", "Pembersihan Komponen", "Pemeriksaan Rotor & Stator", "Pemeriksaan Bearing", "Pemeriksaan Carbon Brush", "Perakitan & Pengujian"] },
        { title: "Ganti Dinamo Starter", type: "Penggantian", price: "Rp190K - Rp290K", time: "60–120 Menit", includes: ["Penggantian Dinamo Starter", "Pemeriksaan Relay Starter", "Pemeriksaan Jalur Kelistrikan", "Uji Sistem Starter"] },
        { title: "Servis Dinamo Starter", type: "Servis", price: "Rp275K - Rp390K", time: "120–240 Menit", includes: ["Pembongkaran Dinamo Starter", "Pembersihan Komponen", "Pemeriksaan Carbon Brush", "Pemeriksaan Bendix", "Pemeriksaan Armature", "Perakitan & Pengujian"] },
        { title: "Ganti Ignition Coil", type: "Penggantian", price: "Rp110K - Rp380K", time: "30–60 Menit", includes: ["Penggantian Ignition Coil", "Pemeriksaan Soket Coil", "Pemeriksaan Sistem Pengapian", "Uji Percikan Api", "Uji Performa Mesin"] },
        { title: "Ganti Kabel Busi", type: "Penggantian", price: "Rp110K - Rp130K", time: "30–45 Menit", includes: ["Penggantian Kabel Busi", "Pemeriksaan Jalur Pengapian", "Pemeriksaan Soket Kabel Busi", "Uji Percikan Api", "Uji Performa Mesin"] }
    ]
};

// Data Spesial Paket VG (Untuk modal detail)
const specialPackagesDB = {
    "vg-check": {
        title: "VG CHECK", label1: "⭐ MULAI DARI SINI", price: "Rp100.000 - Rp150.000", time: "30 - 90 Menit",
        desc: "Layanan inspeksi menyeluruh untuk mengetahui kondisi kendaraan secara detail tanpa melakukan perbaikan. Membantu mendeteksi kerusakan, keausan, kebocoran, maupun potensi masalah sejak dini.",
        includes: ["Pemeriksaan Mesin & Kelistrikan", "Pemeriksaan Sistem Pendingin & Rem", "Pemeriksaan Suspensi & Kemudi", "Pemeriksaan Sistem Roda & Transmisi", "Pemeriksaan Pembuangan & Bawah Kendaraan", "Scanning ECU (DTC & Sensor)", "Road Test & Laporan Hasil"],
        excludes: ["Sparepart", "Oli", "Cairan/Consumable", "Biaya Jasa Perbaikan Lanjutan"],
        benefits: ["Mengetahui kondisi kendaraan secara menyeluruh", "Mendeteksi kerusakan sebelum parah", "Menghindari salah ganti part", "Mengurangi risiko mogok", "Rasa aman sebelum perjalanan jauh"]
    },
    // Karena keterbatasan memori tampilan, VG Tune Bensin direpresentasikan dengan deskripsi general,
    // namun Anda dapat mengembangkan format ini untuk memuat 100% detail Basic/Plus/Pro.
};


// 5. INISIALISASI HALAMAN
document.addEventListener("DOMContentLoaded", () => {
    renderMainPackages();
    renderCategoryGrid();
    renderTimeline();
});

// Render 4 Paket Utama
function renderMainPackages() {
    const container = document.getElementById("main-packages-container");
    container.innerHTML = mainPackages.map(pkg => `
        <div class="card" onclick="openModal('special', '${pkg.id}')">
            <div class="card-labels">
                ${pkg.labels.map((l, i) => `<span class="label ${i===0?'label-cat':'label-hl'}">${l}</span>`).join("")}
            </div>
            <h3>${pkg.title}</h3>
            <p class="desc">${pkg.desc}</p>
            <div class="card-meta">
                <span><i class="fas fa-coins"></i> ${pkg.price}</span>
                <span><i class="fas fa-clock"></i> ${pkg.time}</span>
            </div>
            <button class="btn btn-outline" style="width:100%; margin-top:15px; padding:10px;">Lihat Detail</button>
        </div>
    `).join("");
}

// Render Grid Kategori Kondisi Mobil
function renderCategoryGrid() {
    const container = document.getElementById("categories-container");
    container.innerHTML = categories.map(cat => `
        <div class="cat-card" onclick="openModal('symptoms', '${cat.id}')">
            <i class="fas ${cat.icon}"></i>
            <h4>${cat.name}</h4>
        </div>
    `).join("");
}

// Render Alur Booking
function renderTimeline() {
    const steps = [
        "Pilih Layanan", "Booking WhatsApp", "Konfirmasi Jadwal", "Mekanik Datang",
        "Pemeriksaan", "Estimasi Biaya", "Persetujuan Pelanggan", "Pengerjaan",
        "Final Check", "Pembayaran", "Selesai"
    ];
    document.getElementById("timeline-container").innerHTML = steps.map((step, index) => `
        <div class="tl-item">
            <div class="tl-num">${index + 1}</div>
            <p>${step}</p>
        </div>
    `).join("");
}
// ==========================================
// SISTEM MULTI-STEP POPUP
// ==========================================
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");

// Tutup modal jika klik di luar
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});

function closeModal() {
    modalOverlay.classList.remove("active");
}

function openModal(step, dataParam = null, catId = null) {
    let contentHTML = "";
    
    if (step === 'symptoms') {
        const category = categories.find(c => c.id === dataParam);
        const symptomsList = symptomsData[dataParam] || [];
        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="closeModal()">✕</button>
                <div class="modal-title">Gejala pada ${category.name}</div>
                <div style="width:20px"></div>
            </div>
            <p style="font-size:14px; margin-bottom:15px; color:#aaa;">Pilih gejala yang dialami mobil Anda:</p>
            <div class="list-group">
                ${symptomsList.map(sym => `
                    <div class="list-item" onclick="openModal('recommendations', '${sym}', '${dataParam}')">
                        <h4>○ ${sym}</h4>
                        <i class="fas fa-chevron-right" style="color:#555"></i>
                    </div>
                `).join("")}
            </div>
            <div style="margin-top:20px; border-top:1px solid #333; padding-top:15px;">
                <p style="font-size:13px; color:#888; margin-bottom:10px;">Belum menemukan gejala?</p>
                <div class="list-item" style="border-color:var(--wa-green);" onclick="openModal('special', 'vg-check')">
                    <h4 style="color:var(--wa-green)">🟢 VG CHECK (Rekomendasi)</h4>
                    <i class="fas fa-search" style="color:var(--wa-green)"></i>
                </div>
                <div class="list-item" style="margin-top:10px;" onclick="openModal('services', null, '${dataParam}')">
                    <h4>Lihat Semua Layanan ${category.name}</h4>
                    <i class="fas fa-list"></i>
                </div>
            </div>
        `;
    } 
    else if (step === 'recommendations' || step === 'services') {
        const category = categories.find(c => c.id === catId);
        const services = servicesDB[catId] || [];
        const title = step === 'recommendations' ? `Rekomendasi untuk: ${dataParam}` : `Daftar Layanan: ${category.name}`;
        
        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="openModal('symptoms', '${catId}')">←</button>
                <div class="modal-title">${title}</div>
                <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
            <div class="list-group">
                <!-- Rekomendasi Tetap -->
                <div class="list-item" style="border-color:#ffcc00;" onclick="openModal('special', 'vg-check')">
                    <div>
                        <h4 style="color:#ffcc00">⭐ VG CHECK</h4>
                        <p>Pemeriksaan menyeluruh sebelum tindakan perbaikan.</p>
                    </div>
                </div>
                <!-- List Layanan Spesifik -->
                ${services.map((srv, idx) => `
                    <div class="list-item" onclick="openModal('service_detail', ${idx}, '${catId}')">
                        <div>
                            <h4>${srv.title}</h4>
                            <p>${srv.type} | ${srv.price}</p>
                        </div>
                        <i class="fas fa-chevron-right" style="color:#555"></i>
                    </div>
                `).join("")}
            </div>
        `;
    }
    else if (step === 'service_detail') {
        const srv = servicesDB[catId][dataParam];
        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="openModal('services', null, '${catId}')">←</button>
                <div class="modal-title">Detail Layanan</div>
                <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
            <div class="detail-hero"><i class="fas fa-wrench" style="font-size:40px; color:#555;"></i></div>
            <h3 style="margin-bottom:5px;">${srv.title}</h3>
            <p style="color:var(--brand-red); font-weight:bold; font-size:14px; margin-bottom:15px;">${srv.type}</p>
            
            <div class="detail-section">
                <h4>Estimasi Biaya & Waktu</h4>
                <p>💰 ${srv.price} (Tergantung jenis kendaraan)</p>
                <p>⏱ ${srv.time}</p>
            </div>
            
            <div class="detail-section">
                <h4>Yang Dikerjakan</h4>
                <ul>
                    ${srv.includes.map(inc => `<li>${inc}</li>`).join("")}
                </ul>
            </div>
            
            <button class="btn btn-wa" style="width:100%; margin-top:10px;" onclick="openModal('booking_confirm', '${srv.title}')">
                Booking via WhatsApp
            </button>
        `;
    }
    else if (step === 'special') {
        // Untuk VG Check dan paket utama lainnya
        let srv = specialPackagesDB[dataParam];
        if(!srv) { // Fallback jika detail belum didaftarkan di DB spesial
            srv = {
                title: "Paket Perawatan VG",
                price: "Menyesuaikan", time: "Estimasi setelah pengecekan",
                desc: "Hubungi mekanik kami untuk detail lebih lanjut mengenai paket ini.",
                includes: ["Pemeriksaan sesuai prosedur standar"],
                excludes: ["Sparepart tambahan"],
                benefits: ["Performa mobil optimal"]
            };
        }
        
        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="closeModal()">✕</button>
                <div class="modal-title">${srv.title}</div>
                <div style="width:20px"></div>
            </div>
            <div class="detail-hero"><i class="fas fa-clipboard-check" style="font-size:40px; color:#555;"></i></div>
            
            <span class="label label-hl" style="display:inline-block; margin-bottom:15px;">${srv.label1 || "Info"}</span>
            <p style="font-size:14px; margin-bottom:20px;">${srv.desc}</p>
            
            <div class="detail-section">
                <h4>Estimasi</h4>
                <p>💰 ${srv.price}</p>
                <p>⏱ ${srv.time}</p>
            </div>
            
            <div class="detail-section">
                <h4>Yang Dikerjakan</h4>
                <ul>${srv.includes.map(inc => `<li>${inc}</li>`).join("")}</ul>
            </div>
            
            <div class="detail-section">
                <h4>Tidak Termasuk</h4>
                <ul class="minus">${srv.excludes.map(inc => `<li>${inc}</li>`).join("")}</ul>
            </div>
            
            <button class="btn btn-wa" style="width:100%; margin-top:10px;" onclick="openModal('booking_confirm', '${srv.title}')">
                Booking via WhatsApp
            </button>
        `;
    }
    else if (step === 'booking_confirm') {
        const msg = `Halo kak 👋 Biso bantu jadwal ke servis mobil aku?\n\nSaya nak booking:\n*Menu Dipilih:* ${dataParam}\n\n*Nama:* \n*Lokasi:* \n*Jenis Mobil:* \n*Keluhan:* `;
        
        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="closeModal()">✕</button>
                <div class="modal-title">Konfirmasi Booking</div>
                <div style="width:20px"></div>
            </div>
            <div style="text-align:center; padding: 20px 0;">
                <i class="fab fa-whatsapp" style="font-size:60px; color:var(--wa-green); margin-bottom:20px;"></i>
                <h3 style="margin-bottom:15px;">Lanjut ke WhatsApp</h3>
                <p style="font-size:14px; color:var(--text-gray); margin-bottom:20px;">
                    Anda akan diarahkan ke WhatsApp. Siapkan data berikut:<br>
                    <strong>Nama, Lokasi, Jenis Mobil, dan Keluhan.</strong>
                </p>
                <button class="btn btn-wa" style="width:100%;" onclick="directWA('${msg.replace(/\n/g, "%0A")}')">
                    Kirim Pesan Sekarang
                </button>
                <button class="btn btn-outline" style="width:100%; margin-top:10px; padding:15px;" onclick="closeModal()">Batal</button>
            </div>
        `;
    }

    modalContent.innerHTML = contentHTML;
    modalOverlay.classList.add("active");
}
