/**
 * VRRINS GARAGE DATABASE & LOGIC (FINAL)
 */

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
        labels: ["Inspeksi", "⭐ REKOMENDASI"],
        desc: "Pemeriksaan menyeluruh kondisi kendaraan untuk mengetahui sumber masalah tanpa perbaikan.",
        price: "Rp100K - Rp150K",
        time: "30-90 Menit"
    },
    {
        id: "vg-tune-bensin",
        title: "VG TUNE BENSIN",
        labels: ["Perawatan", "🔥 BEST SELLER"],
        desc: "Mengembalikan performa mesin bensin, membersihkan ruang bakar, dan menghemat BBM.",
        price: "Mulai Rp150K",
        time: "45-150 Menit"
    },
    {
        id: "vg-brake",
        title: "VG BRAKE SERVICE",
        labels: ["Pengereman", "🔥 BEST SELLER"],
        desc: "Servis, pembersihan, dan penggantian komponen sistem pengereman agar kembali pakem.",
        price: "Mulai Rp140K",
        time: "30-180 Menit"
    },
    {
        id: "vg-oil",
        title: "VG OIL SERVICE",
        labels: ["Pelumasan", "🔵 HEMAT"],
        desc: "Penggantian oli mesin, transmisi, dan gardan profesional lengkap cek kebocoran.",
        price: "Mulai Rp75K",
        time: "15-120 Menit"
    }
];

