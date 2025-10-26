// Vendor Data dengan gambar untuk semua kategori
const vendors = [
    { 
        name: 'WO Harmoni Wedding', 
        category: 'WO', 
        price: 15000000, 
        rating: 5.0, 
        icon: '📋', 
        location: 'Jakarta',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    },
    { 
        name: 'MC Professional', 
        category: 'MC', 
        price: 3000000, 
        rating: 4.8, 
        icon: '🎤', 
        location: 'Jakarta',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face'
    },
    { 
        name: 'Band Melody', 
        category: 'Band', 
        price: 8000000, 
        rating: 4.9, 
        icon: '🎵', 
        location: 'Bandung',
        photo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop'
    },
    { 
        name: 'MUA Cantik Selamanya', 
        category: 'MUA', 
        price: 5000000, 
        rating: 5.0, 
        icon: '💄', 
        location: 'Jakarta',
        photo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop'
    },
    { 
        name: 'Dekorasi Indah', 
        category: 'Dekorasi', 
        price: 20000000, 
        rating: 4.7, 
        icon: '🌸', 
        location: 'Surabaya',
        photo: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop'
    },
    { 
        name: 'Fotografi Moments', 
        category: 'Fotografi', 
        price: 12000000, 
        rating: 4.9, 
        icon: '📸', 
        location: 'Bali',
        photo: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=300&fit=crop'
    },
    { 
        name: 'Catering Delicious', 
        category: 'Catering', 
        price: 25000000, 
        rating: 4.8, 
        icon: '🍽️', 
        location: 'Jakarta',
        photo: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop'
    },
    { 
        name: 'Undangan Digital Pro', 
        category: 'Undangan', 
        price: 2000000, 
        rating: 4.6, 
        icon: '💌', 
        location: 'Jakarta',
        photo: 'https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?w=400&h=300&fit=crop'
    },
    { 
        name: 'Undangan Cetak Elegan', 
        category: 'Undangan', 
        price: 3500000, 
        rating: 4.7, 
        icon: '💌', 
        location: 'Bandung',
        photo: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=300&fit=crop'
    },
    { 
        name: 'Souvenir Unik', 
        category: 'Souvenir', 
        price: 5000000, 
        rating: 4.5, 
        icon: '🎁', 
        location: 'Yogyakarta',
        photo: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop'
    },
    { 
        name: 'Penari Tradisional', 
        category: 'Penari', 
        price: 4000000, 
        rating: 4.8, 
        icon: '💃', 
        location: 'Yogyakarta',
        photo: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=300&fit=crop'
    },
    { 
        name: 'WO Elite Wedding', 
        category: 'WO', 
        price: 25000000, 
        rating: 4.9, 
        icon: '📋', 
        location: 'Jakarta',
        photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop'
    },
    { 
        name: 'MC Celebrity', 
        category: 'MC', 
        price: 5000000, 
        rating: 5.0, 
        icon: '🎤', 
        location: 'Surabaya',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face'
    },
    { 
        name: 'MUA Premium Beauty', 
        category: 'MUA', 
        price: 8000000, 
        rating: 4.8, 
        icon: '💄', 
        location: 'Bali',
        photo: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1e1?w=400&h=300&fit=crop'
    },
    // Tambahan MC baru dengan foto
    { 
        name: 'MC Handsome', 
        category: 'MC', 
        price: 3500000, 
        rating: 4.7, 
        icon: '🎤', 
        location: 'Jakarta',
        photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=300&fit=crop&crop=face'
    },
    { 
        name: 'MC Beautiful', 
        category: 'MC', 
        price: 4000000, 
        rating: 4.9, 
        icon: '🎤', 
        location: 'Bandung',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face'
    },
    { 
        name: 'MC Experience', 
        category: 'MC', 
        price: 4500000, 
        rating: 4.8, 
        icon: '🎤', 
        location: 'Bali',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face'
    },
    { 
        name: 'MC Charming', 
        category: 'MC', 
        price: 3800000, 
        rating: 4.6, 
        icon: '🎤', 
        location: 'Surabaya',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop&crop=face'
    }
];

