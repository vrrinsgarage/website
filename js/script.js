/* ==========================================
   DATA SERVICES FOR 9 SYSTEMS (VRRINS GARAGE)
   ========================================== */
const systemServicesData = {
  'bahan-bakar': {
    title: 'Sistem Bahan Bakar',
    subtitle: 'Fuel System',
    services: [
      {
        id: 'bb-1',
        category: 'Pemeriksaan',
        name: 'Pemeriksaan Sistem Bahan Bakar',
        price: 'Rp150.000 - Rp250.000',
        time: '30 - 60 Menit',
        includes: [
          'Pemeriksaan Fuel Pump',
          'Pemeriksaan Filter Bahan Bakar',
          'Pemeriksaan Injector',
          'Pemeriksaan Tekanan Bahan Bakar',
          'Pemeriksaan Kebocoran Sistem Bahan Bakar',
          'Analisa Sistem Bahan Bakar'
        ],
        waText: 'Halo Admin. Saya nak booking Pemeriksaan Sistem Bahan Bakar.'
      },
      {
        id: 'bb-2',
        category: 'Perawatan',
        name: 'Fuel System Cleaner',
        price: 'Rp250.000 - Rp500.000',
        time: '60 - 120 Menit',
        includes: [
          'Pembongkaran Jalur Bahan Bakar',
          'Pembersihan Injector',
          'Pembersihan Ruang Bakar',
          'Pembersihan Katup Intake',
          'Pemeriksaan Sistem Bahan Bakar'
        ],
        waText: 'Halo Admin. Saya nak booking Fuel System Cleaner.'
      },
      {
        id: 'bb-3',
        category: 'Penggantian',
        name: 'Ganti Fuel Pump',
        price: 'Rp190.000 - Rp260.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Fuel Pump',
          'Pemeriksaan Tekanan Bahan Bakar',
          'Pemeriksaan Soket Kelistrikan Fuel Pump',
          'Pemeriksaan Kebocoran',
          'Uji Sistem Bahan Bakar'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Fuel Pump.'
      },
      {
        id: 'bb-4',
        category: 'Penggantian',
        name: 'Ganti Filter Bahan Bakar',
        price: 'Rp190.000 - Rp260.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Filter Bahan Bakar',
          'Pemeriksaan Jalur Bahan Bakar',
          'Pemeriksaan Kebocoran',
          'Uji Aliran Bahan Bakar'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Filter Bahan Bakar.'
      },
      {
        id: 'bb-5',
        category: 'Perawatan',
        name: 'Kuras Tangki Bahan Bakar',
        price: 'Rp290.000 - Rp330.000',
        time: '90 - 180 Menit',
        includes: [
          'Pengurasan Tangki Bahan Bakar',
          'Pembersihan Endapan Kotoran',
          'Pembersihan Tangki Bahan Bakar',
          'Pemeriksaan Fuel Pump',
          'Pemeriksaan Saringan Fuel Pump'
        ],
        waText: 'Halo Admin. Saya nak booking Kuras Tangki Bahan Bakar.'
      },
      {
        id: 'bb-6',
        category: 'Penggantian',
        name: 'Ganti Injector',
        price: 'Rp275.000 - Rp400.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Injector',
          'Penggantian O-Ring Injector (bila diperlukan)',
          'Pemeriksaan Tekanan Bahan Bakar',
          'Pemeriksaan Kebocoran Injector',
          'Uji Performa Mesin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Injector.'
      },
      {
        id: 'bb-7',
        category: 'Servis',
        name: 'Servis Injector',
        price: 'Rp300.000 - Rp600.000',
        time: '90 - 180 Menit',
        includes: [
          'Pembongkaran Injector (bila diperlukan)',
          'Pembersihan Injector dengan Injector Cleaner',
          'Pengujian Pola Semprotan',
          'Pengujian Debit Injector',
          'Pemeriksaan Kebocoran Injector'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Injector.'
      },
      {
        id: 'bb-8',
        category: 'Servis',
        name: 'Servis Karburator',
        price: 'Rp220.000 - Rp350.000',
        time: '60 - 120 Menit',
        includes: [
          'Pembongkaran Karburator',
          'Pembersihan Seluruh Jalur Karburator',
          'Pemeriksaan Pelampung',
          'Setelan Idle',
          'Setelan Campuran Udara & Bahan Bakar',
          'Uji Performa Mesin'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Karburator.'
      },
      {
        id: 'bb-9',
        category: 'Penggantian',
        name: 'Ganti Karburator',
        price: 'Rp120.000 - Rp200.000',
        time: '45 - 90 Menit',
        includes: [
          'Penggantian Karburator',
          'Setelan Idle',
          'Setelan Campuran Udara & Bahan Bakar',
          'Pemeriksaan Kebocoran',
          'Uji Performa Mesin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Karburator.'
      }
    ]
  },
  'suspensi': {
    title: 'Sistem Suspensi',
    subtitle: 'Suspension System',
    services: [
      {
        id: 'sp-1',
        category: 'Penggantian',
        name: 'Ganti Shock Absorber Depan',
        price: 'Rp220.000 - Rp390.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Shock Absorber Depan',
          'Pemeriksaan Dudukan Shock (Mounting)',
          'Pemeriksaan Per Shock',
          'Pemeriksaan Baut Pengikat',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Shock Absorber Depan.'
      },
      {
        id: 'sp-2',
        category: 'Penggantian',
        name: 'Ganti Shock Absorber Belakang',
        price: 'Rp165.000 - Rp400.000',
        time: '45 - 90 Menit',
        includes: [
          'Penggantian Shock Absorber Belakang',
          'Pemeriksaan Dudukan Shock',
          'Pemeriksaan Per Shock',
          'Pemeriksaan Baut Pengikat',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Shock Absorber Belakang.'
      },
      {
        id: 'sp-3',
        category: 'Penggantian',
        name: 'Ganti Ball Joint',
        price: 'Rp165.000 - Rp175.000',
        time: '45 - 90 Menit',
        includes: [
          'Penggantian Ball Joint',
          'Pemeriksaan Steering Knuckle',
          'Pemeriksaan Lower Arm',
          'Pemeriksaan Baut Pengikat',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Ball Joint.'
      },
      {
        id: 'sp-4',
        category: 'Penggantian',
        name: 'Ganti Lower Arm',
        price: 'Rp220.000 - Rp290.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Lower Arm',
          'Pemeriksaan Ball Joint',
          'Pemeriksaan Bushing Lower Arm',
          'Pemeriksaan Baut Pengikat',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Lower Arm.'
      },
      {
        id: 'sp-5',
        category: 'Penggantian',
        name: 'Ganti Upper Arm',
        price: 'Rp190.000 - Rp210.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Upper Arm',
          'Pemeriksaan Ball Joint',
          'Pemeriksaan Bushing Upper Arm',
          'Pemeriksaan Baut Pengikat',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Upper Arm.'
      },
      {
        id: 'sp-6',
        category: 'Penggantian',
        name: 'Ganti Link Stabilizer',
        price: 'Rp110.000 - Rp145.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Link Stabilizer',
          'Pemeriksaan Karet Stabilizer',
          'Pemeriksaan Stabilizer Bar',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Link Stabilizer.'
      },
      {
        id: 'sp-7',
        category: 'Penggantian',
        name: 'Ganti Bushing Lower Arm',
        price: 'Rp165.000 - Rp250.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Bushing Lower Arm',
          'Pemeriksaan Lower Arm',
          'Pemeriksaan Dudukan Bushing',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Bushing Lower Arm.'
      },
      {
        id: 'sp-8',
        category: 'Penggantian',
        name: 'Ganti Bushing Upper Arm',
        price: 'Rp165.000 - Rp250.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Bushing Upper Arm',
          'Pemeriksaan Upper Arm',
          'Pemeriksaan Dudukan Bushing',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Bushing Upper Arm.'
      },
      {
        id: 'sp-9',
        category: 'Penggantian',
        name: 'Ganti Karet Stabilizer',
        price: 'Rp85.000 - Rp120.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Karet Stabilizer',
          'Pemeriksaan Stabilizer Bar',
          'Pemeriksaan Bracket Stabilizer',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Karet Stabilizer.'
      },
      {
        id: 'sp-10',
        category: 'Penggantian',
        name: 'Ganti Bearing Roda',
        price: 'Rp165.000 - Rp320.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Bearing Roda',
          'Pemeriksaan Hub Roda',
          'Pemeriksaan As Roda',
          'Pemeriksaan Baut Roda',
          'Uji Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Bearing Roda.'
      }
    ]
  },
  'kemudi': {
    title: 'Sistem Kemudi',
    subtitle: 'Steering System',
    services: [
      {
        id: 'st-1',
        category: 'Penggantian',
        name: 'Ganti Steering Rack',
        price: 'Rp385.000 - Rp950.000',
        time: '180 - 360 Menit',
        includes: [
          'Penggantian Steering Rack',
          'Pemeriksaan Tie Rod',
          'Pemeriksaan Rack End',
          'Pemeriksaan Bushing Steering',
          'Uji Fungsi Kemudi'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Steering Rack.'
      },
      {
        id: 'st-2',
        category: 'Servis',
        name: 'Servis Steering Rack',
        price: 'Rp825.000 - Rp1.450.000',
        time: '1 - 2 Hari',
        includes: [
          'Pembongkaran Steering Rack',
          'Pembersihan Komponen',
          'Pemeriksaan Gear Rack',
          'Penggantian Seal Kit (bila diperlukan)',
          'Perakitan Kembali',
          'Uji Fungsi Kemudi'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Steering Rack.'
      },
      {
        id: 'st-3',
        category: 'Penggantian',
        name: 'Ganti Tie Rod',
        price: 'Rp140.000 - Rp145.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Tie Rod',
          'Pemeriksaan Rack End',
          'Pemeriksaan Boot Steering Rack',
          'Uji Fungsi Kemudi'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Tie Rod.'
      },
      {
        id: 'st-4',
        category: 'Penggantian',
        name: 'Ganti Rack End',
        price: 'Rp165.000 - Rp230.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Rack End',
          'Pemeriksaan Tie Rod',
          'Pemeriksaan Steering Rack',
          'Uji Fungsi Kemudi'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Rack End.'
      },
      {
        id: 'st-5',
        category: 'Penggantian',
        name: 'Ganti Power Steering Pump',
        price: 'Rp220.000 - Rp450.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Power Steering Pump',
          'Pemeriksaan Belt Power Steering',
          'Pemeriksaan Selang Power Steering',
          'Pengisian Oli Power Steering (bila diperlukan)',
          'Uji Sistem Power Steering'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Power Steering Pump.'
      },
      {
        id: 'st-6',
        category: 'Servis',
        name: 'Servis Power Steering Pump',
        price: 'Rp450.000 - Rp900.000',
        time: '180 - 360 Menit',
        includes: [
          'Pembongkaran Power Steering Pump',
          'Pembersihan Komponen',
          'Pemeriksaan Bearing',
          'Penggantian Seal (bila diperlukan)',
          'Perakitan & Uji Fungsi'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Power Steering Pump.'
      },
      {
        id: 'st-7',
        category: 'Penggantian',
        name: 'Ganti Selang Power Steering',
        price: 'Rp165.000 - Rp250.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Selang Power Steering',
          'Pemeriksaan Clamp Selang',
          'Pengisian Oli Power Steering (bila diperlukan)',
          'Pemeriksaan Kebocoran',
          'Uji Sistem Power Steering'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Selang Power Steering.'
      },
      {
        id: 'st-8',
        category: 'Penggantian',
        name: 'Ganti Oli Power Steering',
        price: 'Rp100.000 - Rp175.000',
        time: '30 - 45 Menit',
        includes: [
          'Pengurasan Oli Power Steering Lama',
          'Pengisian Oli Power Steering Baru',
          'Pemeriksaan Kebocoran Sistem',
          'Uji Fungsi Kemudi'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Oli Power Steering.'
      },
      {
        id: 'st-9',
        category: 'Perawatan',
        name: 'Steering System Flush',
        price: 'Rp250.000 - Rp450.000',
        time: '60 - 120 Menit',
        includes: [
          'Flushing Sistem Power Steering',
          'Pembersihan Jalur Oli Power Steering',
          'Pengisian Oli Baru',
          'Pemeriksaan Kebocoran',
          'Uji Fungsi Kemudi'
        ],
        waText: 'Halo Admin. Saya nak booking Steering System Flush.'
      }
    ]
  },
  'rem': {
    title: 'Sistem Rem',
    subtitle: 'Brake System',
    services: [
      {
        id: 'br-1',
        category: 'Servis',
        name: 'Servis Rem (Setel & Bersihkan 2 Roda)',
        price: 'Rp140.000 - Rp175.000',
        time: '45 - 90 Menit',
        includes: [
          'Bongkar Rem',
          'Pembersihan Kampas Rem',
          'Pembersihan Kaliper/Tromol',
          'Pelumasan Komponen Rem',
          'Setel Rem',
          'Pemeriksaan Minyak Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Rem.'
      },
      {
        id: 'br-2',
        category: 'Penggantian',
        name: 'Ganti Kampas Rem Depan',
        price: 'Rp140.000 - Rp175.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Kampas Rem Depan',
          'Pembersihan Kaliper',
          'Pelumasan Pin Kaliper',
          'Pemeriksaan Cakram Rem',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Kampas Rem Depan.'
      },
      {
        id: 'br-3',
        category: 'Penggantian',
        name: 'Ganti Kampas Rem Belakang',
        price: 'Rp140.000 - Rp175.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Kampas Rem Belakang',
          'Pembersihan Kaliper/Tromol',
          'Pelumasan Komponen Rem',
          'Pemeriksaan Cakram/Tromol',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Kampas Rem Belakang.'
      },
      {
        id: 'br-4',
        category: 'Penggantian',
        name: 'Ganti Kampas Rem Tromol (Brake Shoe)',
        price: 'Rp140.000 - Rp210.000',
        time: '45 - 90 Menit',
        includes: [
          'Penggantian Kampas Rem Tromol',
          'Pembersihan Tromol',
          'Pelumasan Titik Gesek',
          'Setel Rem Tromol',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Kampas Rem Tromol.'
      },
      {
        id: 'br-5',
        category: 'Penggantian',
        name: 'Ganti Cakram Rem',
        price: 'Rp140.000 - Rp175.000',
        time: '45 - 90 Menit',
        includes: [
          'Penggantian Cakram Rem',
          'Pembersihan Hub Roda',
          'Pemeriksaan Kaliper',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Cakram Rem.'
      },
      {
        id: 'br-6',
        category: 'Servis',
        name: 'Servis Kaliper Rem',
        price: 'Rp140.000 - Rp200.000',
        time: '60 - 120 Menit',
        includes: [
          'Pembongkaran Kaliper',
          'Pembersihan Piston Kaliper',
          'Pemeriksaan Seal Kaliper',
          'Pelumasan Pin Kaliper',
          'Perakitan Kembali',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Kaliper Rem.'
      },
      {
        id: 'br-7',
        category: 'Servis',
        name: 'Servis Master Rem',
        price: 'Rp190.000 - Rp230.000',
        time: '90 - 180 Menit',
        includes: [
          'Pembongkaran Master Rem',
          'Pembersihan Komponen',
          'Penggantian Seal Kit (bila diperlukan)',
          'Bleeding Sistem Rem',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Master Rem.'
      },
      {
        id: 'br-8',
        category: 'Penggantian',
        name: 'Ganti Master Rem',
        price: 'Rp140.000 - Rp200.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Master Rem',
          'Bleeding Sistem Rem',
          'Pemeriksaan Kebocoran',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Master Rem.'
      },
      {
        id: 'br-9',
        category: 'Penggantian',
        name: 'Ganti Booster Rem',
        price: 'Rp250.000 - Rp320.000',
        time: '90 - 180 Menit',
        includes: [
          'Penggantian Booster Rem',
          'Pemeriksaan Selang Vakum',
          'Pemeriksaan Master Rem',
          'Bleeding Sistem Rem',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Booster Rem.'
      },
      {
        id: 'br-10',
        category: 'Penggantian',
        name: 'Ganti Selang Minyak Rem',
        price: 'Rp110.000 - Rp120.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Selang Minyak Rem',
          'Bleeding Sistem Rem',
          'Pemeriksaan Kebocoran',
          'Uji Fungsi Rem'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Selang Minyak Rem.'
      },
      {
        id: 'br-11',
        category: 'Penggantian',
        name: 'Ganti Sensor ABS',
        price: 'Rp110.000 - Rp120.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Sensor ABS',
          'Scan Sistem ABS',
          'Hapus Kode Error (jika memungkinkan)',
          'Uji Fungsi Sistem ABS'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Sensor ABS.'
      }
    ]
  },
  'pendingin': {
    title: 'Sistem Pendingin',
    subtitle: 'Cooling System',
    services: [
      {
        id: 'cl-1',
        category: 'Perawatan',
        name: 'Kuras Radiator',
        price: 'Rp80.000 - Rp120.000',
        time: '30 - 60 Menit',
        includes: [
          'Pengurasan Coolant Lama',
          'Flushing Sistem Pendingin',
          'Pengisian Coolant Baru',
          'Pemeriksaan Kebocoran Sistem Pendingin',
          'Pemeriksaan Tutup Radiator'
        ],
        waText: 'Halo Admin. Saya nak booking Kuras Radiator.'
      },
      {
        id: 'cl-2',
        category: 'Penggantian',
        name: 'Ganti Radiator',
        price: 'Rp140.000 - Rp200.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Radiator',
          'Penggantian Coolant (bila diperlukan)',
          'Pemeriksaan Selang Radiator',
          'Pemeriksaan Tutup Radiator',
          'Uji Kebocoran Sistem Pendingin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Radiator.'
      },
      {
        id: 'cl-3',
        category: 'Penggantian',
        name: 'Ganti Water Pump',
        price: 'Rp220.000 - Rp460.000',
        time: '90 - 180 Menit',
        includes: [
          'Penggantian Water Pump',
          'Pemeriksaan Gasket Water Pump',
          'Pemeriksaan Drive Belt/Timing Belt (sesuai tipe)',
          'Pengisian Coolant Baru (bila diperlukan)',
          'Uji Sistem Pendingin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Water Pump.'
      },
      {
        id: 'cl-4',
        category: 'Penggantian',
        name: 'Ganti Thermostat',
        price: 'Rp165.000 - Rp230.000',
        time: '45 - 90 Menit',
        includes: [
          'Penggantian Thermostat',
          'Pemeriksaan Housing Thermostat',
          'Penggantian Coolant (bila diperlukan)',
          'Uji Suhu Kerja Mesin',
          'Pemeriksaan Kebocoran'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Thermostat.'
      },
      {
        id: 'cl-5',
        category: 'Penggantian',
        name: 'Ganti Selang Radiator',
        price: 'Rp85.000 - Rp145.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Selang Radiator',
          'Pemeriksaan Klem Selang',
          'Pengisian Coolant (bila diperlukan)',
          'Pemeriksaan Kebocoran',
          'Uji Sistem Pendingin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Selang Radiator.'
      },
      {
        id: 'cl-6',
        category: 'Penggantian',
        name: 'Ganti Tutup Radiator',
        price: 'Rp50.000 - Rp100.000',
        time: '15 - 30 Menit',
        includes: [
          'Penggantian Tutup Radiator',
          'Pemeriksaan Tekanan Sistem Pendingin',
          'Pemeriksaan Kebocoran'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Tutup Radiator.'
      },
      {
        id: 'cl-7',
        category: 'Penggantian',
        name: 'Ganti Motor Fan Radiator',
        price: 'Rp165.000 - Rp230.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Motor Fan Radiator',
          'Pemeriksaan Fan Blade',
          'Pemeriksaan Relay Fan',
          'Pemeriksaan Sekring Fan',
          'Uji Kinerja Kipas Radiator'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Motor Fan Radiator.'
      },
      {
        id: 'cl-8',
        category: 'Penggantian',
        name: 'Ganti Motor Fan Kondensor AC',
        price: 'Rp165.000 - Rp230.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Motor Fan Kondensor AC',
          'Pemeriksaan Relay Fan',
          'Pemeriksaan Sekring Fan',
          'Uji Kinerja Kipas Kondensor'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Motor Fan Kondensor AC.'
      },
      {
        id: 'cl-9',
        category: 'Penggantian',
        name: 'Ganti Water Outlet/Inlet',
        price: 'Rp165.000 - Rp230.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Water Outlet/Inlet',
          'Pemeriksaan Gasket',
          'Pemeriksaan Selang Radiator',
          'Pemeriksaan Kebocoran',
          'Uji Sistem Pendingin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Water Outlet/Inlet.'
      }
    ]
  },
  'transmisi': {
    title: 'Sistem Transmisi & Pemindah Daya',
    subtitle: 'Transmission & Drivetrain System',
    services: [
      {
        id: 'tr-1',
        category: 'Penggantian',
        name: 'Ganti Kopling',
        price: 'Rp300.000 - Rp900.000',
        time: '240 - 480 Menit',
        includes: [
          'Penggantian Kampas Kopling',
          'Pemeriksaan Pressure Plate',
          'Pemeriksaan Release Bearing',
          'Pemeriksaan Flywheel',
          'Penyetelan Sistem Kopling',
          'Uji Jalan Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Kopling.'
      },
      {
        id: 'tr-2',
        category: 'Penggantian',
        name: 'Ganti Master Kopling Atas',
        price: 'Rp175.000 - Rp250.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Master Kopling Atas',
          'Pemeriksaan Selang Kopling',
          'Bleeding Sistem Kopling',
          'Uji Fungsi Kopling'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Master Kopling Atas.'
      },
      {
        id: 'tr-3',
        category: 'Penggantian',
        name: 'Ganti Master Kopling Bawah',
        price: 'Rp175.000 - Rp250.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Master Kopling Bawah',
          'Pemeriksaan Selang Kopling',
          'Bleeding Sistem Kopling',
          'Uji Fungsi Kopling'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Master Kopling Bawah.'
      },
      {
        id: 'tr-4',
        category: 'Penggantian',
        name: 'Ganti Release Bearing',
        price: 'Rp450.000 - Rp700.000',
        time: '240 - 480 Menit',
        includes: [
          'Penggantian Release Bearing',
          'Pemeriksaan Kampas Kopling',
          'Pemeriksaan Pressure Plate',
          'Pemeriksaan Flywheel',
          'Uji Fungsi Kopling'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Release Bearing.'
      },
      {
        id: 'tr-5',
        category: 'Penggantian',
        name: 'Ganti Pilot Bearing',
        price: 'Rp450.000 - Rp700.000',
        time: '240 - 480 Menit',
        includes: [
          'Penggantian Pilot Bearing',
          'Pemeriksaan Flywheel',
          'Pemeriksaan Poros Input Transmisi',
          'Uji Fungsi Kopling'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Pilot Bearing.'
      },
      {
        id: 'tr-6',
        category: 'Penggantian',
        name: 'Ganti Drive Shaft',
        price: 'Rp220.000 - Rp385.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Drive Shaft',
          'Pemeriksaan CV Joint',
          'Pemeriksaan Boot Drive Shaft',
          'Pemeriksaan Oli Transmisi (jika diperlukan)',
          'Uji Jalan Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Drive Shaft.'
      },
      {
        id: 'tr-7',
        category: 'Penggantian',
        name: 'Ganti Boot Drive Shaft',
        price: 'Rp165.000 - Rp250.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Boot Drive Shaft',
          'Penggantian Grease CV Joint',
          'Pemeriksaan CV Joint',
          'Pembersihan Area CV Joint',
          'Uji Jalan Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Boot Drive Shaft.'
      },
      {
        id: 'tr-8',
        category: 'Penggantian',
        name: 'Ganti Bearing Roda',
        price: 'Rp165.000 - Rp320.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Bearing Roda',
          'Pemeriksaan Hub Roda',
          'Pemeriksaan As Roda',
          'Pemeriksaan Kekencangan Baut Roda',
          'Uji Jalan Kendaraan'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Bearing Roda.'
      },
      {
        id: 'tr-9',
        category: 'Servis',
        name: 'Servis Transmisi Manual',
        price: 'Rp1.200.000 - Rp3.500.000',
        time: '1 - 3 Hari',
        includes: [
          'Pembongkaran Transmisi',
          'Pemeriksaan Gear Transmisi',
          'Pemeriksaan Bearing',
          'Pemeriksaan Synchronizer',
          'Penggantian Komponen Rusak (jika diperlukan)',
          'Perakitan & Uji Jalan'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Transmisi Manual.'
      },
      {
        id: 'tr-10',
        category: 'Servis',
        name: 'Servis Transmisi Otomatis',
        price: 'Rp2.500.000 - Rp8.000.000',
        time: '2 - 5 Hari',
        includes: [
          'Pemeriksaan Awal Transmisi',
          'Pembongkaran Transmisi Otomatis',
          'Pemeriksaan Valve Body',
          'Pemeriksaan Clutch Pack',
          'Pemeriksaan Torque Converter (bila diperlukan)',
          'Perakitan & Pengujian'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Transmisi Otomatis.'
      }
    ]
  },
  'kelistrikan': {
    title: 'Sistem Kelistrikan',
    subtitle: 'Electrical System',
    services: [
      {
        id: 'el-1',
        category: 'Pemeriksaan',
        name: 'Pemeriksaan Sistem Starter',
        price: 'Rp200.000 - Rp320.000',
        time: '30 - 60 Menit',
        includes: [
          'Pemeriksaan Kondisi Aki',
          'Pemeriksaan Dinamo Starter',
          'Pemeriksaan Relay Starter',
          'Pemeriksaan Jalur Kelistrikan Starter',
          'Pengukuran Tegangan Starter',
          'Analisa Penyebab Gangguan'
        ],
        waText: 'Halo Admin. Saya nak booking Pemeriksaan Sistem Starter.'
      },
      {
        id: 'el-2',
        category: 'Pemeriksaan',
        name: 'Pemeriksaan Sistem Charging',
        price: 'Rp200.000 - Rp300.000',
        time: '30 - 60 Menit',
        includes: [
          'Pemeriksaan Alternator',
          'Pemeriksaan Regulator',
          'Pemeriksaan Tegangan Pengisian',
          'Pemeriksaan Aki',
          'Analisa Sistem Charging'
        ],
        waText: 'Halo Admin. Saya nak booking Pemeriksaan Sistem Charging.'
      },
      {
        id: 'el-3',
        category: 'Penggantian',
        name: 'Ganti Aki',
        price: 'Rp80.000 - Rp100.000',
        time: '15 - 30 Menit',
        includes: [
          'Penggantian Aki',
          'Pemeriksaan Terminal Aki',
          'Pembersihan Terminal Aki',
          'Pemeriksaan Tegangan Pengisian',
          'Reset Sistem Elektronik (jika diperlukan)'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Aki.'
      },
      {
        id: 'el-4',
        category: 'Penggantian',
        name: 'Ganti Alternator',
        price: 'Rp190.000 - Rp230.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Alternator',
          'Pemeriksaan Belt Alternator',
          'Pemeriksaan Jalur Kelistrikan',
          'Pemeriksaan Tegangan Pengisian',
          'Uji Sistem Charging'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Alternator.'
      },
      {
        id: 'el-5',
        category: 'Servis',
        name: 'Servis Alternator',
        price: 'Rp385.000 - Rp520.000',
        time: '120 - 240 Menit',
        includes: [
          'Pembongkaran Alternator',
          'Pembersihan Komponen',
          'Pemeriksaan Rotor & Stator',
          'Pemeriksaan Bearing',
          'Pemeriksaan Carbon Brush',
          'Perakitan & Pengujian'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Alternator.'
      },
      {
        id: 'el-6',
        category: 'Penggantian',
        name: 'Ganti Dinamo Starter',
        price: 'Rp190.000 - Rp290.000',
        time: '60 - 120 Menit',
        includes: [
          'Penggantian Dinamo Starter',
          'Pemeriksaan Relay Starter',
          'Pemeriksaan Jalur Kelistrikan',
          'Uji Sistem Starter'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Dinamo Starter.'
      },
      {
        id: 'el-7',
        category: 'Servis',
        name: 'Servis Dinamo Starter',
        price: 'Rp275.000 - Rp390.000',
        time: '120 - 240 Menit',
        includes: [
          'Pembongkaran Dinamo Starter',
          'Pembersihan Komponen',
          'Pemeriksaan Carbon Brush',
          'Pemeriksaan Bendix',
          'Pemeriksaan Armature',
          'Perakitan & Pengujian'
        ],
        waText: 'Halo Admin. Saya nak booking Servis Dinamo Starter.'
      },
      {
        id: 'el-8',
        category: 'Penggantian',
        name: 'Ganti Ignition Coil',
        price: 'Rp110.000 - Rp380.000',
        time: '30 - 60 Menit',
        includes: [
          'Penggantian Ignition Coil',
          'Pemeriksaan Soket Coil',
          'Pemeriksaan Sistem Pengapian',
          'Uji Percikan Api',
          'Uji Performa Mesin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Ignition Coil.'
      },
      {
        id: 'el-9',
        category: 'Penggantian',
        name: 'Ganti Kabel Busi',
        price: 'Rp110.000 - Rp130.000',
        time: '30 - 45 Menit',
        includes: [
          'Penggantian Kabel Busi',
          'Pemeriksaan Jalur Pengapian',
          'Pemeriksaan Soket Kabel Busi',
          'Uji Percikan Api',
          'Uji Performa Mesin'
        ],
        waText: 'Halo Admin. Saya nak booking Ganti Kabel Busi.'
      }
    ]
  }
};

/* Global reference for active system */
let activeSystemKey = null;

/* Function Open Modal Level 1 (Service List) */
function openSystemModal(sysKey) {
  const sysData = systemServicesData[sysKey];
  if (!sysData) return;
  
  activeSystemKey = sysKey;
  
  // Set Title & Subtitle
  document.getElementById('sys-list-title').innerText = sysData.title;
  document.getElementById('sys-list-subtitle').innerText = sysData.subtitle;
  
  // Render Cards List
  const container = document.getElementById('sys-services-container');
  container.innerHTML = '';
  
  sysData.services.forEach((srv, idx) => {
    const card = document.createElement('div');
    card.className = 'srv-card';
    card.innerHTML = `
      <div class="srv-card-header">
        <span class="srv-category-badge">${srv.category}</span>
        <h4 class="srv-title">${srv.name}</h4>
      </div>
      <div class="srv-card-meta">
        <div><i class="fas fa-tag"></i> <span>${srv.price}</span></div>
        <div><i class="far fa-clock"></i> <span>${srv.time}</span></div>
      </div>
      <button class="btn-detail-act" onclick="openDetailModal(${idx})">Detail <i class="fas fa-chevron-right"></i></button>
    `;
    container.appendChild(card);
  });

  const modalL1 = document.getElementById('modal-system-level1');
  modalL1.style.display = 'block';
  setTimeout(() => modalL1.classList.add('active'), 10);
  document.body.style.overflow = 'hidden';
}

/* Function Open Modal Level 2 (Service Detail) */
function openDetailModal(serviceIndex) {
  if (!activeSystemKey) return;
  const srv = systemServicesData[activeSystemKey].services[serviceIndex];
  if (!srv) return;

  // Set Detail Fields
  document.getElementById('dt-category').innerText = srv.category;
  document.getElementById('dt-title').innerText = srv.name;
  document.getElementById('dt-price').innerText = srv.price;
  document.getElementById('dt-time').innerText = srv.time;
  
  // Render Check List
  const includesContainer = document.getElementById('dt-includes');
  includesContainer.innerHTML = '';
  srv.includes.forEach(item => {
    const li = document.createElement('div');
    li.className = 'dt-check-item';
    li.innerHTML = `<i class="fas fa-check-circle icon-check"></i> ${item}`;
    includesContainer.appendChild(li);
  });

  // Set WhatsApp Link
  const phone = "62895622499262";
  const encodedText = encodeURIComponent(srv.waText);
  document.getElementById('dt-wa-btn').href = `https://wa.me/${phone}?text=${encodedText}`;

  const modalL2 = document.getElementById('modal-system-level2');
  modalL2.style.display = 'block';
  setTimeout(() => modalL2.classList.add('active'), 10);
}

/* Close Modals Logic */
function closeSystemModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
      if (!document.querySelector('.bottom-sheet-modal.active')) {
        document.body.style.overflow = 'auto';
      }
    }, 300);
  }
}
