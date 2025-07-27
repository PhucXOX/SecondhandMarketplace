// Sample product data với giá cả hợp lý cho thị trường Việt Nam
let products = [
    {
        id: 1,
        title: "Máy ảnh Canon EOS 700D kèm lens 18-55mm",
        description: "Máy ảnh Canon EOS 700D trong tình trạng rất tốt, sử dụng ít. Bao gồm thân máy, lens kit 18-55mm, sạc pin chính hãng, thẻ nhớ 32GB và hộp phụ kiện đầy đủ. Máy chụp ảnh sắc nét, phù hợp cho người mới học nhiếp ảnh.",
        price: 6500,
        category: "electronics",
        condition: "used",
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
        description: "Áo khoác jean Levi's vintage authentic, màu xanh đậm, size M. Chất liệu denim cao cấp, thiết kế cổ điển, phù hợp cho cả nam và nữ. Tình trạng còn rất đẹp, không bị phai màu.",
        price: 180,
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
        description: "Bộ sách văn học Việt Nam gồm 10 cuốn của các tác giả nổi tiếng như Nguyễn Du, Nam Cao, Tô Hoài. Sách trong tình trạng tốt, không rách hay ố vàng. Phù hợp cho học sinh, sinh viên và người yêu văn học.",
        price: 120,
        category: "books",
        condition: "used",
        location: "danang",
        phone: "0903456789",
        email: null,
        sellerName: "Hoàng Văn C",
        images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-13').toISOString()
    },
    {
        id: 4,
        title: "iPhone 12 128GB Blue",
        description: "iPhone 12 màu xanh dương, bộ nhớ 128GB. Máy sử dụng cẩn thận, pin còn tốt 88%, không có vết xước. Còn hộp và sạc Lightning. Bảo hành đã hết nhưng máy hoạt động hoàn hảo.",
        price: 12500,
        category: "electronics",
        condition: "used",
        location: "hanoi",
        phone: "0904567890",
        email: null,
        sellerName: "Linh Nguyễn D",
        images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-12').toISOString()
    },
    {
        id: 5,
        title: "Laptop Dell Inspiron 3511 i5",
        description: "Laptop Dell Inspiron 3511, CPU Intel Core i5-1135G7, RAM 8GB, SSD 256GB. Máy sử dụng nhẹ nhàng, chủ yếu văn phòng và học tập. Còn bảo hành 6 tháng, đầy đủ hộp và phụ kiện.",
        price: 11000,
        category: "electronics",
        condition: "new",
        location: "hcm",
        phone: "0905678901",
        email: "tran.b@email.com",
        sellerName: "Trần Minh B",
        images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-11').toISOString()
    },
    {
        id: 6,
        title: "Xe đạp đua Giant Contend 3",
        description: "Xe đạp đua Giant Contend 3, size 54cm phù hợp người cao 165-175cm. Khung nhôm nhẹ, group Claris 16 tốc độ. Xe ít sử dụng, bảo dưỡng định kỳ, các bộ phận hoạt động mượt mà.",
        price: 2800,
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
        description: "Bàn làm việc gỗ sồi tự nhiên, kích thước 120x60x75cm. Thiết kế hiện đại, có 2 ngăn kéo tiện lợi. Bề mặt được sơn PU chống thấm nước, chống xước. Chân bàn chắc chắn, có thể chịu tải trọng lớn.",
        price: 1500,
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
        description: "Guitar Acoustic Yamaha F310, màu gỗ tự nhiên. Đàn trong tình trạng tốt, âm thanh trong trẻo, phù hợp cho người mới học. Kèm theo bao đàn, phím gảy và capo.",
        price: 450,
        category: "home",
        condition: "used",
        location: "hanoi",
        phone: "0908901234",
        email: null,
        sellerName: "Đặng Văn F",
        images: ["https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-08').toISOString()
    },
    {
        id: 9,
        title: "Váy công sở Zara size S",
        description: "Váy công sở thương hiệu Zara, size S, màu đen thanh lịch. Chất liệu polyester cao cấp, thiết kế đơn giản nhưng sang trọng. Mặc 2-3 lần, giặt khô, tình trạng như mới.",
        price: 250,
        category: "fashion",
        condition: "new",
        location: "hcm",
        phone: "0909012345",
        email: "le.d@email.com",
        sellerName: "Lê Thị D",
        images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"],
        createdAt: new Date('2024-01-07').toISOString()
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

function setPriceRange(min, max) {
    document.getElementById('min-price').value = min || '';
    document.getElementById('max-price').value = max || '';
    applyPriceFilter();
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

        // Price filter (converted to thousands)
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

// Helper functions
function formatPrice(price) {
    if (price >= 1000) {
        const millions = Math.floor(price / 1000);
        const thousands = price % 1000;
        if (thousands === 0) {
            return `${millions}tr`;
        } else {
            return `${millions}.${Math.floor(thousands / 100)}tr`;
        }
    } else {
        return `${price}k`;
    }
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

function updateResultsCount() {
    const count = filteredProducts.length;
    document.getElementById('results-count').textContent = `Tìm thấy ${count} sản phẩm`;
}

// Product detail modal
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-detail-modal');
    const content = document.getElementById('modal-product-content');
    
    content.innerHTML = `
        <div class="product-detail">
            <div>
                <img src="${product.images[0]}" alt="${product.title}" class="product-detail-image">
            </div>
            <div class="product-detail-info">
                <h3>${product.title}</h3>
                <p class="product-detail-price">${formatPrice(product.price)}</p>
                
                <div class="product-detail-meta">
                    <strong>Danh mục:</strong> ${getCategoryLabel(product.category)}<br>
                    <strong>Tình trạng:</strong> ${getConditionLabel(product.condition)}<br>
                    <strong>Địa điểm:</strong> ${getLocationLabel(product.location)}<br>
                    <strong>Ngày đăng:</strong> ${formatDate(product.createdAt)}
                </div>
                
                <div class="product-detail-description">
                    <h4>Mô tả chi tiết</h4>
                    <p>${product.description}</p>
                </div>
                
                <div class="product-detail-seller">
                    <h4>Thông tin người bán</h4>
                    <div class="seller-contact">
                        <span><i class="fas fa-user"></i> ${product.sellerName}</span>
                        <span><i class="fas fa-phone"></i> ${product.phone}</span>
                        ${product.email ? `<span><i class="fas fa-envelope"></i> ${product.email}</span>` : ''}
                    </div>
                </div>
                
                <div style="margin-top: 1rem;">
                    <button class="btn btn-primary" onclick="contactSeller(${product.id})">
                        <i class="fas fa-phone"></i>
                        Liên hệ người bán
                    </button>
                    <button class="btn btn-ghost ${favorites.includes(product.id) ? 'liked' : ''}" onclick="toggleLike(event, ${product.id})">
                        <i class="fas fa-heart"></i>
                        ${favorites.includes(product.id) ? 'Đã yêu thích' : 'Yêu thích'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    showModal('product-detail-modal');
}

function getCategoryLabel(category) {
    const labels = {
        'electronics': 'Điện tử',
        'fashion': 'Thời trang',
        'home': 'Gia dụng',
        'books': 'Sách & Đĩa',
        'vehicles': 'Xe cộ'
    };
    return labels[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

function contactSeller(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.phone) {
        window.open(`tel:${product.phone}`, '_self');
    } else if (product.email) {
        window.open(`mailto:${product.email}`, '_self');
    }
}

// Favorites functionality
function toggleLike(event, productId) {
    event.stopPropagation();
    
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    localStorage.setItem('cho_do_cu_favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderProducts(); // Re-render to update like buttons
    
    // Update product detail modal if open
    const modal = document.getElementById('product-detail-modal');
    if (modal.classList.contains('show')) {
        showProductDetail(productId);
    }
}

function updateFavoritesCount() {
    document.getElementById('favorites-count').textContent = favorites.length;
}

function showFavoritesModal() {
    const modal = document.getElementById('favorites-modal');
    const content = document.getElementById('favorites-content');
    
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    
    if (favoriteProducts.length === 0) {
        content.innerHTML = `
            <div class="no-results">
                <p>Chưa có sản phẩm yêu thích nào</p>
                <small>Nhấn vào biểu tượng trái tim để thêm sản phẩm vào danh sách yêu thích</small>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="products-grid">
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
    
    showModal('favorites-modal');
}

// Add product functionality
function showAddProductModal() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    showModal('add-product-modal');
}

// Image upload functionality
let selectedImages = [];

function handleImageUpload(event) {
    const files = Array.from(event.target.files);
    const maxFiles = 5;
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (selectedImages.length + files.length > maxFiles) {
        alert(`Chỉ được chọn tối đa ${maxFiles} ảnh`);
        return;
    }
    
    files.forEach(file => {
        if (file.size > maxSize) {
            alert(`File ${file.name} quá lớn. Vui lòng chọn ảnh nhỏ hơn 5MB`);
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            alert(`File ${file.name} không phải là ảnh hợp lệ`);
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            selectedImages.push({
                file: file,
                url: e.target.result,
                name: file.name
            });
            updateImagePreview();
        };
        reader.readAsDataURL(file);
    });
}

function updateImagePreview() {
    const preview = document.getElementById('image-preview');
    preview.innerHTML = selectedImages.map((image, index) => `
        <div class="image-preview-item">
            <img src="${image.url}" alt="${image.name}">
            <button type="button" class="image-preview-remove" onclick="removeImage(${index})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

function removeImage(index) {
    selectedImages.splice(index, 1);
    updateImagePreview();
}

function handleAddProduct(event) {
    event.preventDefault();
    
    if (!currentUser) {
        alert('Vui lòng đăng nhập để đăng tin');
        return;
    }
    
    if (selectedImages.length === 0) {
        alert('Vui lòng chọn ít nhất 1 ảnh sản phẩm');
        return;
    }
    
    const form = event.target;
    
    // Convert selected images to URLs (in real app, these would be uploaded to server)
    const imageUrls = selectedImages.map(img => img.url);
    
    const newProduct = {
        id: Date.now(),
        title: document.getElementById('product-title').value,
        description: document.getElementById('product-description').value,
        price: parseInt(document.getElementById('product-price').value),
        category: document.getElementById('product-category').value,
        condition: document.getElementById('product-condition').value,
        location: document.getElementById('product-location').value,
        phone: document.getElementById('seller-phone').value,
        email: document.getElementById('seller-email').value || null,
        sellerName: currentUser.username,
        images: imageUrls,
        createdAt: new Date().toISOString()
    };
    
    products.unshift(newProduct);
    filterAndRenderProducts();
    closeModal('add-product-modal');
    form.reset();
    selectedImages = [];
    updateImagePreview();
    
    alert('Đăng tin thành công!');
}

// User authentication
function showLoginModal() {
    showModal('login-modal');
}

function showRegisterModal() {
    showModal('register-modal');
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const remember = document.getElementById('remember-login').checked;
    
    // Simple authentication (in real app, this would be server-side)
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = { username: user.username, email: user.email };
        
        if (remember) {
            localStorage.setItem('cho_do_cu_remembered_user', JSON.stringify(currentUser));
        }
        
        updateUserInterface();
        closeModal('login-modal');
        document.getElementById('login-form').reset();
        
        alert(`Xin chào ${user.username}!`);
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Validation
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp');
        return;
    }
    
    if (users.find(u => u.username === username)) {
        alert('Tên đăng nhập đã tồn tại');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        alert('Email đã được sử dụng');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        username,
        email,
        password, // In real app, this would be hashed
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('cho_do_cu_users', JSON.stringify(users));
    
    currentUser = { username, email };
    updateUserInterface();
    closeModal('register-modal');
    document.getElementById('register-form').reset();
    
    alert(`Đăng ký thành công! Xin chào ${username}!`);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('cho_do_cu_remembered_user');
    updateUserInterface();
    alert('Đã đăng xuất thành công!');
}

function updateUserInterface() {
    const userBtn = document.getElementById('user-btn');
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

function showMyProducts() {
    if (!currentUser) return;
    
    const userProducts = products.filter(p => p.sellerName === currentUser.username);
    
    if (userProducts.length === 0) {
        alert('Bạn chưa đăng tin nào');
        return;
    }
    
    // Filter to show only user's products
    filteredProducts = userProducts;
    renderProducts();
    updateResultsCount();
    
    // Scroll to products section
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

// Password strength checker
function checkPasswordStrength() {
    const password = document.getElementById('register-password').value;
    const strengthDiv = document.getElementById('password-strength');
    
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^A-Za-z0-9]/)) strength++;
    
    if (strength < 2) {
        strengthDiv.textContent = 'Mật khẩu yếu';
        strengthDiv.className = 'password-strength weak';
    } else if (strength < 4) {
        strengthDiv.textContent = 'Mật khẩu trung bình';
        strengthDiv.className = 'password-strength medium';
    } else {
        strengthDiv.textContent = 'Mật khẩu mạnh';
        strengthDiv.className = 'password-strength strong';
    }
}

// Modal functionality
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
            openModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadFavorites();
    updateFavoritesCount();
    renderProducts();
    
    // Set up image upload handler
    const imageInput = document.getElementById('product-images');
    if (imageInput) {
        imageInput.addEventListener('change', handleImageUpload);
    }
});