// Wedding Organizer Data (Detailed) dengan gambar
const weddingOrganizers = [
    {
        id: 1,
        name: 'WO Harmoni Wedding',
        location: 'Jakarta',
        rating: 5.0,
        reviews: 248,
        completed: 156,
        price: 15000000,
        priceMax: 50000000,
        icon: '📋',
        description: 'Wedding Organizer profesional dengan pengalaman 10+ tahun. Spesialis wedding modern dan tradisional.',
        features: ['Full Coordination', 'Vendor Management', 'Timeline Planning', 'Budget Consulting'],
        portfolio: 156,
        responseTime: '< 1 jam',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'WO Elite Wedding',
        location: 'Jakarta',
        rating: 4.9,
        reviews: 312,
        completed: 203,
        price: 25000000,
        priceMax: 100000000,
        icon: '📋',
        description: 'Premium wedding organizer untuk acara mewah. Tim profesional dan berpengalaman dalam wedding internasional.',
        features: ['Luxury Coordination', 'International Team', 'Designer Collaboration', '24/7 Support'],
        portfolio: 203,
        responseTime: '< 30 menit',
        photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'WO Indah Sentosa',
        location: 'Bandung',
        rating: 4.8,
        reviews: 189,
        completed: 124,
        price: 12000000,
        priceMax: 35000000,
        icon: '📋',
        description: 'Wedding Organizer terpercaya di Bandung. Ahli dalam garden wedding dan outdoor concept.',
        features: ['Garden Specialist', 'Outdoor Expert', 'Decoration Include', 'Flexible Package'],
        portfolio: 124,
        responseTime: '< 2 jam',
        photo: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: 'WO Bahagia Abadi',
        location: 'Surabaya',
        rating: 4.9,
        reviews: 267,
        completed: 178,
        price: 18000000,
        priceMax: 60000000,
        icon: '📋',
        description: 'Wedding Organizer favorit di Surabaya. Melayani wedding tradisional Jawa dengan detail sempurna.',
        features: ['Javanese Wedding', 'Cultural Expert', 'Traditional Music', 'Complete Package'],
        portfolio: 178,
        responseTime: '< 1 jam',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'WO Jogja Heritage',
        location: 'Yogyakarta',
        rating: 5.0,
        reviews: 156,
        completed: 98,
        price: 10000000,
        priceMax: 30000000,
        icon: '📋',
        description: 'Spesialis wedding adat Jawa dan Yogyakarta. Menjaga tradisi dengan sentuhan modern.',
        features: ['Adat Jawa', 'Heritage Venue', 'Traditional Attire', 'Cultural Guide'],
        portfolio: 98,
        responseTime: '< 3 jam',
        photo: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop'
    },
    {
        id: 6,
        name: 'WO Bali Dream',
        location: 'Bali',
        rating: 4.9,
        reviews: 423,
        completed: 289,
        price: 30000000,
        priceMax: 150000000,
        icon: '📋',
        description: 'Premier destination wedding organizer di Bali. Spesialis beach wedding dan villa wedding.',
        features: ['Beach Wedding', 'Villa Wedding', 'International Guest', 'Photo Locations'],
        portfolio: 289,
        responseTime: '< 30 menit',
        photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop'
    }
];

