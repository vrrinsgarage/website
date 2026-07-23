/**
 * VRRINS GARAGE - Core JavaScript
 * Bengkel Mobil Panggilan Palembang
 */

// Global Constants
const WA_NUMBER = "62895622499262";

// Database Layanan Terstruktur
const servicesDatabase = {
    mesin: {
        title: "Sistem Mesin",
        categories: {
            "Perawatan & Tune Up": [
                {
                    name: "Tune Up Bensin Standard",
                    price: "Rp 350.000",
                    duration: "1.5 - 2 Jam",
                    description: "Pembersihan sistem pembakaran bensin untuk mengembalikan efisiensi BBM.",
                    items: ["Clean Throttle Body", "Carbon Clean Ruang Bakar", "Cek Busi & Filter Udara", "OBD-II Scan"]
                },
                {
                    name: "VG Tune Up Diesel Commonrail",
                    price: "Rp 500.000",
                    duration: "2 - 3 Jam",
                    description: "Perawatan intensif mesin diesel modern agar responsif dan minim asap.",
                    items: ["Clean EGR Valve", "Clean Intake Manifold", "Purging Injeksi", "Diagnostic Scan ECU"]
                }
            ],
            "Perbaikan & Overhaul": [
                {
                    name: "Ganti Packing Cover Valve / Cylinder Head",
                    price: "Rp 250.000 - Rp 600.000",
                    duration: "2 - 4 Jam",
                    description: "Mengatasi kebocoran oli mesin bagian atas atau tengah.",
                    items: ["Pelepasan Cover Valve", "Pembersihan Permukaan", "Penggantian Gasket/Seal Baru"]
                },
                {
                    name: "Diagnosa Mesin Bunyi / Overheat",
                    price: "Rp 150.000",
                    duration: "1 Jam",
                    description: "Pemeriksaan menyeluruh sumber masalah mesin berisik atau panas berlebih.",
                    items: ["Pengecekan Kompresi", "Cek Sistem Cooling", "Scanner Error Code"]
                }
            ]
        }
    },
    transmisi: {
        title: "Transmisi & Kopling",
        categories: {
            "Transmisi Manual": [
                {
                    name: "Ganti Kampas Kopling Set",
                    price: "Rp 600.000 - Rp 1.200.000 (Jasa)",
                    duration: "4 - 6 Jam",
                    description: "Penggantian dekrup, kampas kopling, dan deklaher.",
                    items: ["Bongkar Pasang Transmisi", "Ganti Kit Kopling", "Setel Stelan Kopling"]
                }
            ],
            "Transmisi Otomatis (AT/CVT)": [
                {
                    name: "Kuras Oli Matic (Flushing AT/CVT)",
                    price: "Rp 250.000 (Jasa)",
                    duration: "1 - 1.5 Jam",
                    description: "Penggantian total oli transmisi otomatis menggunakan mesin kuras.",
                    items: ["Flushing Oli Transmisi", "Pengecekan Perpindahan Gigi", "Reset Adaptasi Matic"]
                }
            ]
        }
    },
    pengereman: {
        title: "Sistem Pengereman",
        categories: {
            "Perawatan Rem": [
                {
                    name: "Ganti Kampas Rem Depan / Belakang",
                    price: "Rp 100.000 - Rp 150.000 / roda",
                    duration: "45 Menit",
                    description: "Penggantian brake pad/shoe baru serta pembersihan caliper.",
                    items: ["Pembersihan Debu Rem", "Pemberian Grease Caliper", "Bleeding Minyak Rem"]
                },
                {
                    name: "Flushing Minyak Rem",
                    price: "Rp 150.000",
                    duration: "1 Jam",
                    description: "Mengganti seluruh cairan rem tua dengan cairan rem segar.",
                    items: ["Kuras Minyak Rem Old", "Bleeding 4 Roda", "Cek Kebocoran Master"]
                }
            ]
        }
    },
    kakiKaki: {
        title: "Kaki-Kaki & Kemudi",
        categories: {
            "Suspensi & Kemudi": [
                {
                    name: "Ganti Shockbreaker (Depan/Belakang)",
                    price: "Rp 200.000 - Rp 350.000 / sepasang",
                    duration: "1.5 - 2 Jam",
                    description: "Penggantian peredam kejut untuk kenyamanan berkendara.",
                    items: ["Pelepasan Leg Shock", "Pemasangan Support & Shock Baru"]
                },
                {
                    name: "Ganti Tie Rod / Rack End / Ball Joint",
                    price: "Rp 150.000 - Rp 300.000",
                    duration: "2 Jam",
                    description: "Perbaikan komponen kemudi yang aus atau berbunyi.",
                    items: ["Bongkar Komponen Lama", "Pemasangan Komponen Baru", "Setel Kelurusan Roda Awal"]
                }
            ]
        }
    },
    kelistrikan: {
        title: "Kelistrikan & ECU",
        categories: {
            "Sistem Kelistrikan": [
                {
                    name: "Jumper / Ganti Aki Mobil",
                    price: "Rp 50.000 - Rp 100.000",
                    duration: "30 Menit",
                    description: "Layanan darurat aki mogok di jalan atau lokasi Anda.",
                    items: ["Tes Tegangan Aki", "Jumper Starter / Ganti Aki Baru", "Cek Pengisian Alternator"]
                },
                {
                    name: "Perbaikan Dinamo Starter / Alternator",
                    price: "Rp 250.000 - Rp 450.000",
                    duration: "2 - 3 Jam",
                    description: "Perbaikan mobil tidak bisa di-start atau aki tidak mengisi.",
                    items: ["Bongkar Dinamo", "Penggantian Carbon Brush / Rectifier", "Testing Pengisian"]
                }
            ]
        }
    },
    ac: {
        title: "Sistem AC Mobil",
        categories: {
            "Perawatan AC": [
                {
                    name: "Service AC Routine + Freon",
                    price: "Rp 250.000 - Rp 400.000",
                    duration: "1.5 Jam",
                    description: "Pengisian ulang freon R134a/R1234yf dan pembersihan filter cabin.",
                    items: ["Vakum Sistem AC", "Isi Freon & Oli Kompresor", "Bersihkan Cabin Air Filter"]
                }
            ]
        }
    },
    pelumasan: {
        title: "Pelumasan & Filter",
        categories: {
            "Perawatan Berkala": [
                {
                    name: "Ganti Oli Mesin + Filter Oli",
                    price: "Rp 75.000 (Jasa)",
                    duration: "30 Menit",
                    description: "Penggantian oli mesin rutin dan filter oli di tempat Anda.",
                    items: ["Drain Oli Lama", "Ganti Filter Oli Baru", "Isi Oli Baru & Cek Level"]
                },
                {
                    name: "Flushing Oli Mesin",
                    price: "Rp 150.000 (Jasa)",
                    duration: "45 Menit",
                    description: "Pembersihan endapan lumpur (sludge) di dalam ruang oli mesin.",
                    items: ["Aplikasi Engine Flush", "Running Mesin 15 Menit", "Drain & Pengisian Oli"]
                }
            ]
        }
    },
    bahanBakar: {
        title: "Sistem Bahan Bakar",
        categories: {
            "Perbaikan Sistem BBM": [
                {
                    name: "Kuras Tangki Bahan Bakar",
                    price: "Rp 300.000 - Rp 500.000",
                    duration: "2.5 Jam",
                    description: "Membersihkan tangki dari endapan air atau kotoran penyebab mogok.",
                    items: ["Pelepasan Tangki BBM", "Pembersihan Endapan Air/Kotoran", "Ganti Filter Rotak"]
                }
            ]
        }
    },
    pendingin: {
        title: "Sistem Pendingin",
        categories: {
            "Cooling System": [
                {
                    name: "Kuras Radiator & Ganti Coolant",
                    price: "Rp 150.000 (Jasa)",
                    duration: "1 Jam",
                    description: "Mencegah karat dan menjaga suhu mesin tetap ideal.",
                    items: ["Flushing Radiator", "Pengisian Radiator Coolant Baru", "Bleeding Udara Trapped"]
                }
            ]
        }
    }
};

