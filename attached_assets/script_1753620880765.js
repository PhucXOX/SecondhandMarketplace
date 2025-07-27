// Sample product data
let products = [
    {
        id: 1,
        title: "Máy ảnh Canon EOS 70D kèm lens 18-55mm",
        description: "Máy ảnh Canon EOS 70D trong tình trạng rất tốt, sử dụng ít. Bao gồm thân máy, lens kit 18-55mm, sạc pin chính hãng, thẻ nhớ 32GB và hộp phụ kiện đầy đủ.",
        price: 8500000,
        category: "electronics",
        condition: "new",
        location: "hanoi",
        phone: "0901234567",
        email: "nguyen.a@email.com",
        sellerName: "Nguyễn Văn A",
        images: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-15').toISOString()
    },
    {
        id: 2,
        title: "Áo khoác jean vintage Levi's size M",
        description: "Áo khoác jean Levi's vintage authentic, màu xanh đậm, size M. Chất liệu denim cao cấp, thiết kế cổ điển, phù hợp cho cả nam và nữ.",
        price: 450000,
        category: "fashion",
        condition: "used",
        location: "hcm",
        phone: "0902345678",
        email: null,
        sellerName: "Mai Thị B",
        images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-14').toISOString()
    },
    {
        id: 3,
        title: "Bộ sách văn học Việt Nam (10 cuốn)",
        description: "Bộ sách văn học Việt Nam gồm 10 cuốn của các tác giả nổi tiếng. Sách trong tình trạng tốt, không rách hay ố vàng.",
        price: 280000,
        category: "books",
        condition: "new",
        location: "danang",
        phone: "0903456789",
        email: null,
        sellerName: "Hoàng Văn C",
        images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-13').toISOString()
    },
    {
        id: 4,
        title: "MacBook Air M1 13inch 256GB",
        description: "MacBook Air M1 chip, màn hình 13 inch, bộ nhớ 256GB. Máy sử dụng nhẹ, pin còn tốt, không có vết xước.",
        price: 18500000,
        category: "electronics",
        condition: "used",
        location: "hanoi",
        phone: "0904567890",
        email: null,
        sellerName: "Linh Nguyễn D",
        images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-12').toISOString()
    },
    {
        id: 5,
        title: "iPhone 14 Pro 128GB Deep Purple",
        description: "iPhone 14 Pro màu Deep Purple, bộ nhớ 128GB. Máy mới 99%, còn bảo hành 8 tháng, đầy đủ hộp và phụ kiện.",
        price: 22000000,
        category: "electronics",
        condition: "new",
        location: "hcm",
        phone: "0905678901",
        email: "tran.b@email.com",
        sellerName: "Trần Minh B",
        images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-11').toISOString()
    },
    {
        id: 6,
        title: "Xe đạp Giant ATX 2023",
        description: "Xe đạp Giant ATX 2023, size M, màu xanh. Xe ít sử dụng, các bộ phận còn hoạt động tốt.",
        price: 4500000,
        category: "vehicles",
        condition: "used",
        location: "danang",
        phone: "0906789012",
        email: null,
        sellerName: "Phạm Văn E",
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-10').toISOString()
    },
    {
        id: 7,
        title: "Bàn làm việc gỗ sồi 120x60cm",
        description: "Bàn làm việc gỗ sồi tự nhiên, kích thước 120x60x75cm. Thiết kế hiện đại, có ngăn kéo tiện lợi.",
        price: 2800000,
        category: "home",
        condition: "new",
        location: "hcm",
        phone: "0907890123",
        email: "pham.c@email.com",
        sellerName: "Phạm Thị C",
        images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-09').toISOString()
    },
    {
        id: 8,
        title: "Guitar Acoustic Yamaha F310",
        description: "Guitar Acoustic Yamaha F310, màu gỗ tự nhiên. Đàn trong tình trạng tốt, âm thanh trong trẻo.",
        price: 1200000,
        category: "home",
        condition: "used",
        location: "hanoi",
        phone: "0908901234",
        email: null,
        sellerName: "Đặng Văn F",
        images: ["https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-08').toISOString()
    }
];

let filteredProducts = [...products];
let currentFilters = {
    search: '',
    searchType: 'all',
    categories: [],
    condition: '',
    minPrice: null,
    maxPrice: null
};
let currentSort = 'newest';

// User management
let currentUser = null;
let users = JSON.parse(localStorage.getItem('cho_do_cu_users') || '[]');
let favorites = JSON.parse(localStorage.getItem('cho_do_cu_favorites') || '[]');

// Remember login
const rememberedUser = localStorage.getItem('cho_do_cu_remembered_user');
if (rememberedUser) {
    currentUser = JSON.parse(rememberedUser);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateResultsCount();
    updateUserInterface();
    updateFavoritesCount();
    
    // Add password strength checking
    const registerPassword = document.getElementById('register-password');
    if (registerPassword) {
        registerPassword.addEventListener('input', checkPasswordStrength);
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const userMenu = document.getElementById('user-menu');
        const dropdown = document.getElementById('user-dropdown');
        
        if (!userMenu.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// Search functionality
function handleSearch(event) {
    event.preventDefault();
    const form = event.target;
    const searchInput = form.querySelector('.search-input');
    const searchType = form.querySelector('.search-type-select') || document.getElementById('search-type');
    
    currentFilters.search = searchInput.value.toLowerCase();
    currentFilters.searchType = searchType ? searchType.value : 'all';
    
    // Sync search inputs
    document.querySelectorAll('.search-input').forEach(input => {
        input.value = searchInput.value;
    });
    document.querySelectorAll('.search-type-select').forEach(select => {
        select.value = currentFilters.searchType;
    });
    
    applyFilters();
}

// Filter functionality
function applyFilters() {
    // Get selected categories
    const categoryCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
    currentFilters.categories = Array.from(categoryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Get selected condition
    const conditionRadio = document.querySelector('input[name="condition"]:checked');
    currentFilters.condition = conditionRadio ? conditionRadio.value : '';

    filterAndRenderProducts();
}

function applyPriceFilter() {
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;
    
    currentFilters.minPrice = minPrice ? parseInt(minPrice) : null;
    currentFilters.maxPrice = maxPrice ? parseInt(maxPrice) : null;
    
    filterAndRenderProducts();
}

function clearFilters() {
    // Clear search
    document.querySelectorAll('.search-input').forEach(input => input.value = '');
    
    // Clear checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    
    // Clear radio buttons (select "all" option)
    document.querySelector('input[name="condition"][value=""]').checked = true;
    
    // Clear price inputs
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    
    // Reset filters
    currentFilters = {
        search: '',
        categories: [],
        condition: '',
        minPrice: null,
        maxPrice: null
    };
    
    filterAndRenderProducts();
}

function filterAndRenderProducts() {
    filteredProducts = products.filter(product => {
        // Search filter with type
        if (currentFilters.search) {
            let searchMatch = false;
            
            switch (currentFilters.searchType) {
                case 'title':
                    searchMatch = product.title.toLowerCase().includes(currentFilters.search);
                    break;
                case 'description':
                    searchMatch = product.description.toLowerCase().includes(currentFilters.search);
                    break;
                case 'seller':
                    searchMatch = product.sellerName.toLowerCase().includes(currentFilters.search);
                    break;
                case 'all':
                default:
                    searchMatch = product.title.toLowerCase().includes(currentFilters.search) ||
                                product.description.toLowerCase().includes(currentFilters.search) ||
                                product.sellerName.toLowerCase().includes(currentFilters.search);
                    break;
            }
            
            if (!searchMatch) return false;
        }

        // Category filter
        if (currentFilters.categories.length > 0) {
            if (!currentFilters.categories.includes(product.category)) return false;
        }

        // Condition filter
        if (currentFilters.condition && product.condition !== currentFilters.condition) {
            return false;
        }

        // Price filter
        if (currentFilters.minPrice !== null && product.price < currentFilters.minPrice) {
            return false;
        }
        if (currentFilters.maxPrice !== null && product.price > currentFilters.maxPrice) {
            return false;
        }

        return true;
    });

    applySorting();
    renderProducts();
    updateResultsCount();
}

// Sorting functionality
function applySorting() {
    const sortSelect = document.getElementById('sort-select');
    currentSort = sortSelect.value;

    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'newest':
            default:
                return new Date(b.createdAt) - new Date(a.createdAt);
        }
    });

    renderProducts();
}

// Render products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');

    if (filteredProducts.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <img src="${product.images[0]}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <div class="product-meta">
                    <span class="condition-badge condition-${product.condition}">
                        ${getConditionLabel(product.condition)}
                    </span>
                    <span>${getLocationLabel(product.location)}</span>
                </div>
                <div class="product-footer">
                    <div class="seller-info">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" 
                             alt="Seller" class="seller-avatar">
                        <span class="seller-name">${product.sellerName}</span>
                    </div>
                    <button class="like-btn ${favorites.includes(product.id) ? 'liked' : ''}" onclick="toggleLike(event, ${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateResultsCount() {
    const count = document.getElementById('results-count');
    count.textContent = `Tìm thấy ${filteredProducts.length} sản phẩm`;
}

// Helper functions
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

function getConditionLabel(condition) {
    const labels = {
        'new': 'Như mới',
        'used': 'Đã sử dụng',
        'repair': 'Cần sửa chữa'
    };
    return labels[condition] || condition;
}

function getLocationLabel(location) {
    const labels = {
        'hanoi': 'Hà Nội',
        'hcm': 'TP.HCM',
        'danang': 'Đà Nẵng',
        'haiphong': 'Hải Phòng',
        'cantho': 'Cần Thơ'
    };
    return labels[location] || location;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Hôm nay';
    if (diffInDays === 1) return 'Hôm qua';
    if (diffInDays < 7) return `${diffInDays} ngày trước`;
    return date.toLocaleDateString('vi-VN');
}

// Like functionality
function toggleLike(event, productId) {
    event.stopPropagation();
    const button = event.currentTarget;
    
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        button.classList.remove('liked');
    } else {
        favorites.push(productId);
        button.classList.add('liked');
    }
    
    localStorage.setItem('cho_do_cu_favorites', JSON.stringify(favorites));
    updateFavoritesCount();
}

// Modal functionality
function showAddProductModal() {
    document.getElementById('add-product-modal').classList.add('show');
}

function hideAddProductModal() {
    document.getElementById('add-product-modal').classList.remove('show');
    document.getElementById('add-product-form').reset();
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-detail-modal');
    const content = document.getElementById('product-detail-content');

    content.innerHTML = `
        <div class="product-detail">
            <div>
                <img src="${product.images[0]}" alt="${product.title}" class="product-detail-image">
            </div>
            <div class="product-detail-info">
                <h1>${product.title}</h1>
                <p class="product-detail-price">${formatPrice(product.price)}</p>
                
                <div class="product-detail-meta">
                    <span class="condition-badge condition-${product.condition}">
                        ${getConditionLabel(product.condition)}
                    </span>
                    <span><i class="fas fa-map-marker-alt"></i> ${getLocationLabel(product.location)}</span>
                    <span><i class="fas fa-clock"></i> ${formatDate(product.createdAt)}</span>
                </div>
                
                <div class="seller-card">
                    <div class="seller-header">
                        <div class="seller-profile">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48" 
                                 alt="Seller">
                            <div>
                                <p style="font-weight: 500;">${product.sellerName}</p>
                                <small style="color: #6b7280;">Thành viên từ 2022</small>
                            </div>
                        </div>
                        <button class="btn btn-primary">
                            <i class="fas fa-comment"></i>
                            Nhắn tin
                        </button>
                    </div>
                </div>
                
                <div class="contact-actions">
                    <button class="btn btn-secondary btn-full">
                        <i class="fas fa-phone"></i>
                        Gọi điện: ${product.phone}
                    </button>
                    <button class="btn btn-ghost btn-full">
                        <i class="fas fa-heart"></i>
                        Lưu tin
                    </button>
                </div>
                
                <div class="product-description">
                    <h3>Mô tả sản phẩm</h3>
                    <p>${product.description}</p>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('show');
}

function hideProductDetailModal() {
    document.getElementById('product-detail-modal').classList.remove('show');
}

// Add product form
function handleAddProduct(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const newProduct = {
        id: products.length + 1,
        title: document.getElementById('product-title').value,
        description: document.getElementById('product-description').value,
        price: parseInt(document.getElementById('product-price').value),
        category: document.getElementById('product-category').value,
        condition: document.getElementById('product-condition').value,
        location: document.getElementById('product-location').value,
        phone: document.getElementById('seller-phone').value,
        email: document.getElementById('seller-email').value || null,
        sellerName: document.getElementById('seller-name').value,
        images: ["https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date().toISOString()
    };
    
    products.unshift(newProduct);
    filterAndRenderProducts();
    hideAddProductModal();
    
    // Show success message
    alert('Sản phẩm đã được đăng thành công!');
}

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
});

// Handle escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
        document.getElementById('user-dropdown').classList.remove('show');
    }
});

// User authentication functions
function showLoginModal() {
    document.getElementById('login-modal').classList.add('show');
}

function hideLoginModal() {
    document.getElementById('login-modal').classList.remove('show');
    document.getElementById('login-form').reset();
}

function showRegisterModal() {
    document.getElementById('register-modal').classList.add('show');
}

function hideRegisterModal() {
    document.getElementById('register-modal').classList.remove('show');
    document.getElementById('register-form').reset();
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Find user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        
        if (rememberMe) {
            localStorage.setItem('cho_do_cu_remembered_user', JSON.stringify(user));
        }
        
        updateUserInterface();
        hideLoginModal();
        alert('Đăng nhập thành công!');
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Validation
    if (username.length < 3) {
        alert('Tên đăng nhập phải có ít nhất 3 ký tự!');
        return;
    }
    
    if (password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự!');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    
    // Check if username exists
    if (users.find(u => u.username === username)) {
        alert('Tên đăng nhập đã tồn tại!');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('cho_do_cu_users', JSON.stringify(users));
    
    currentUser = newUser;
    updateUserInterface();
    hideRegisterModal();
    alert('Đăng ký thành công!');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('cho_do_cu_remembered_user');
    updateUserInterface();
    document.getElementById('user-dropdown').classList.remove('show');
    alert('Đã đăng xuất!');
}

function updateUserInterface() {
    const userDisplay = document.getElementById('user-display');
    const guestMenu = document.getElementById('guest-menu');
    const userMenuItems = document.getElementById('user-menu-items');
    
    if (currentUser) {
        userDisplay.textContent = currentUser.username;
        guestMenu.style.display = 'none';
        userMenuItems.style.display = 'block';
    } else {
        userDisplay.textContent = 'Đăng nhập';
        guestMenu.style.display = 'block';
        userMenuItems.style.display = 'none';
    }
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('show');
}

function updateFavoritesCount() {
    const countElement = document.getElementById('favorites-count');
    countElement.textContent = favorites.length;
    countElement.style.display = favorites.length > 0 ? 'inline' : 'none';
}

function showFavoritesModal() {
    const modal = document.getElementById('favorites-modal');
    const content = document.getElementById('favorites-content');
    
    if (favorites.length === 0) {
        content.innerHTML = `
            <div class="empty-favorites">
                <i class="fas fa-heart-broken"></i>
                <p>Chưa có sản phẩm yêu thích</p>
                <small>Nhấn vào icon trái tim trên sản phẩm để thêm vào danh sách yêu thích</small>
            </div>
        `;
    } else {
        const favoriteProducts = products.filter(p => favorites.includes(p.id));
        content.innerHTML = `
            <div class="favorites-grid">
                ${favoriteProducts.map(product => `
                    <div class="product-card" onclick="showProductDetail(${product.id})">
                        <img src="${product.images[0]}" alt="${product.title}" class="product-image">
                        <div class="product-info">
                            <h3 class="product-title">${product.title}</h3>
                            <p class="product-price">${formatPrice(product.price)}</p>
                            <div class="product-meta">
                                <span class="condition-badge condition-${product.condition}">
                                    ${getConditionLabel(product.condition)}
                                </span>
                                <span>${getLocationLabel(product.location)}</span>
                            </div>
                            <div class="product-footer">
                                <div class="seller-info">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" 
                                         alt="Seller" class="seller-avatar">
                                    <span class="seller-name">${product.sellerName}</span>
                                </div>
                                <button class="like-btn liked" onclick="toggleLike(event, ${product.id})">
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    modal.classList.add('show');
}

function hideFavoritesModal() {
    document.getElementById('favorites-modal').classList.remove('show');
}

function showMyProducts() {
    if (!currentUser) {
        alert('Vui lòng đăng nhập để xem tin đã đăng!');
        return;
    }
    
    // Filter products by current user (in a real app, you'd have user_id in products)
    const myProducts = products.filter(p => p.sellerName === currentUser.username);
    
    if (myProducts.length === 0) {
        alert('Bạn chưa đăng tin nào!');
    } else {
        alert(`Bạn đã đăng ${myProducts.length} tin!`);
        // Could show a modal with user's products
    }
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function checkPasswordStrength() {
    const password = document.getElementById('register-password').value;
    const strengthDiv = document.getElementById('password-strength');
    
    let strength = 0;
    let message = '';
    
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    
    switch (strength) {
        case 0:
        case 1:
            message = 'Mật khẩu yếu';
            strengthDiv.className = 'password-strength password-weak';
            break;
        case 2:
        case 3:
            message = 'Mật khẩu trung bình';
            strengthDiv.className = 'password-strength password-medium';
            break;
        case 4:
        case 5:
            message = 'Mật khẩu mạnh';
            strengthDiv.className = 'password-strength password-strong';
            break;
    }
    
    strengthDiv.textContent = password.length > 0 ? message : '';
}