// Data MC Specialist (Detail)
const mcSpecialists = [
    {
        id: 1,
        name: 'MC Professional',
        location: 'Jakarta',
        rating: 4.8,
        reviews: 156,
        completed: 89,
        price: 3000000,
        priceMax: 5000000,
        icon: '🎤',
        description: 'MC profesional dengan pengalaman 5+ tahun. Spesialis wedding formal dan elegan dengan pembawaan yang hangat.',
        features: ['Bilingual (EN/ID)', 'Script Writing', 'Event Coordination', 'Interactive Games'],
        portfolio: 89,
        responseTime: '< 2 jam',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
        specialties: ['Wedding Formal', 'Corporate Event', 'Gala Dinner'],
        languages: ['Indonesia', 'English'],
        experience: '5+ years'
    },
    {
        id: 2,
        name: 'MC Celebrity',
        location: 'Surabaya',
        rating: 5.0,
        reviews: 203,
        completed: 145,
        price: 5000000,
        priceMax: 10000000,
        icon: '🌟',
        description: 'MC selebriti terkenal dengan charisma tinggi. Membuat acara menjadi lebih berkesan dan menghibur.',
        features: ['Celebrity Presence', 'Media Coverage', 'Custom Script', 'VIP Treatment'],
        portfolio: 145,
        responseTime: '< 1 jam',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
        specialties: ['Celebrity Wedding', 'Luxury Event', 'TV Appearance'],
        languages: ['Indonesia', 'English', 'Javanese'],
        experience: '8+ years'
    },
    {
        id: 3,
        name: 'MC Handsome',
        location: 'Jakarta',
        rating: 4.7,
        reviews: 98,
        completed: 67,
        price: 3500000,
        priceMax: 6000000,
        icon: '😎',
        description: 'MC dengan penampilan menarik dan suara yang enak didengar. Spesialis wedding modern dan kekinian.',
        features: ['Modern Style', 'Youthful Energy', 'Social Media Savvy', 'Trendy Games'],
        portfolio: 67,
        responseTime: '< 3 jam',
        photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=300&fit=crop&crop=face',
        specialties: ['Modern Wedding', 'Young Couple', 'Social Event'],
        languages: ['Indonesia', 'English'],
        experience: '3+ years'
    },
    {
        id: 4,
        name: 'MC Beautiful',
        location: 'Bandung',
        rating: 4.9,
        reviews: 134,
        completed: 92,
        price: 4000000,
        priceMax: 7000000,
        icon: '💁‍♀️',
        description: 'MC cantik dengan elegan dan pembawaan yang lembut. Cocok untuk wedding dengan tema romantic.',
        features: ['Elegant Style', 'Soft Voice', 'Romantic Approach', 'Poetic Script'],
        portfolio: 92,
        responseTime: '< 2 jam',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face',
        specialties: ['Romantic Wedding', 'Garden Theme', 'Intimate Event'],
        languages: ['Indonesia', 'English', 'Sundanese'],
        experience: '4+ years'
    },
    {
        id: 5,
        name: 'MC Experience',
        location: 'Bali',
        rating: 4.8,
        reviews: 178,
        completed: 123,
        price: 4500000,
        priceMax: 8000000,
        icon: '🧔‍♂️',
        description: 'MC berpengalaman dengan jam terbang tinggi. Menguasai berbagai jenis acara dan budaya.',
        features: ['Vast Experience', 'Cultural Knowledge', 'Crisis Management', 'Multi-format'],
        portfolio: 123,
        responseTime: '< 1 jam',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face',
        specialties: ['International Wedding', 'Cultural Event', 'Large Gathering'],
        languages: ['Indonesia', 'English', 'Balinese'],
        experience: '10+ years'
    },
    {
        id: 6,
        name: 'MC Charming',
        location: 'Surabaya',
        rating: 4.6,
        reviews: 87,
        completed: 64,
        price: 3800000,
        priceMax: 5500000,
        icon: '😊',
        description: 'MC dengan senyuman menawan dan personality yang menyenangkan. Membuat tamu merasa welcome.',
        features: ['Friendly Approach', 'Great Humor', 'Audience Engagement', 'Warm Personality'],
        portfolio: 64,
        responseTime: '< 4 jam',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop&crop=face',
        specialties: ['Fun Wedding', 'Interactive Event', 'Community Gathering'],
        languages: ['Indonesia', 'Javanese'],
        experience: '2+ years'
    }
];

// Wedding Checklist
const checklist = [
    { time: 'H-180', task: 'Tentukan tanggal pernikahan & budget' },
    { time: 'H-150', task: 'Booking venue & vendor utama (WO, Catering, Dekorasi)' },
    { time: 'H-120', task: 'Fitting baju pengantin & pilih tema' },
    { time: 'H-90', task: 'Booking MUA, Fotografi, MC, Band' },
    { time: 'H-60', task: 'Pesan undangan & mulai distribusi' },
    { time: 'H-30', task: 'Konfirmasi jumlah tamu & finalisasi vendor' },
    { time: 'H-14', task: 'Cek rundown acara & gladi resik' },
    { time: 'H-7', task: 'Konfirmasi terakhir ke semua vendor' },
    { time: 'H-3', task: 'Spa & self care' },
    { time: 'H-1', task: 'Persiapan terakhir & istirahat cukup' }
];

// Global Variables
let cart = [];
let currentVendorForChat = '';
let currentWOList = [...weddingOrganizers];
let currentRegion = 'all';
let currentMCList = [...mcSpecialists];
let currentMCLocation = 'all';

