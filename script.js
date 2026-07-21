// Interactive Functions for Vrrins Garage Website

function toggleMenu() {
    const drawer = document.getElementById('navDrawer');
    const overlay = document.getElementById('drawerOverlay');
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
}

function openPopup(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.add('active');
    } else {
        // Fallback generic modal
        document.getElementById('popup-generic').classList.add('active');
    }
}

function closePopup(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.remove('active');
    }
}

function switchTab(btn, tabId) {
    const parent = btn.closest('.modal-content');
    const buttons = parent.querySelectorAll('.tab-btn');
    const contents = parent.querySelectorAll('.tab-content');
    
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.style.display = 'none');
    
    btn.classList.add('active');
    const targetContent = parent.querySelector('.' + tabId);
    if(targetContent) {
        targetContent.style.display = 'block';
    }
}

function toggleFaq(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const arrow = button.querySelector('.faq-arrow');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Live Search filtering
function filterServices() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (input.trim() === '') {
        resultsContainer.style.display = 'none';
        resultsContainer.innerHTML = '';
        return;
    }
    
    const services = [
        { name: 'Flushing Radiator', type: 'Sistem Pendingin', modal: 'popup-sistem-pendingin' },
        { name: 'Ganti Radiator', type: 'Sistem Pendingin', modal: 'popup-sistem-pendingin' },
        { name: 'Ganti Tutup Radiator', type: 'Sistem Pendingin', modal: 'popup-sistem-pendingin' },
        { name: 'Ganti Selang Radiator', type: 'Sistem Pendingin', modal: 'popup-sistem-pendingin' },
        { name: 'Ganti Kipas Radiator', type: 'Sistem Pendingin', modal: 'popup-sistem-pendingin' },
        { name: 'VG Tune Bensin', type: 'Layanan Utama', modal: 'popup-vg-tune-bensin' },
        { name: 'VG Tune Diesel', type: 'Layanan Utama', modal: 'popup-vg-tune-diesel' },
        { name: 'Ganti Kampas Rem Depan', type: 'Sistem Rem', modal: 'popup-sistem-rem' },
        { name: 'Ganti Kampas Rem Belakang', type: 'Sistem Rem', modal: 'popup-sistem-rem' },
        { name: 'VG Oil Service', type: 'Layanan Utama', modal: 'popup-vg-oil' },
        { name: 'VG Check / Scan ECU', type: 'Layanan Utama', modal: 'popup-vg-check' }
    ];
    
    const filtered = services.filter(s => s.name.toLowerCase().includes(input));
    
    if (filtered.length > 0) {
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = filtered.map(s => `
            <div class="search-item" onclick="openPopup('${s.modal}')">
                <span>${s.name}</span>
                <small style="color:#888;">${s.type} &rarr;</small>
            </div>
        `).join('');
    } else {
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = `<div class="search-item" style="color:#888;">Layanan tidak ditemukan. Silakan hubungi WA.</div>`;
    }
}