// Helper: Build WhatsApp Link
function generateWALink(message) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Modal Handlers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Open Dynamic System Modal
function openSystemModal(systemKey) {
    const system = servicesDatabase[systemKey];
    if (!system) return;

    const modalBody = document.getElementById("dynamicModalBody");
    let contentHtml = `
        <h2>${system.title}</h2>
        <p class="subtitle">Daftar pilihan pengerjaan spesifik untuk ${system.title}:</p>
        <hr class="modal-divider">
    `;

    for (const [categoryName, items] of Object.entries(system.categories)) {
        contentHtml += `<h3 class="category-title">${categoryName}</h3>`;
        items.forEach(item => {
            const waMsg = `Halo VRRINS GARAGE, saya ingin memesan layanan:\n*${item.name}*\nEstimasi: ${item.price}`;
            contentHtml += `
                <div class="modal-item-card">
                    <div class="item-header">
                        <h4>${item.name}</h4>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <p class="item-desc">${item.description}</p>
                    <div class="item-meta">
                        <span><i class="fas fa-clock"></i> ${item.duration}</span>
                    </div>
                    <ul class="item-checklist">
                        ${item.items.map(i => `<li><i class="fas fa-check-circle"></i> ${i}</li>`).join("")}
                    </ul>
                    <a href="${generateWALink(waMsg)}" class="btn btn-whatsapp btn-sm" target="_blank">
                        <i class="fab fa-whatsapp"></i> Pesan Layanan Ini
                    </a>
                </div>
            `;
        });
    }

    modalBody.innerHTML = contentHtml;
    openModal("dynamicModal");
}