// ==================== PAGE MANAGEMENT ====================
function showPage(pageId, event) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Activate the clicked nav item
    if (event) {
        const navItem = event.target.closest('.nav-item');
        if (navItem) {
            navItem.classList.add('active');
        }
    }
    
    // Special initialization for specific pages
    if (pageId === 'woPage') {
        displayWOList(currentWOList);
    } else if (pageId === 'mcPage') {
        displayMCList(currentMCList);
    } else if (pageId === 'aiPage') {
        generateRecommendations();
    }
    
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
}

function showIconsPage(event) {
    showPage('iconsPage', event);
}

function showAIPage(event) {
    showPage('aiPage', event);
}

function showMCPage(event) {
    showPage('mcPage', event);
}

function backToHome() {
    showPage('homePage');
}

// ==================== ICON MANAGEMENT ====================
function copyIcon(icon) {
    navigator.clipboard.writeText(icon).then(() => {
        showNotification(`Icon ${icon} berhasil disalin!`);
    }).catch(err => {
        console.error('Failed to copy icon: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = icon;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`Icon ${icon} berhasil disalin!`);
    });
}

function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #d4a574;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 600;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add animation
    notification.animate([
        { transform: 'translateX(-50%) translateY(-20px)', opacity: 0 },
        { transform: 'translateX(-50%) translateY(0)', opacity: 1 }
    ], {
        duration: 300,
        easing: 'ease-out'
    });
    
    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.animate([
            { transform: 'translateX(-50%) translateY(0)', opacity: 1 },
            { transform: 'translateX(-50%) translateY(-20px)', opacity: 0 }
        ], {
            duration: 300,
            easing: 'ease-in'
        }).onfinish = () => notification.remove();
    }, 2000);
}

// ==================== INITIALIZATION ====================
function init() {
    console.log('Initializing application...');
    
    // Initialize all components
    displayVendors(vendors);
    displayChecklist();
    updateBudgetDisplay();
    
    // Set up event listeners for bottom navigation
    setupNavigation();
    
    // Show home page by default
    showPage('homePage');
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            const pages = ['homePage', 'woPage', 'mcPage', 'iconsPage', 'aiPage'];
            showPage(pages[index], e);
        });
    });
}

// ==================== VENDOR FUNCTIONS ====================
function displayVendors(vendorList) {
    const grid = document.getElementById('vendorGrid');
    if (!grid) {
        console.error('vendorGrid element not found');
        return;
    }
    
    console.log('Displaying vendors:', vendorList.length);
    
    grid.innerHTML = vendorList.map(vendor => `
        <div class="vendor-card">
            <div class="vendor-image ${vendor.photo ? 'has-photo' : ''}">
                ${vendor.photo 
                    ? `<img src="${vendor.photo}" alt="${vendor.name}" class="vendor-photo" onerror="this.style.display='none'; this.parentElement.classList.remove('has-photo'); this.parentElement.innerHTML='${vendor.icon}'">`
                    : vendor.icon
                }
                <div class="discount-badge">-10%</div>
            </div>
            <div class="vendor-info">
                <div class="vendor-name">${vendor.name}</div>
                <div class="vendor-category">${vendor.category}</div>
                <div class="vendor-rating">⭐ ${vendor.rating}</div>
                <div class="vendor-price">Rp ${vendor.price.toLocaleString('id-ID')}</div>
                <div class="vendor-location">📍 ${vendor.location}</div>
                <button class="btn btn-primary" onclick="addToCart('${vendor.name.replace(/'/g, "\\'")}', ${vendor.price})" style="margin-top: 0.5rem; font-size: 0.8rem; padding: 0.5rem;">+ Keranjang</button>
                <button class="btn btn-wo-secondary" onclick="openChat('${vendor.name.replace(/'/g, "\\'")}')" style="margin-top: 0.3rem; font-size: 0.8rem; padding: 0.5rem;">💬 Chat</button>
            </div>
        </div>
    `).join('');
}

function filterVendors(category, event) {
    console.log('Filtering vendors by category:', category);
    
    if (category === 'WO') {
        showPage('woPage', event);
        return;
    }
    
    if (category === 'MC') {
        showMCPage(event);
        return;
    }
    
    const filtered = category === 'all' ? vendors : vendors.filter(v => v.category === category);
    displayVendors(filtered);
    
    // Update active filter button
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        item.style.opacity = '0.6';
    });
    
    if (event && event.target) {
        const categoryItem = event.target.closest('.category-item');
        if (categoryItem) {
            categoryItem.classList.add('active');
            categoryItem.style.opacity = '1';
        }
    }
}