// 2. KATEGORI BERBASIS FOTO KOMPONEN MOBIL
const categories = [
    { id: "mesin", name: "Mesin", img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=400&q=80" },
    { id: "pelumasan", name: "Pelumasan", img: "https://images.unsplash.com/photo-1635433142383-a0e2a2205573?auto=format&fit=crop&w=400&q=80" },
    { id: "bahan-bakar", name: "Bahan Bakar", img: "https://images.unsplash.com/photo-1527011047607-c744d5c2c5a0?auto=format&fit=crop&w=400&q=80" },
    { id: "suspensi", name: "Suspensi", img: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=400&q=80" },
    { id: "kemudi", name: "Kemudi", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80" }, 
    { id: "rem", name: "Rem", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80" },
    { id: "pendingin", name: "Pendingin", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80" },
    { id: "transmisi", name: "Transmisi", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80" },
    { id: "kelistrikan", name: "Kelistrikan", img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=400&q=80" }
];

// 3. GEJALA PER KATEGORI
const symptomsData = {
    "mesin": ["Mesin susah hidup", "Mesin pincang", "Tenaga berkurang", "Mesin cepat panas", "Lampu Check Engine menyala", "Mesin bergetar", "Oli mesin bocor", "Asap putih/hitam", "Suara mesin kasar"],
    "pelumasan": ["Indikator oli menyala", "Oli menetes di lantai", "Waktu ganti oli sudah tiba", "Suara mesin kasar saat dingin"],
    "bahan-bakar": ["Konsumsi BBM boros", "Mesin brebet/tersendat", "Bau bensin menyengat", "Mobil susah distarter pagi hari"],
    "suspensi": ["Bantingan terasa keras", "Mobil limbung saat belok", "Bunyi gluduk di jalan rusak", "Ban aus tidak rata"],
    "kemudi": ["Setir terasa berat", "Setir bergetar", "Bunyi dengung saat belok", "Setir tidak kembali lurus"],
    "rem": ["Rem kurang pakem / blong", "Pedal rem terasa dalam", "Bunyi berdecit saat mengerem", "Setir bergetar saat direm"],
    "pendingin": ["Temperatur naik / Overheat", "Air radiator cepat habis", "Kipas radiator mati", "Air menetes di bawah bumper"],
    "transmisi": ["Gigi susah masuk", "Kopling selip", "Jedug saat pindah gigi matic", "Tarikan berat"],
    "kelistrikan": ["Mobil mati total", "Lampu utama redup", "Bunyi 'tek-tek' saat distarter", "Klakson/Wiper mati"]
};

// 4. DATABASE LAYANAN LENGKAP
const servicesDB = {
    "mesin": [
        { title: "Flushing Oli Mesin", type: "Perawatan", price: "Rp150K - Rp300K", time: "30-60 Menit", includes: ["Engine Flush", "Membersihkan Endapan Lumpur Oli", "Pembuangan Oli Lama"] },
        { title: "Ganti Busi", type: "Penggantian", price: "Rp75K - Rp150K", time: "30-60 Menit", includes: ["Penggantian Busi", "Pemeriksaan Celah Busi", "Uji Performa"] },
        { title: "Ganti Ignition Coil", type: "Penggantian", price: "Rp110K - Rp380K", time: "30-60 Menit", includes: ["Penggantian Coil", "Pemeriksaan Sistem Pengapian"] },
        { title: "Ganti Timing Belt", type: "Penggantian", price: "Rp275K - Rp460K", time: "180-300 Menit", includes: ["Penggantian Timing Belt", "Pemeriksaan Tensioner", "Penyetelan Timing"] }
    ],
    "pelumasan": [
        { title: "Ganti Oli Mesin", type: "Penggantian", price: "Rp75K - Rp125K", time: "15-30 Menit", includes: ["Penggantian Oli", "Pemeriksaan Kebocoran", "Reset Reminder"] },
        { title: "Ganti Oli Transmisi Manual/Auto", type: "Penggantian", price: "Rp75K - Rp375K", time: "30-90 Menit", includes: ["Penggantian Oli Transmisi", "Pemeriksaan Kebocoran"] },
        { title: "Ganti Oli Gardan", type: "Penggantian", price: "Rp100K - Rp175K", time: "30-45 Menit", includes: ["Penggantian Oli Gardan", "Pemeriksaan Seal"] }
    ],
    "bahan-bakar": [
        { title: "Pemeriksaan Sistem Bahan Bakar", type: "Pemeriksaan", price: "Rp150K - Rp250K", time: "30-60 Menit", includes: ["Cek Fuel Pump", "Cek Tekanan & Injector"] },
        { title: "Fuel System Cleaner / Carbon Clean", type: "Perawatan", price: "Rp250K - Rp500K", time: "60-120 Menit", includes: ["Pembersihan Jalur BBM", "Pembersihan Injector"] },
        { title: "Ganti Fuel Pump", type: "Penggantian", price: "Rp190K - Rp260K", time: "60-120 Menit", includes: ["Penggantian Pompa Bensin", "Uji Tekanan"] }
    ],
    "suspensi": [
        { title: "Ganti Shock Absorber Depan/Belakang", type: "Penggantian", price: "Rp165K - Rp400K", time: "45-120 Menit", includes: ["Penggantian Shock", "Pemeriksaan Mounting"] },
        { title: "Ganti Ball Joint / Lower Arm", type: "Penggantian", price: "Rp165K - Rp290K", time: "45-120 Menit", includes: ["Penggantian Komponen", "Uji Kendaraan"] },
        { title: "Ganti Bearing Roda", type: "Penggantian", price: "Rp165K - Rp320K", time: "60-120 Menit", includes: ["Penggantian Bearing", "Pemeriksaan Hub"] }
    ],
    "kemudi": [
        { title: "Ganti Steering Rack / Rack End", type: "Penggantian", price: "Rp165K - Rp950K", time: "30-360 Menit", includes: ["Penggantian Part", "Uji Fungsi Kemudi"] },
        { title: "Ganti Tie Rod", type: "Penggantian", price: "Rp140K - Rp145K", time: "30-60 Menit", includes: ["Penggantian Tie Rod", "Uji Speling"] }
    ],
    "rem": [
        { title: "Servis Rem (Setel & Bersihkan 4 Roda)", type: "Servis", price: "Rp140K - Rp175K", time: "45-90 Menit", includes: ["Bongkar & Bersihkan Kaliper/Tromol", "Pelumasan Pin"] },
        { title: "Ganti Kampas Rem Depan / Belakang", type: "Penggantian", price: "Rp140K - Rp210K", time: "30-60 Menit", includes: ["Penggantian Kampas", "Pemeriksaan Piringan"] },
        { title: "Servis / Ganti Master Rem", type: "Servis", price: "Rp140K - Rp230K", time: "60-180 Menit", includes: ["Perbaikan/Ganti Master Rem", "Bleeding Minyak Rem"] }
    ],
    "pendingin": [
        { title: "Kuras Radiator & Ganti Coolant", type: "Perawatan", price: "Rp80K - Rp120K", time: "30-60 Menit", includes: ["Pengurasan Coolant Lama", "Flushing", "Isi Coolant Baru"] },
        { title: "Ganti Water Pump / Thermostat", type: "Penggantian", price: "Rp165K - Rp460K", time: "45-180 Menit", includes: ["Penggantian Komponen", "Uji Suhu Kerja Mesin"] },
        { title: "Ganti Motor Fan Radiator", type: "Penggantian", price: "Rp165K - Rp230K", time: "60-120 Menit", includes: ["Penggantian Motor Fan", "Cek Relay & Sekring"] }
    ],
    "transmisi": [
        { title: "Ganti Kampas Kopling Set", type: "Penggantian", price: "Rp300K - Rp900K", time: "240-480 Menit", includes: ["Penggantian Kampas & Matahari", "Penyetelan"] },
        { title: "Ganti Master Kopling Atas / Bawah", type: "Penggantian", price: "Rp175K - Rp250K", time: "30-60 Menit", includes: ["Penggantian Master", "Bleeding"] }
    ],
    "kelistrikan": [
        { title: "Pemeriksaan Sistem Starter & Charging", type: "Pemeriksaan", price: "Rp200K - Rp320K", time: "30-60 Menit", includes: ["Cek Aki, Alternator & Starter"] },
        { title: "Ganti Aki / Baterai Mobil", type: "Penggantian", price: "Rp80K - Rp100K", time: "15-30 Menit", includes: ["Penggantian Aki", "Pembersihan Terminal"] },
        { title: "Servis / Ganti Alternator & Starter", type: "Servis", price: "Rp190K - Rp520K", time: "60-240 Menit", includes: ["Perbaikan Dinamo", "Uji Tegangan Pengisian"] }
    ]
};

// 5. DATABASE PAKET SPESIAL
const specialPackagesDB = {
    "vg-check": {
        title: "VG CHECK", label1: "⭐ REKOMENDASI", price: "Rp100.000 - Rp150.000", time: "30 - 90 Menit",
        desc: "Inspeksi menyeluruh kondisi kendaraan di lokasi Anda untuk mendeteksi sumber masalah sebelum melakukan perbaikan.",
        includes: ["Pemeriksaan Mesin & Kelistrikan", "Pemeriksaan Sistem Pendingin & Rem", "Pemeriksaan Suspensi & Kaki-kaki", "Scanning ECU (DTC & Sensor)", "Laporan Detail & Rekomendasi"]
    },
    "vg-tune-bensin": {
        title: "VG TUNE BENSIN", label1: "🔥 BEST SELLER", price: "Mulai Rp150.000", time: "45 - 150 Menit",
        desc: "Perawatan performa mesin bensin, membersihkan ruang bakar dari kerak karbon, mengembalikan respons tarikan mesin.",
        includes: ["Carbon Clean Ruang Bakar", "Pembersihan Throttle Body", "Pemeriksaan & Setel Busi", "Scanning & Reset DTC"]
    },
    "vg-brake": {
        title: "VG BRAKE SERVICE", label1: "🔥 BEST SELLER", price: "Mulai Rp140.000", time: "30 - 180 Menit",
        desc: "Servis pemeliharaan sistem pengereman agar kembali pakem, responsif, dan bebas bunyi berdecit.",
        includes: ["Pembersihan Kampas & Kaliper Rem", "Pelumasan Pin Kaliper", "Pemeriksaan Minyak Rem & Penyetelan"]
    },
    "vg-oil": {
        title: "VG OIL SERVICE", label1: "🔵 HEMAT", price: "Mulai Rp75.000", time: "15 - 120 Menit",
        desc: "Penggantian oli mesin, transmisi, atau gardan profesional di lokasi Anda.",
        includes: ["Jasa Penggantian Oli", "Pemeriksaan Kebocoran Carter", "Reset Indikator Servis"]
    }
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    renderMainPackages();
    renderCategoryGrid();
    renderTimeline();
});

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
            <button class="btn btn-outline" style="width:100%; margin-top:10px; padding:8px; font-size:12px;">Lihat Detail</button>
        </div>
    `).join("");
}

function renderCategoryGrid() {
    const container = document.getElementById("categories-container");
    container.innerHTML = categories.map(cat => `
        <div class="cat-card" onclick="openModal('symptoms', '${cat.id}')">
            <img src="${cat.img}" alt="${cat.name}" loading="lazy">
            <h4>${cat.name}</h4>
        </div>
    `).join("");
}

// 10-Step Effective Workflow
function renderTimeline() {
    const steps = [
        "Booking WA", "Konfirmasi Jadwal", "Mekanik Datang", "Pemeriksaan",
        "Estimasi Biaya", "Persetujuan", "Pengerjaan", "Final Check",
        "Pembayaran", "Selesai"
    ];
    document.getElementById("timeline-container").innerHTML = steps.map((step, index) => `
        <div class="tl-item">
            <div class="tl-num">${index + 1}</div>
            <p>${step}</p>
        </div>
    `).join("");
}

// MODAL SYSTEM
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");

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
            <p style="font-size:13px; margin-bottom:12px; color:var(--text-sec);">Pilih gejala yang dialami mobil Anda:</p>
            <div class="list-group">
                ${symptomsList.map(sym => `
                    <div class="list-item" onclick="openModal('recommendations', '${sym}', '${dataParam}')">
                        <h4>○ ${sym}</h4>
                        <i class="fas fa-chevron-right" style="color:#555; font-size:12px;"></i>
                    </div>
                `).join("")}
            </div>
            <div style="margin-top:15px; border-top:1px solid var(--border-color); padding-top:12px;">
                <div class="list-item" style="border-color:var(--brand-red);" onclick="openModal('services', null, '${dataParam}')">
                    <h4 style="color:#ff6b6b">Lihat Semua Layanan ${category.name}</h4>
                    <i class="fas fa-list" style="color:#ff6b6b"></i>
                </div>
            </div>
        `;
    } 
    else if (step === 'recommendations' || step === 'services') {
        const category = categories.find(c => c.id === catId);
        const services = servicesDB[catId] || [];
        const title = step === 'recommendations' ? `Solusi untuk: "${dataParam}"` : `Daftar Layanan: ${category.name}`;
        
        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="openModal('symptoms', '${catId}')">←</button>
                <div class="modal-title" style="font-size:13px;">${title}</div>
                <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
            <div class="list-group">
                <div class="list-item" style="border-color:var(--gold);" onclick="openModal('special', 'vg-check')">
                    <div>
                        <h4 style="color:var(--gold)">⭐ VG CHECK</h4>
                        <p>Inspeksi menyeluruh sebelum perbaikan.</p>
                    </div>
                </div>
                ${services.map((srv, idx) => `
                    <div class="list-item" onclick="openModal('service_detail', ${idx}, '${catId}')">
                        <div>
                            <h4>${srv.title}</h4>
                            <p>${srv.type} | ${srv.price}</p>
                        </div>
                        <i class="fas fa-chevron-right" style="color:#555; font-size:12px;"></i>
                    </div>
                `).join("")}
            </div>
        `;
    }
    else if (step === 'service_detail') {
        const srv = servicesDB[catId][dataParam];
        const category = categories.find(c => c.id === catId);
        const waText = `Halo VRRINS GARAGE, saya ingin booking layanan: *${srv.title}* (${category.name}). Mohon info jadwal.`;

        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="openModal('services', null, '${catId}')">←</button>
                <div class="modal-title">Detail Layanan</div>
                <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
            <div class="detail-hero">
                <i class="fas fa-wrench" style="font-size:32px; color:var(--brand-red);"></i>
            </div>
            <h3 style="margin-bottom:4px; font-size:16px;">${srv.title}</h3>
            <span class="label label-hl" style="display:inline-block; margin-bottom:12px;">${srv.type}</span>
            
            <div style="background:#111; padding:10px; border-radius:6px; margin-bottom:12px; border-left:3px solid var(--gold);">
                <p style="font-size:12px; color:#ddd;"><i class="fas fa-coins" style="color:var(--gold);"></i> <b>Biaya:</b> ${srv.price}</p>
                <p style="font-size:12px; color:#ddd; margin-top:4px;"><i class="fas fa-clock" style="color:var(--gold);"></i> <b>Durasi:</b> ${srv.time}</p>
            </div>

            <h4 style="font-size:13px; margin-bottom:6px; color:var(--brand-red);">Pengerjaan Meliputi:</h4>
            <ul style="padding-left:18px; font-size:12px; color:var(--text-sec); margin-bottom:15px;">
                ${srv.includes.map(inc => `<li style="margin-bottom:3px;">${inc}</li>`).join("")}
            </ul>

            <button class="btn btn-wa" onclick="directWA('${waText}')">
                <i class="fab fa-whatsapp" style="font-size:16px;"></i> Booking via WhatsApp
            </button>
        `;
    }
    else if (step === 'special') {
        const pkg = specialPackagesDB[dataParam];
        if (!pkg) return;
        const waText = `Halo VRRINS GARAGE, saya ingin memesan paket *${pkg.title}*. Mohon informasi jadwal terdekat.`;

        contentHTML = `
            <div class="modal-header">
                <button class="modal-back" onclick="closeModal()">✕</button>
                <div class="modal-title">Paket Layanan</div>
                <div style="width:20px"></div>
            </div>
            <div class="detail-hero">
                <i class="fas fa-shield-alt" style="font-size:32px; color:var(--gold);"></i>
            </div>
            <span class="label label-hl" style="margin-bottom:8px; display:inline-block;">${pkg.label1}</span>
            <h3 style="font-size:18px; margin-bottom:8px;">${pkg.title}</h3>
            <p style="font-size:12px; color:var(--text-sec); margin-bottom:12px;">${pkg.desc}</p>
            
            <div style="background:#111; padding:10px; border-radius:6px; margin-bottom:12px; border-left:3px solid var(--wa-green);">
                <p style="font-size:12px; color:#ddd;"><i class="fas fa-tag" style="color:var(--wa-green);"></i> <b>Biaya:</b> ${pkg.price}</p>
                <p style="font-size:12px; color:#ddd; margin-top:4px;"><i class="fas fa-clock" style="color:var(--wa-green);"></i> <b>Waktu:</b> ${pkg.time}</p>
            </div>

            <h4 style="font-size:13px; margin-bottom:6px; color:#fff;">Sudah Termasuk:</h4>
            <ul style="padding-left:18px; font-size:12px; color:var(--text-sec); margin-bottom:15px;">
                ${pkg.includes.map(inc => `<li style="margin-bottom:3px;">${inc}</li>`).join("")}
            </ul>

            <button class="btn btn-wa" onclick="directWA('${waText}')">
                <i class="fab fa-whatsapp" style="font-size:16px;"></i> Pesan ${pkg.title} via WhatsApp
            </button>
        `;
    }

    modalContent.innerHTML = contentHTML;
    modalOverlay.classList.add("active");
}