// Filter / Search Services Dynamic
function filterServices() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsContainer = document.getElementById("searchResults");
    const systemGrid = document.getElementById("systemGrid");

    if (query.length < 2) {
        resultsContainer.classList.add("hidden");
        resultsContainer.innerHTML = "";
        systemGrid.style.display = "grid";
        return;
    }

    let matches = [];

    // Search inside database
    for (const [sysKey, sysData] of Object.entries(servicesDatabase)) {
        for (const [catName, items] of Object.entries(sysData.categories)) {
            items.forEach(item => {
                if (
                    item.name.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query) ||
                    sysData.title.toLowerCase().includes(query)
                ) {
                    matches.push({ ...item, systemName: sysData.title });
                }
            });
        }
    }

    systemGrid.style.display = "none";
    resultsContainer.classList.remove("hidden");

    if (matches.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-result">
                <i class="fas fa-search-minus fa-2x"></i>
                <p>Layanan "${query}" tidak ditemukan. Kontak kami langsung untuk konsultasi kebutuhan Anda.</p>
                <a href="${generateWALink(`Halo VRRINS GARAGE, saya mau tanya pengerjaan untuk: ${query}`)}" class="btn btn-whatsapp btn-sm" target="_blank">
                    <i class="fab fa-whatsapp"></i> Tanyakan via WhatsApp
                </a>
            </div>
        `;
    } else {
        let resultsHtml = `<div class="grid grid-2">`;
        matches.forEach(item => {
            const waMsg = `Halo VRRINS GARAGE, saya tertarik dengan layanan *${item.name}* (${item.price}).`;
            resultsHtml += `
                <div class="service-card">
                    <span class="system-badge">${item.systemName}</span>
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <p>${item.description}</p>
                    <a href="${generateWALink(waMsg)}" class="btn btn-whatsapp btn-sm" target="_blank">
                        <i class="fab fa-whatsapp"></i> Hubungi Mekanik
                    </a>
                </div>
            `;
        });
        resultsHtml += `</div>`;
        resultsContainer.innerHTML = resultsHtml;
    }
}

// FAQ Accordion Toggle
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle("active");
        });
    });

    // Close Modals when clicking outside content
    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Close Modals on Escape Key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
            document.body.style.overflow = "auto";
        }
    });

    // Back to Top Button Visibility
    window.addEventListener("scroll", () => {
        const btn = document.getElementById("backToTop");
        if (window.scrollY > 300) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