// ==================== WO FUNCTIONS ====================
function displayWOList(woList) {
    const container = document.getElementById('woList');
    const count = document.getElementById('woCount');
    
    if (!container || !count) {
        console.error('WO list elements not found');
        return;
    }
    
    count.textContent = woList.length;
    
    if (woList.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #999;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">😔</div>
                <div>Tidak ada Wedding Organizer di wilayah ini</div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = woList.map(wo => `
        <div class="wo-card">
            <div class="wo-card-header">
                <div class="wo-image ${wo.photo ? 'has-photo' : ''}">
                    ${wo.photo 
                        ? `<img src="${wo.photo}" alt="${wo.name}" class="wo-photo" onerror="this.style.display='none'; this.parentElement.classList.remove('has-photo'); this.parentElement.innerHTML='${wo.icon}'">`
                        : wo.icon
                    }
                </div>
                <div class="wo-info">
                    <div class="wo-name">${wo.name}</div>
                    <div class="wo-location">📍 ${wo.location}</div>
                    <div class="wo-rating">
                        <span style="color: #ffa500;">⭐ ${wo.rating}</span>
                        <span style="color: #999;">(${wo.reviews} review)</span>
                    </div>
                    <div class="wo-stats">
                        <span>✅ ${wo.completed} Project</span>
                        <span>⚡ ${wo.responseTime}</span>
                    </div>
                </div>
            </div>
            <div class="wo-card-body">
                <div class="wo-description">${wo.description}</div>
                <div class="wo-features">
                    ${wo.features.map(f => `<span class="wo-feature-tag">${f}</span>`).join('')}
                </div>
                <div class="wo-price-section">
                    <div>
                        <div class="wo-price">Rp ${(wo.price / 1000000).toFixed(0)}jt - ${(wo.priceMax / 1000000).toFixed(0)}jt</div>
                        <div class="wo-price-label">Mulai dari</div>
                    </div>
                    <div class="wo-actions">
                        <button class="btn-wo btn-wo-secondary" onclick="openChat('${wo.name.replace(/'/g, "\\'")}')">💬 Chat</button>
                        <button class="btn-wo btn-wo-primary" onclick="addToCart('${wo.name.replace(/'/g, "\\'")}', ${wo.price})">+ Budget</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function filterByRegion(region, event) {
    console.log('Filtering by region:', region);
    currentRegion = region;
    
    if (region === 'all') {
        currentWOList = [...weddingOrganizers];
    } else {
        currentWOList = weddingOrganizers.filter(wo => wo.location === region);
    }
    
    displayWOList(currentWOList);
    
    // Update active button
    document.querySelectorAll('.filter-btn-region').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function sortWO() {
    const sortBy = document.getElementById('sortWO').value;
    console.log('Sorting by:', sortBy);
    
    switch(sortBy) {
        case 'popular':
            currentWOList.sort((a, b) => b.completed - a.completed);
            break;
        case 'rating':
            currentWOList.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            currentWOList.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentWOList.sort((a, b) => b.price - a.price);
            break;
    }
    
    displayWOList(currentWOList);
}

// ==================== MC FUNCTIONS ====================
function displayMCList(mcList) {
    const container = document.getElementById('mcList');
    const count = document.getElementById('mcCount');
    
    if (!container || !count) {
        console.error('MC list elements not found');
        return;
    }
    
    count.textContent = mcList.length;
    
    if (mcList.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #999;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🎤</div>
                <div>Tidak ada MC di wilayah ini</div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = mcList.map(mc => `
        <div class="mc-card">
            <div class="mc-card-header">
                <img src="${mc.photo}" alt="${mc.name}" class="mc-photo" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iNDAiIGZpbGw9IiNkNGE1NzQiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CjxwYXRoIGQ9Ik0yMCAyMXYtMmEyIDIgMCAwIDItMiAySDZhMiAyIDAgMCAwLTIgMnYyIj48L3BhdGg+CjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCI+PC9jaXJjbGU+Cjwvc3ZnPgo8L3N2Zz4K'">
                <div class="mc-info">
                    <div class="mc-name">${mc.name}</div>
                    <div class="mc-location">📍 ${mc.location}</div>
                    <div class="mc-rating">
                        <span class="rating-stars">⭐ ${mc.rating}</span>
                        <span style="color: #999;">(${mc.reviews} review)</span>
                        <span class="experience-badge" style="margin-left: 0.5rem;">${mc.experience}</span>
                    </div>
                    <div class="mc-specialties">
                        ${mc.specialties.map(s => `<span class="mc-specialty">${s}</span>`).join('')}
                    </div>
                    <div class="mc-stats">
                        <span>✅ ${mc.completed} Acara</span>
                        <span>⚡ ${mc.responseTime}</span>
                    </div>
                </div>
            </div>
            <div class="mc-card-body">
                <div class="mc-description">${mc.description}</div>
                <div class="mc-features">
                    ${mc.features.map(f => `<span class="mc-feature-tag">${f}</span>`).join('')}
                </div>
                <div class="mc-details">
                    <div class="mc-detail-item">
                        <span>🗣️ Bahasa:</span>
                        <span>${mc.languages.join(', ')}</span>
                    </div>
                    <div class="mc-detail-item">
                        <span>⭐ Spesialis:</span>
                        <span>${mc.specialties[0]}</span>
                    </div>
                </div>
                <div class="mc-price-section">
                    <div>
                        <div class="mc-price">Rp ${mc.price.toLocaleString('id-ID')}</div>
                        <div class="mc-price-label">Per acara (4 jam)</div>
                    </div>
                    <div class="mc-actions">
                        <button class="btn-wo btn-wo-secondary" onclick='openChat("${mc.name}")'>💬 Chat</button>
                        <button class="btn-wo btn-wo-primary" onclick='addToCart("${mc.name}", ${mc.price})'>+ Budget</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function filterMCByLocation(location, event) {
    currentMCLocation = location;
    
    if (location === 'all') {
        currentMCList = [...mcSpecialists];
    } else {
        currentMCList = mcSpecialists.filter(mc => mc.location === location);
    }
    
    displayMCList(currentMCList);
    
    // Update active button
    document.querySelectorAll('.filter-btn-mc').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function sortMC() {
    const sortBy = document.getElementById('sortMC').value;
    
    switch(sortBy) {
        case 'rating':
            currentMCList.sort((a, b) => b.rating - a.rating);
            break;
        case 'experience':
            currentMCList.sort((a, b) => {
                const expA = parseInt(a.experience);
                const expB = parseInt(b.experience);
                return expB - expA;
            });
            break;
        case 'price-low':
            currentMCList.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentMCList.sort((a, b) => b.price - a.price);
            break;
    }
    
    displayMCList(currentMCList);
}

// ==================== CART FUNCTIONS ====================
function addToCart(name, price) {
    console.log('Adding to cart:', name, price);
    cart.push({ name, price });
    updateBudgetDisplay();
    showNotification(`✅ ${name} berhasil ditambahkan ke budget!`);
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

function updateBudgetDisplay() {
    const budgetList = document.getElementById('budgetList');
    const budgetTotal = document.getElementById('budgetTotal');
    const cartCount = document.getElementById('cartCount');
    
    if (!budgetList || !budgetTotal || !cartCount) {
        console.error('Budget elements not found');
        return;
    }
    
    // Update cart count
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        budgetList.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">Belum ada vendor yang dipilih</p>';
    } else {
        budgetList.innerHTML = cart.map((item, index) => `
            <div class="budget-item">
                <div>
                    <div style="font-weight: bold;">${item.name}</div>
                    <div style="color: #999; font-size: 0.85rem;">Rp ${item.price.toLocaleString('id-ID')}</div>
                </div>
                <button onclick="removeFromCart(${index})" style="background: #ff4757; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">Hapus</button>
            </div>
        `).join('');
    }
    
    budgetTotal.textContent = `Total: Rp ${calculateTotal().toLocaleString('id-ID')}`;
}

function removeFromCart(index) {
    console.log('Removing from cart index:', index);
    const removedItem = cart[index];
    cart.splice(index, 1);
    updateBudgetDisplay();
    showNotification(`❌ ${removedItem.name} dihapus dari budget`);
}

function clearBudget() {
    if (confirm('Apakah Anda yakin ingin menghapus semua item?')) {
        cart = [];
        updateBudgetDisplay();
        showNotification('🗑️ Semua item berhasil dihapus');
    }
}

// ==================== CHECKLIST FUNCTIONS ====================
function displayChecklist() {
    const container = document.getElementById('checklistContainer');
    if (!container) {
        console.error('checklistContainer not found');
        return;
    }
    
    container.innerHTML = checklist.map((item, index) => `
        <div class="checklist-item" id="checklist-${index}">
            <input type="checkbox" onchange="toggleChecklist(${index})">
            <div>
                <div style="font-weight: bold; color: #d4a574;">${item.time}</div>
                <div>${item.task}</div>
            </div>
        </div>
    `).join('');
}

function toggleChecklist(index) {
    const item = document.getElementById(`checklist-${index}`);
    if (item) {
        item.classList.toggle('completed');
        const isCompleted = item.classList.contains('completed');
        showNotification(`${isCompleted ? '✅' : '⏳'} ${checklist[index].task}`);
    }
}

// ==================== MODAL FUNCTIONS ====================
function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    console.log('Closing modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ==================== CHAT FUNCTIONS ====================
function openChat(vendorName) {
    console.log('Opening chat with:', vendorName);
    currentVendorForChat = vendorName;
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = `
        <div class="chat-message vendor">
            <div style="font-weight: bold; margin-bottom: 0.3rem;">${vendorName}</div>
            <div>Halo! Terima kasih telah menghubungi kami. Ada yang bisa kami bantu?</div>
        </div>
    `;
    openModal('chatModal');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    // Add user message
    chatMessages.innerHTML += `
        <div class="chat-message user">
            ${message}
        </div>
    `;
    
    input.value = '';
    
    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Simulate vendor reply
    setTimeout(() => {
        const replies = [
            'Terima kasih atas pertanyaannya! Tim kami akan segera membantu Anda.',
            'Untuk informasi lebih detail, bisa hubungi WhatsApp kami ya!',
            'Kami siap membantu mewujudkan pernikahan impian Anda! 💍',
            'Paket yang Anda pilih sudah include berbagai benefit menarik.'
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        chatMessages.innerHTML += `
            <div class="chat-message vendor">
                <div style="font-weight: bold; margin-bottom: 0.3rem;">${currentVendorForChat}</div>
                <div>${randomReply}</div>
            </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

// ==================== AI RECOMMENDATIONS ====================
function generateRecommendations() {
    const theme = document.getElementById('themeSelect')?.value;
    const budget = document.getElementById('budgetSelect')?.value;
    
    const recommendations = document.getElementById('recommendations');
    const aiVendorGrid = document.getElementById('aiVendorGrid');
    
    if (!recommendations || !aiVendorGrid) return;
    
    if (!theme && !budget) {
        recommendations.innerHTML = 'Pilih tema dan budget untuk mendapatkan rekomendasi';
        aiVendorGrid.innerHTML = '';
        return;
    }
    
    let text = '🎯 Berdasarkan pilihan Anda, kami merekomendasikan: ';
    let recommendedVendors = [];
    
    // Logic for recommendations based on theme and budget
    if (theme === 'Modern') {
        text += 'WO Elite Wedding, MUA Premium Beauty, Fotografi Moments';
        recommendedVendors = vendors.filter(v => 
            v.name.includes('Elite') || 
            v.name.includes('Premium') || 
            v.category === 'Fotografi'
        );
    } else if (theme === 'Tradisional') {
        text += 'WO Harmoni Wedding, Penari Tradisional, Dekorasi Indah';
        recommendedVendors = vendors.filter(v => 
            v.name.includes('Harmoni') || 
            v.category === 'Penari' ||
            v.category === 'Dekorasi'
        );
    } else if (theme === 'Garden') {
        text += 'Dekorasi Indah, Fotografi Moments, Band Melody';
        recommendedVendors = vendors.filter(v => 
            v.category === 'Dekorasi' || 
            v.category === 'Fotografi' ||
            v.category === 'Band'
        );
    } else if (theme === 'Beach') {
        text += 'WO Bali Dream, Fotografi Moments, MC Celebrity';
        recommendedVendors = vendors.filter(v => 
            v.name.includes('Bali') || 
            v.category === 'Fotografi' ||
            v.name.includes('Celebrity')
        );
    }
    
    recommendations.innerHTML = text;
    
    // Display recommended vendors
    if (recommendedVendors.length > 0) {
        aiVendorGrid.innerHTML = recommendedVendors.map(vendor => `
            <div class="vendor-card">
                <div class="vendor-image ${vendor.photo ? 'has-photo' : ''}">
                    ${vendor.photo 
                        ? `<img src="${vendor.photo}" alt="${vendor.name}" class="vendor-photo" onerror="this.style.display='none'; this.parentElement.classList.remove('has-photo'); this.parentElement.innerHTML='${vendor.icon}'">`
                        : vendor.icon
                    }
                    <div class="discount-badge">AI Pick</div>
                </div>
                <div class="vendor-info">
                    <div class="vendor-name">${vendor.name}</div>
                    <div class="vendor-category">${vendor.category}</div>
                    <div class="vendor-rating">⭐ ${vendor.rating}</div>
                    <div class="vendor-price">Rp ${vendor.price.toLocaleString('id-ID')}</div>
                    <div class="vendor-location">📍 ${vendor.location}</div>
                    <button class="btn btn-primary" onclick="addToCart('${vendor.name.replace(/'/g, "\\'")}', ${vendor.price})" style="margin-top: 0.5rem; font-size: 0.8rem; padding: 0.5rem;">+ Keranjang</button>
                </div>
            </div>
        `).join('');
    } else {
        aiVendorGrid.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem; grid-column: 1 / -1;">Tidak ada rekomendasi untuk pilihan ini</p>';
    }
}

// ==================== UTILITY FUNCTIONS ====================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// ========== FLASH DEAL FUNCTIONS ==========
function openDeal(dealId) {
    const deals = {
        1: { name: "Paket All-Inclusive", price: 125000000 },
        2: { name: "Fotografi Premium", price: 7500000 },
        3: { name: "MUA Eksklusif", price: 4800000 },
        4: { name: "Live Band Profesional", price: 8400000 },
        5: { name: "Venue 5 Star", price: 56000000 }
    };
    
    const deal = deals[dealId];
    if (deal) {
        if (confirm(`Tambahkan "${deal.name}" ke budget sebesar Rp ${deal.price.toLocaleString('id-ID')}?`)) {
            addToCart(deal.name, deal.price);
            showNotification(`✅ ${deal.name} berhasil ditambahkan ke budget!`);
        }
    }
}

function showAllDeals() {
    showNotification('🚀 Menampilkan semua flash deal!');
    // Bisa diarahkan ke halaman khusus deals atau modal
    openModal('packageModal');
}
// ========== END FLASH DEAL FUNCTIONS ==========
// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Search on home page
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = vendors.filter(v => 
                v.name.toLowerCase().includes(searchTerm) || 
                v.category.toLowerCase().includes(searchTerm) ||
                v.location.toLowerCase().includes(searchTerm)
            );
            displayVendors(filtered);
        });
    }
    
    // Search WO
    const searchWO = document.getElementById('searchWO');
    if (searchWO) {
        searchWO.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = weddingOrganizers.filter(wo => 
                wo.name.toLowerCase().includes(searchTerm) || 
                wo.location.toLowerCase().includes(searchTerm) ||
                wo.description.toLowerCase().includes(searchTerm)
            );
            
            if (currentRegion !== 'all') {
                currentWOList = filtered.filter(wo => wo.location === currentRegion);
            } else {
                currentWOList = filtered;
            }
            
            displayWOList(currentWOList);
        });
    }
    
    // Search MC
    const searchMC = document.getElementById('searchMC');
    if (searchMC) {
        searchMC.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = mcSpecialists.filter(mc => 
                mc.name.toLowerCase().includes(searchTerm) || 
                mc.location.toLowerCase().includes(searchTerm) ||
                mc.description.toLowerCase().includes(searchTerm)
            );
            
            if (currentMCLocation !== 'all') {
                currentMCList = filtered.filter(mc => mc.location === currentMCLocation);
            } else {
                currentMCList = filtered;
            }
            
            displayMCList(currentMCList);
        });
    }
    
    // Chat input - send message on Enter key
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Header buttons
    const headerButtons = document.querySelectorAll('.icon-btn');
    headerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text.includes('Budget')) {
                openModal('budgetModal');
            } else if (text.includes('Checklist')) {
                openModal('checklistModal');
            } else if (text.includes('Icons')) {
                showIconsPage();
            } else if (text.includes('AI')) {
                showAIPage();
            }
        });
    });
    
    // Floating buttons
    const floatButtons = document.querySelectorAll('.float-btn');
    floatButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text === '↑') {
                scrollToTop();
            } else if (text === '💬') {
                openChat('Customer Service');
            } else if (text === '💰') {
                openModal('budgetModal');
            }
        });
    });
    
    // Initialize the application
    init();
});

// Initialize on page load
window.addEventListener('load', init);