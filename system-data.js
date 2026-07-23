const SYSTEM_DATA = {
    categories: {
        mesin: {
            title: "MESIN",
            name: "Mesin",
            icon: "fas fa-cog",
            image: "img-sys-mesin.jpg",
            services: [
                {
                    name: "Flushing Oli Mesin",
                    category_type: "Perawatan",
                    price: "Rp150K – Rp300K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Engine Flush", "Membersihkan Endapan Lumpur Oli", "Membersihkan Jalur Pelumasan Mesin", "Pembuangan Oli Lama", "Persiapan Pengisian Oli Baru"]
                },
                {
                    name: "Ganti Busi",
                    category_type: "Penggantian",
                    price: "Rp75K – Rp150K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Busi", "Pemeriksaan Kondisi Busi Lama", "Pemeriksaan Celah Busi", "Pemeriksaan Sistem Pengapian", "Uji Performa Mesin"]
                },
                {
                    name: "Ganti Ignition Coil",
                    category_type: "Penggantian",
                    price: "Rp110K – Rp380K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Ignition Coil", "Pemeriksaan Sistem Pengapian", "Pemeriksaan Konektor Ignition Coil", "Pemeriksaan Percikan Api", "Uji Performa Mesin"]
                },
                {
                    name: "Ganti Kabel Busi",
                    category_type: "Penggantian",
                    price: "Rp110K – Rp130K",
                    time: "30–45 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Kabel Busi", "Pemeriksaan Jalur Pengapian", "Pemeriksaan Konektor Kabel Busi", "Pemeriksaan Percikan Api", "Uji Performa Mesin"]
                },
                {
                    name: "Ganti Timing Belt",
                    category_type: "Penggantian",
                    price: "Rp275K – Rp460K",
                    time: "180–300 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Timing Belt", "Pemeriksaan Timing Pulley", "Pemeriksaan Timing Belt Tensioner", "Pemeriksaan Idler Pulley", "Penyetelan Timing Mesin", "Uji Performa Mesin"]
                },
                {
                    name: "Ganti Timing Chain",
                    category_type: "Penggantian",
                    price: "Rp385K – Rp775K",
                    time: "240–420 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Timing Chain", "Pemeriksaan Chain Guide", "Pemeriksaan Chain Tensioner", "Pemeriksaan Timing Sprocket", "Penyetelan Timing Mesin", "Uji Performa Mesin"]
                },
                {
                    name: "Ganti Engine Mounting",
                    category_type: "Penggantian",
                    price: "Rp110K – Rp145K (Per Sisi)",
                    time: "30–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Engine Mounting", "Pemeriksaan Engine Mounting Lainnya", "Pemeriksaan Baut Mounting", "Pemeriksaan Getaran Mesin", "Uji Kendaraan"]
                }
            ]
        },
        pelumasan: {
            title: "PELUMASAN",
            name: "Pelumasan",
            icon: "fas fa-oil-can",
            image: "img-sys-pelumasan.jpg",
            services: [
                {
                    name: "Ganti Oli Mesin",
                    category_type: "Penggantian",
                    price: "Rp75K – Rp125K",
                    time: "15–30 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Oli Mesin", "Pemeriksaan Kondisi Oli Lama", "Pemeriksaan Baut Drain Oli", "Penggantian Ring Baut Drain (bila diperlukan)", "Pemeriksaan Kebocoran Oli", "Reset Service Reminder (jika tersedia)"]
                },
                {
                    name: "Ganti Oli Transmisi Manual",
                    category_type: "Penggantian",
                    price: "Rp75K – Rp100K",
                    time: "30–45 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Oli Transmisi Manual", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli Lama", "Pemeriksaan Kebocoran Oli Transmisi"]
                },
                {
                    name: "Ganti Oli Transmisi Otomatis (AT)",
                    category_type: "Penggantian",
                    price: "Rp275K – Rp375K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Oli Transmisi Otomatis", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli AT", "Pemeriksaan Kebocoran Oli Transmisi"]
                },
                {
                    name: "Ganti Filter Oli Transmisi",
                    category_type: "Penggantian",
                    price: "Rp150K – Rp350K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Filter Oli Transmisi", "Pembersihan Bak Oli Transmisi", "Pembersihan Magnet Penampung Serbuk Logam", "Pemeriksaan Kebocoran Oli"]
                },
                {
                    name: "Flushing Oli Mesin",
                    category_type: "Perawatan",
                    price: "Rp50K – Rp150K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Engine Flush", "Membersihkan Endapan Lumpur Oli", "Membersihkan Jalur Pelumasan Mesin", "Pembuangan Oli Lama", "Persiapan Pengisian Oli Baru"]
                },
                {
                    name: "Ganti Oli Gardan",
                    category_type: "Penggantian",
                    price: "Rp100K – Rp175K",
                    time: "30–45 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Oli Gardan", "Pemeriksaan Baut Drain & Fill", "Pemeriksaan Kondisi Oli Gardan", "Pemeriksaan Kebocoran Oli"]
                },
                {
                    name: "Mengatasi Kebocoran Oli Mesin",
                    category_type: "Perbaikan",
                    price: "Rp150K – Rp500K",
                    time: "60–180 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pemeriksaan Titik Kebocoran Oli", "Pemeriksaan Seal & Gasket", "Penggantian Seal/Gasket (bila diperlukan)", "Pembersihan Area Kebocoran", "Pengujian Setelah Perbaikan"]
                }
            ]
        },
        bahan_bakar: {
            title: "BAHAN BAKAR",
            name: "Bahan Bakar",
            icon: "fas fa-gas-pump",
            image: "img-sys-bensin.jpg",
            services: [
                {
                    name: "Pemeriksaan Sistem Bahan Bakar",
                    category_type: "Pemeriksaan",
                    price: "Rp150K – Rp250K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pemeriksaan Fuel Pump", "Pemeriksaan Filter Bahan Bakar", "Pemeriksaan Injector", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Kebocoran Sistem Bahan Bakar", "Analisa Sistem Bahan Bakar"]
                },
                {
                    name: "Fuel System Cleaner",
                    category_type: "Perawatan",
                    price: "Rp250K – Rp500K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembersihan Jalur Bahan Bakar", "Pembersihan Injector", "Pembersihan Ruang Bakar", "Pembersihan Katup Intake", "Pemeriksaan Sistem Bahan Bakar"]
                },
                {
                    name: "Ganti Fuel Pump",
                    category_type: "Penggantian",
                    price: "Rp190K – Rp260K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Fuel Pump", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Soket Kelistrikan Fuel Pump", "Pemeriksaan Kebocoran", "Uji Sistem Bahan Bakar"]
                },
                {
                    name: "Ganti Filter Bahan Bakar",
                    category_type: "Penggantian",
                    price: "Rp190K – Rp260K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Filter Bahan Bakar", "Pemeriksaan Jalur Bahan Bakar", "Pemeriksaan Kebocoran", "Uji Aliran Bahan Bakar"]
                },
                {
                    name: "Kuras Tangki Bahan Bakar",
                    category_type: "Perawatan",
                    price: "Rp290K – Rp330K",
                    time: "90–180 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pengurasan Tangki Bahan Bakar", "Pembersihan Endapan Kotoran", "Pembersihan Tangki Bahan Bakar", "Pemeriksaan Fuel Pump", "Pemeriksaan Saringan Fuel Pump"]
                },
                {
                    name: "Ganti Injector",
                    category_type: "Penggantian",
                    price: "Rp275K – Rp400K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Injector", "Penggantian O-Ring Injector (bila diperlukan)", "Pemeriksaan Tekanan Bahan Bakar", "Pemeriksaan Kebocoran Injector", "Uji Performa Mesin"]
                },
                {
                    name: "Servis Injector",
                    category_type: "Servis",
                    price: "Rp300K – Rp600K",
                    time: "90–180 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Injector (bila diperlukan)", "Pembersihan Injector dengan Injector Cleaner", "Pengujian Pola Semprotan", "Pengujian Debit Injector", "Pemeriksaan Kebocoran Injector"]
                },
                {
                    name: "Servis Karburator",
                    category_type: "Servis",
                    price: "Rp220K – Rp350K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Karburator", "Pembersihan Seluruh Jalur Karburator", "Pemeriksaan Pelampung", "Setelan Idle", "Setelan Campuran Udara & Bahan Bakar", "Uji Performa Mesin"]
                },
                {
                    name: "Ganti Karburator",
                    category_type: "Penggantian",
                    price: "Rp120K – Rp200K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Karburator", "Setelan Idle", "Setelan Campuran Udara & Bahan Bakar", "Pemeriksaan Kebocoran", "Uji Performa Mesin"]
                }
            ]
        },
        suspensi: {
            title: "SUSPENSI",
            name: "Suspensi",
            icon: "fas fa-car-side",
            image: "img-sys-suspensi.jpg",
            services: [
                {
                    name: "Ganti Shock Absorber Depan",
                    category_type: "Penggantian",
                    price: "Rp220K – Rp390K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Shock Absorber Depan", "Pemeriksaan Dudukan Shock (Mounting)", "Pemeriksaan Per Shock", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Shock Absorber Belakang",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp400K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Shock Absorber Belakang", "Pemeriksaan Dudukan Shock", "Pemeriksaan Per Shock", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Ball Joint",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp175K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Ball Joint", "Pemeriksaan Steering Knuckle", "Pemeriksaan Lower Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Lower Arm",
                    category_type: "Penggantian",
                    price: "Rp220K – Rp290K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Lower Arm", "Pemeriksaan Ball Joint", "Pemeriksaan Bushing Lower Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Upper Arm",
                    category_type: "Penggantian",
                    price: "Rp190K – Rp210K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Upper Arm", "Pemeriksaan Ball Joint", "Pemeriksaan Bushing Upper Arm", "Pemeriksaan Baut Pengikat", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Link Stabilizer",
                    category_type: "Penggantian",
                    price: "Rp110K – Rp145K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Link Stabilizer", "Pemeriksaan Karet Stabilizer", "Pemeriksaan Stabilizer Bar", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Bushing Lower Arm",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp250K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Bushing Lower Arm", "Pemeriksaan Lower Arm", "Pemeriksaan Dudukan Bushing", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Bushing Upper Arm",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp250K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Bushing Upper Arm", "Pemeriksaan Upper Arm", "Pemeriksaan Dudukan Bushing", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Karet Stabilizer",
                    category_type: "Penggantian",
                    price: "Rp85K – Rp120K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Karet Stabilizer", "Pemeriksaan Stabilizer Bar", "Pemeriksaan Bracket Stabilizer", "Uji Kendaraan"]
                },
                {
                    name: "Ganti Bearing Roda",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp320K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Bearing Roda", "Pemeriksaan Hub Roda", "Pemeriksaan As Roda", "Pemeriksaan Baut Roda", "Uji Kendaraan"]
                }
            ]
        },
        kemudi: {
            title: "KEMUDI",
            name: "Kemudi",
            icon: "fas fa-crosshairs",
            image: "img-sys-kemudi.jpg",
            services: [
                {
                    name: "Ganti Steering Rack",
                    category_type: "Penggantian",
                    price: "Rp385K – Rp950K",
                    time: "180–360 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Steering Rack", "Pemeriksaan Tie Rod", "Pemeriksaan Rack End", "Pemeriksaan Bushing Steering", "Uji Fungsi Kemudi"]
                },
                {
                    name: "Servis Steering Rack",
                    category_type: "Servis",
                    price: "Rp825K – Rp1.450K",
                    time: "1–2 Hari",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Steering Rack", "Pembersihan Komponen", "Pemeriksaan Gear Rack", "Penggantian Seal Kit (bila diperlukan)", "Perakitan Kembali", "Uji Fungsi Kemudi"]
                },
                {
                    name: "Ganti Tie Rod",
                    category_type: "Penggantian",
                    price: "Rp140K – Rp145K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Tie Rod", "Pemeriksaan Rack End", "Pemeriksaan Boot Steering Rack", "Uji Fungsi Kemudi"]
                },
                {
                    name: "Ganti Rack End",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp230K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Rack End", "Pemeriksaan Tie Rod", "Pemeriksaan Steering Rack", "Uji Fungsi Kemudi"]
                },
                {
                    name: "Ganti Power Steering Pump",
                    category_type: "Penggantian",
                    price: "Rp220K – Rp450K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Power Steering Pump", "Pemeriksaan Belt Power Steering", "Pemeriksaan Selang Power Steering", "Pengisian Oli Power Steering (bila diperlukan)", "Uji Sistem Power Steering"]
                },
                {
                    name: "Servis Power Steering Pump",
                    category_type: "Servis",
                    price: "Rp450K – Rp900K",
                    time: "180–360 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Power Steering Pump", "Pembersihan Komponen", "Pemeriksaan Bearing", "Penggantian Seal (bila diperlukan)", "Perakitan & Uji Fungsi"]
                },
                {
                    name: "Ganti Selang Power Steering",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp250K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Selang Power Steering", "Pemeriksaan Clamp Selang", "Pengisian Oli Power Steering (bila diperlukan)", "Pemeriksaan Kebocoran", "Uji Sistem Power Steering"]
                },
                {
                    name: "Ganti Oli Power Steering",
                    category_type: "Penggantian",
                    price: "Rp100K – Rp175K",
                    time: "30–45 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pengurasan Oli Power Steering Lama", "Pengisian Oli Power Steering Baru", "Pemeriksaan Kebocoran Sistem", "Uji Fungsi Kemudi"]
                },
                {
                    name: "Steering System Flush",
                    category_type: "Perawatan",
                    price: "Rp250K – Rp450K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Flushing Sistem Power Steering", "Pembersihan Jalur Oli Power Steering", "Pengisian Oli Baru", "Pemeriksaan Kebocoran", "Uji Fungsi Kemudi"]
                }
            ]
        },
        rem: {
            title: "REM",
            name: "Rem",
            icon: "fas fa-stop-circle",
            image: "img-sys-rem.jpg",
            services: [
                {
                    name: "Servis Rem (Setel & Bersihkan 2 Roda)",
                    category_type: "Servis",
                    price: "Rp140K – Rp175K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Bongkar Rem", "Pembersihan Kampas Rem", "Pembersihan Kaliper/Tromol", "Pelumasan Komponen Rem", "Setel Rem", "Pemeriksaan Minyak Rem"]
                },
                {
                    name: "Ganti Kampas Rem Depan",
                    category_type: "Penggantian",
                    price: "Rp140K – Rp175K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Kampas Rem Depan", "Pembersihan Kaliper", "Pelumasan Pin Kaliper", "Pemeriksaan Cakram Rem", "Uji Fungsi Rem"]
                },
                {
                    name: "Ganti Kampas Rem Belakang",
                    category_type: "Penggantian",
                    price: "Rp140K – Rp175K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Kampas Rem Belakang", "Pembersihan Kaliper/Tromol", "Pelumasan Komponen Rem", "Pemeriksaan Cakram/Tromol", "Uji Fungsi Rem"]
                },
                {
                    name: "Ganti Kampas Rem Tromol (Brake Shoe)",
                    category_type: "Penggantian",
                    price: "Rp140K – Rp210K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Kampas Rem Tromol", "Pembersihan Tromol", "Pelumasan Titik Gesek", "Setel Rem Tromol", "Uji Fungsi Rem"]
                },
                {
                    name: "Ganti Cakram Rem",
                    category_type: "Penggantian",
                    price: "Rp140K – Rp175K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Cakram Rem", "Pembersihan Hub Roda", "Pemeriksaan Kaliper", "Uji Fungsi Rem"]
                },
                {
                    name: "Servis Kaliper Rem",
                    category_type: "Servis",
                    price: "Rp140K – Rp200K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Kaliper", "Pembersihan Piston Kaliper", "Pemeriksaan Seal Kaliper", "Pelumasan Pin Kaliper", "Perakitan Kembali", "Uji Fungsi Rem"]
                },
                {
                    name: "Servis Master Rem",
                    category_type: "Servis",
                    price: "Rp190K – Rp230K",
                    time: "90–180 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Master Rem", "Pembersihan Komponen", "Penggantian Seal Kit (bila diperlukan)", "Bleeding Sistem Rem", "Uji Fungsi Rem"]
                },
                {
                    name: "Ganti Master Rem",
                    category_type: "Penggantian",
                    price: "Rp140K – Rp200K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Master Rem", "Bleeding Sistem Rem", "Pemeriksaan Kebocoran", "Uji Fungsi Rem"]
                },
                {
                    name: "Ganti Booster Rem",
                    category_type: "Penggantian",
                    price: "Rp250K – Rp320K",
                    time: "90–180 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Booster Rem", "Pemeriksaan Selang Vakum", "Pemeriksaan Master Rem", "Bleeding Sistem Rem", "Uji Fungsi Rem"]
                },
                {
                    name: "Ganti Selang Minyak Rem",
                    category_type: "Penggantian",
                    price: "Rp110K – Rp120K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Selang Minyak Rem", "Bleeding Sistem Rem", "Pemeriksaan Kebocoran", "Uji Fungsi Rem"]
                },
                {
                    name: "Ganti Sensor ABS",
                    category_type: "Penggantian",
                    price: "Rp110K – Rp120K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Sensor ABS", "Scan Sistem ABS", "Hapus Kode Error (jika memungkinkan)", "Uji Fungsi Sistem ABS"]
                }
            ]
        },
        pendingin: {
            title: "PENDINGIN",
            name: "Pendingin",
            icon: "fas fa-thermometer-half",
            image: "img-sys-pendingin.jpg",
            services: [
                {
                    name: "Kuras Radiator",
                    category_type: "Perawatan",
                    price: "Rp80K – Rp120K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pengurasan Coolant Lama", "Flushing Sistem Pendingin", "Pengisian Coolant Baru", "Pemeriksaan Kebocoran Sistem Pendingin", "Pemeriksaan Tutup Radiator"]
                },
                {
                    name: "Ganti Radiator",
                    category_type: "Penggantian",
                    price: "Rp140K – Rp200K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Radiator", "Penggantian Coolant (bila diperlukan)", "Pemeriksaan Selang Radiator", "Pemeriksaan Tutup Radiator", "Uji Kebocoran Sistem Pendingin"]
                },
                {
                    name: "Ganti Water Pump",
                    category_type: "Penggantian",
                    price: "Rp220K – Rp460K",
                    time: "90–180 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Water Pump", "Pemeriksaan Gasket Water Pump", "Pemeriksaan Drive Belt/Timing Belt (sesuai tipe kendaraan)", "Pengisian Coolant Baru (bila diperlukan)", "Uji Sistem Pendingin"]
                },
                {
                    name: "Ganti Thermostat",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp230K",
                    time: "45–90 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Thermostat", "Pemeriksaan Housing Thermostat", "Penggantian Coolant (bila diperlukan)", "Uji Suhu Kerja Mesin", "Pemeriksaan Kebocoran"]
                },
                {
                    name: "Ganti Selang Radiator",
                    category_type: "Penggantian",
                    price: "Rp85K – Rp145K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Selang Radiator", "Pemeriksaan Klem Selang", "Pengisian Coolant (bila diperlukan)", "Pemeriksaan Kebocoran", "Uji Sistem Pendingin"]
                },
                {
                    name: "Ganti Tutup Radiator",
                    category_type: "Penggantian",
                    price: "Rp50K – Rp100K",
                    time: "15–30 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Tutup Radiator", "Pemeriksaan Tekanan Sistem Pendingin", "Pemeriksaan Kebocoran"]
                },
                {
                    name: "Ganti Motor Fan Radiator",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp230K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Motor Fan Radiator", "Pemeriksaan Fan Blade", "Pemeriksaan Relay Fan", "Pemeriksaan Sekring Fan", "Uji Kinerja Kipas Radiator"]
                },
                {
                    name: "Ganti Motor Fan Kondensor AC",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp230K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Motor Fan Kondensor AC", "Pemeriksaan Relay Fan", "Pemeriksaan Sekring Fan", "Uji Kinerja Kipas Kondensor"]
                },
                {
                    name: "Ganti Water Outlet/Inlet",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp230K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Water Outlet/Inlet", "Pemeriksaan Gasket", "Pemeriksaan Selang Radiator", "Pemeriksaan Kebocoran", "Uji Sistem Pendingin"]
                }
            ]
        },
        transmisi: {
            title: "TRANSMISI",
            name: "Transmisi",
            icon: "fas fa-cogs",
            image: "img-sys-transmisi.jpg",
            services: [
                {
                    name: "Ganti Kopling",
                    category_type: "Penggantian",
                    price: "Rp300K – Rp900K",
                    time: "240–480 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Kampas Kopling", "Pemeriksaan Pressure Plate", "Pemeriksaan Release Bearing", "Pemeriksaan Flywheel", "Penyetelan Sistem Kopling", "Uji Jalan Kendaraan"]
                },
                {
                    name: "Ganti Master Kopling Atas",
                    category_type: "Penggantian",
                    price: "Rp175K – Rp250K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Master Kopling Atas", "Pemeriksaan Selang Kopling", "Bleeding Sistem Kopling", "Uji Fungsi Kopling"]
                },
                {
                    name: "Ganti Master Kopling Bawah",
                    category_type: "Penggantian",
                    price: "Rp175K – Rp250K",
                    time: "30–60 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Master Kopling Bawah", "Pemeriksaan Selang Kopling", "Bleeding Sistem Kopling", "Uji Fungsi Kopling"]
                },
                {
                    name: "Ganti Release Bearing",
                    category_type: "Penggantian",
                    price: "Rp450K – Rp700K",
                    time: "240–480 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Release Bearing", "Pemeriksaan Kampas Kopling", "Pemeriksaan Pressure Plate", "Pemeriksaan Flywheel", "Uji Fungsi Kopling"]
                },
                {
                    name: "Ganti Pilot Bearing",
                    category_type: "Penggantian",
                    price: "Rp450K – Rp700K",
                    time: "240–480 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Pilot Bearing", "Pemeriksaan Flywheel", "Pemeriksaan Poros Input Transmisi", "Uji Fungsi Kopling"]
                },
                {
                    name: "Ganti Drive Shaft",
                    category_type: "Penggantian",
                    price: "Rp220K – Rp385K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Drive Shaft", "Pemeriksaan CV Joint", "Pemeriksaan Boot Drive Shaft", "Pemeriksaan Oli Transmisi (jika diperlukan)", "Uji Jalan Kendaraan"]
                },
                {
                    name: "Ganti Boot Drive Shaft",
                    category_type: "Penggantian",
                    price: "Rp165K – Rp250K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Boot Drive Shaft", "Penggantian Grease CV Joint", "Pemeriksaan CV Joint", "Pemeriksaan Klem Boot", "Uji Jalan Kendaraan"]
                }
            ]
        },
        kelistrikan: {
            title: "KELISTRIKAN MESIN",
            name: "Kelistrikan Mesin",
            icon: "fas fa-battery-full",
            image: "img-sys-kelistrikan.jpg",
            services: [
                {
                    name: "Ganti Aki",
                    category_type: "Penggantian",
                    price: "Rp100K – Rp200K",
                    time: "15–30 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Aki", "Pemeriksaan Tegangan Aki Baru", "Pemeriksaan Terminal Aki", "Pemeriksaan Sistem Pengisian (Alternator)"]
                },
                {
                    name: "Ganti Alternator (Dinamo Ampere)",
                    category_type: "Penggantian",
                    price: "Rp220K – Rp450K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Alternator", "Pemeriksaan Belt Alternator", "Pemeriksaan Kabel & Soket", "Uji Sistem Pengisian"]
                },
                {
                    name: "Servis Alternator",
                    category_type: "Servis",
                    price: "Rp350K – Rp650K",
                    time: "120–240 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Alternator", "Penggantian Carbon Brush/IC Regulator", "Pemeriksaan Bearing", "Perakitan & Uji Pengisian"]
                },
                {
                    name: "Ganti Dinamo Starter",
                    category_type: "Penggantian",
                    price: "Rp220K – Rp450K",
                    time: "60–120 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Penggantian Dinamo Starter", "Pemeriksaan Kabel & Relay Starter", "Uji Fungsi Starter"]
                },
                {
                    name: "Servis Dinamo Starter",
                    category_type: "Servis",
                    price: "Rp300K – Rp600K",
                    time: "120–240 Menit",
                    note: "Tergantung jenis kendaraan",
                    includes: ["Pembongkaran Dinamo Starter", "Penggantian Carbon Brush/Solenoid", "Pembersihan & Pelumasan", "Perakitan & Uji Starter"]
                }
            ]
        }
    }
};
