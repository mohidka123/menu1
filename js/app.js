        // Store user info in localStorage
        setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name);
            
            // Update UI
            updateProfileUI(true);
            
            // Close modal
            closeAuthModals();
            
            // Show success message
            showNotification('Account created successfully!');
        }, 1000);
        
        // Function to handle authentication
        function handleAuth() {
            // Authentication logic here
        }
        
        // Function to sign out user
        function signOut() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            
            // Update UI
            updateProfileUI(false);
        }
        
        // Function to update profile UI based on login state
        function updateProfileUI(isLoggedIn) {
            const profileName = document.querySelector('.profile-name');
            const profileEmail = document.querySelector('.profile-email');
            const profileAuthButtons = document.querySelector('.profile-auth-buttons');
            
            if (isLoggedIn) {
                const userName = localStorage.getItem('userName') || 'User';
                const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
                
                profileName.textContent = userName;
                profileEmail.textContent = userEmail;
                profileAuthButtons.style.display = 'none';
            }
        }

document.addEventListener('DOMContentLoaded', function() {
    // Show splash screen for 2 seconds
    setTimeout(() => {
        const splashScreen = document.getElementById('splashScreen');
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
            initializeApp();
        }, 500);
    }, 2000);
});

// Initialize the app
function initializeApp() {
    renderFoodItems();
    setupEventListeners();
    updateCartBadge();
    updateProfileDropdown();
}

// Food items data
const foodItems = [
    {
        id: 1,
        name: "Classic Burger",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce"
    },
    {
        id: 2,
        name: "Chicken Wings",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Crispy wings tossed in your choice of sauce"
    },
    {
        id: 3,
        name: "Margherita Pizza",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Fresh mozzarella, tomatoes, and basil on thin crust"
    },
    {
        id: 4,
        name: "Chicken Caesar Salad",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Grilled chicken breast with romaine lettuce, parmesan, and caesar dressing"
    },
    {
        id: 5,
        name: "Sushi Roll Combo",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "California roll, spicy tuna roll, and salmon avocado roll"
    },
    {
        id: 6,
        name: "Pasta Carbonara",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Creamy pasta with pancetta, egg, and parmesan cheese"
    },
    {
        id: 7,
        name: "Fish & Chips",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1579887829114-282131b81ae4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Golden fried cod with crispy chips and tartar sauce"
    },
    {
        id: 8,
        name: "Vegetable Stir Fry",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Fresh vegetables stir-fried in Asian sauce with steamed rice"
    },
    {
        id: 9,
        name: "Double Cheeseburger",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Two beef patties with double cheese, lettuce, and special sauce"
    },
    {
        id: 10,
        name: "Greek Salad",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Fresh cucumber, tomatoes, olives, and feta cheese with olive oil"
    },
    {
        id: 11,
        name: "Chicken Tikka Masala",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Grilled chicken in creamy curry sauce with basmati rice"
    },
    {
        id: 12,
        name: "BBQ Ribs",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        description: "Tender pork ribs with BBQ sauce and coleslaw"
    }
];

// Cart state
let cart = [];

// DOM Elements
const mainContent = document.querySelector('main');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

// Render food items in the grid
function renderFoodItems(items = foodItems) {
    const foodGrid = mainContent.querySelector('.grid');
    foodGrid.innerHTML = items.map(item => `
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:bg-gray-50 transition-colors">
            <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2 text-gray-800">${item.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${item.description}</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold text-gray-800">$${item.price.toFixed(2)}</span>
                    <button onclick="addToCart(${item.id})" 
                            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('') || '<p class="text-center text-gray-500 mt-8">No items found</p>';
}

// Setup event listeners
function setupEventListeners() {
    // Cart button
    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);

    // Profile button
    profileBtn.addEventListener('click', toggleProfileDropdown);
    document.addEventListener('click', (e) => {
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        searchFood(searchTerm);
    });
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('translate-x-full');
}

// Toggle profile dropdown
function toggleProfileDropdown(e) {
    e.stopPropagation();
    profileDropdown.classList.toggle('active');
}

// Add item to cart
function addToCart(itemId) {
    const item = foodItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
    updateCartBadge();
    showNotification(`Added ${item.name} to cart`);
}

// Update cart UI
function updateCart() {
    cartItems.innerHTML = cart.map(item => `
        <div class="flex items-center space-x-4">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-1">
                <h4 class="font-medium">${item.name}</h4>
                <div class="flex items-center space-x-2 mt-1">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" 
                            class="text-gray-500 hover:text-gray-700">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" 
                            class="text-gray-500 hover:text-gray-700">+</button>
                </div>
            </div>
            <div class="text-right">
                <p class="font-medium">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})" 
                        class="text-red-600 text-sm hover:text-red-700">Remove</button>
            </div>
        </div>
    `).join('') || '<p class="text-gray-500 text-center">Your cart is empty</p>';

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.querySelector('#cartSidebar .font-bold').textContent = `$${total.toFixed(2)}`;
}

// Update cart badge
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-badge').textContent = totalItems;
}

// Update item quantity in cart
function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId);
        return;
    }

    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        updateCart();
        updateCartBadge();
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    updateCartBadge();
}

// Handle checkout process
function handleCheckout() {
    // Validate cart
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }

    // Create order object
    const order = {
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderDate: new Date().toISOString(),
        status: 'pending'
    };

    // Simulate order processing
    showNotification('Processing your order...');
    
    setTimeout(() => {
        // Clear cart
        cart = [];
        updateCart();
        updateCartBadge();

        // Close cart sidebar
        toggleCart();

        // Show success message
        showNotification('Order placed successfully!');

        // Store order in localStorage (optional)
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }, 1500);
}

// Show notification (updated with better styling)
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg z-50 fade-in flex items-center';
    
    // Add icon based on message type
    if (message.includes('successfully')) {
        notification.innerHTML = `
            <i class="fas fa-check-circle text-green-400 mr-2"></i>
            <span>${message}</span>
        `;
    } else if (message.includes('error') || message.includes('empty') || message.includes('Please fill')) {
        notification.innerHTML = `
            <i class="fas fa-exclamation-circle text-red-400 mr-2"></i>
            <span>${message}</span>
        `;
    } else {
        notification.innerHTML = `
            <i class="fas fa-info-circle text-blue-400 mr-2"></i>
            <span>${message}</span>
        `;
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Delivery Modal Functions
function openDeliveryModal() {
    // Validate cart first
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }

    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        openLoginPromptModal();
        return;
    }
    
    document.getElementById('deliveryModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Pre-fill delivery form with user data if available
    if (user) {
        document.getElementById('deliveryName').value = user.name || '';
        document.getElementById('deliveryPhone').value = user.phone || '';
        document.getElementById('deliveryAddress').value = user.address || '';
    }
}

function closeDeliveryModal() {
    document.getElementById('deliveryModal').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Handle delivery form submission
function handleDeliverySubmit(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('deliveryName').value.trim();
    const phone = document.getElementById('deliveryPhone').value.trim();
    const address = document.getElementById('deliveryAddress').value.trim();
    const instructions = document.getElementById('deliveryInstructions').value.trim();

    // Create order object
    const order = {
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        delivery: {
            name,
            phone,
            address,
            instructions
        },
        orderDate: new Date().toISOString(),
        status: 'pending'
    };

    // Show processing message
    showNotification('Processing your order...');

    // Simulate order processing
    setTimeout(() => {
        // Clear cart
        cart = [];
        updateCart();
        updateCartBadge();

        // Close modals
        closeDeliveryModal();
        toggleCart();

        // Reset form
        document.getElementById('deliveryForm').reset();

        // Show success message
        showNotification('Order placed successfully! Your food is being prepared.');

        // Store order in localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }, 1500);
}

// Add click event listener to close modal when clicking outside
document.getElementById('deliveryModal').addEventListener('click', (e) => {
    if (e.target.id === 'deliveryModal') {
        closeDeliveryModal();
    }
});

// Search food items
function searchFood(searchTerm) {
    const filteredItems = foodItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    );
    
    renderFoodItems(filteredItems);
}

// Auth Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
    document.getElementById('profileDropdown').classList.remove('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function openSignupModal() {
    document.getElementById('signupModal').classList.remove('hidden');
    document.getElementById('profileDropdown').classList.remove('active');
    document.body.style.overflow = 'hidden';
}

function closeSignupModal() {
    document.getElementById('signupModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Login Prompt Modal Functions
function openLoginPromptModal() {
    document.getElementById('loginPromptModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLoginPromptModal() {
    document.getElementById('loginPromptModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function openLoginFromPrompt() {
    closeLoginPromptModal();
    openLoginModal();
}

function openSignupFromPrompt() {
    closeLoginPromptModal();
    openSignupModal();
}

// Modify handleLoginSubmit to handle checkout after login
function handleLoginSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulate login process
    const loginBtn = event.target.querySelector('button[type="submit"]');
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';

    setTimeout(() => {
        // Simulate successful login
        localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }));
        showNotification('Successfully logged in!');
        closeLoginModal();
        updateProfileDropdown();
        
        // Reset form and button
        event.target.reset();
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';

        // If there are items in cart, open delivery modal
        if (cart.length > 0) {
            openDeliveryModal();
        }
    }, 1500);
}

// Modify handleSignupSubmit to handle checkout after signup
function handleSignupSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    // Simulate signup process
    const signupBtn = event.target.querySelector('button[type="submit"]');
    signupBtn.disabled = true;
    signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';

    setTimeout(() => {
        // Simulate successful signup
        localStorage.setItem('user', JSON.stringify({ email, name }));
        showNotification('Account created successfully!');
        closeSignupModal();
        updateProfileDropdown();
        
        // Reset form and button
        event.target.reset();
        signupBtn.disabled = false;
        signupBtn.textContent = 'Create Account';

        // If there are items in cart, open delivery modal
        if (cart.length > 0) {
            openDeliveryModal();
        }
    }, 1500);
}

function updateProfileDropdown() {
    const user = JSON.parse(localStorage.getItem('user'));
    const profileDropdown = document.getElementById('profileDropdown');
    
    if (user) {
        profileDropdown.innerHTML = `
            <div class="p-4 border-b">
                <p class="font-medium text-gray-800">${user.name}</p>
                <p class="text-sm text-gray-500">${user.email}</p>
            </div>
            <div class="p-2">
                <button onclick="openProfileModal()" class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    My Profile
                </button>
                <button onclick="openOrderHistoryModal()" class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    Order History
                </button>
                <button onclick="handleLogout()" class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
                    Sign Out
                </button>
            </div>
        `;
    } else {
        profileDropdown.innerHTML = `
            <div class="p-4">
                <button onclick="openSignupModal()" class="w-full mb-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Sign Up
                </button>
                <button onclick="openLoginModal()" class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Login
                </button>
            </div>
        `;
    }
}

function handleLogout() {
    localStorage.removeItem('user');
    showNotification('Logged out successfully!');
    updateProfileDropdown();
}

// Call this on page load to set initial state
document.addEventListener('DOMContentLoaded', () => {
    updateProfileDropdown();
    // ... existing DOMContentLoaded code ...
});

// Profile Modal Functions
function openProfileModal() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('profileName').value = user.name || '';
        document.getElementById('profileEmail').value = user.email || '';
        document.getElementById('profilePhone').value = user.phone || '';
        document.getElementById('profileAddress').value = user.address || '';
    }
    
    document.getElementById('profileModal').classList.remove('hidden');
    document.getElementById('profileDropdown').classList.remove('active');
    document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function handleProfileUpdate(event) {
    event.preventDefault();
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const phone = document.getElementById('profilePhone').value;
    const address = document.getElementById('profileAddress').value;

    // Update user data
    const user = JSON.parse(localStorage.getItem('user'));
    const updatedUser = { ...user, name, email, phone, address };
    localStorage.setItem('user', JSON.stringify(updatedUser));

    // Show success message and update UI
    showNotification('Profile updated successfully!');
    closeProfileModal();
    updateProfileDropdown();
}

// Order History Modal Functions
function openOrderHistoryModal() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const orderHistoryContent = document.getElementById('orderHistoryContent');
    
    if (orders.length === 0) {
        orderHistoryContent.innerHTML = '<p class="text-center text-gray-500">No orders found</p>';
    } else {
        orderHistoryContent.innerHTML = orders.map((order, index) => `
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h3 class="font-medium">Order #${(index + 1).toString().padStart(4, '0')}</h3>
                        <p class="text-sm text-gray-500">${new Date(order.orderDate).toLocaleString()}</p>
                    </div>
                    <span class="px-2 py-1 text-sm rounded-full ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                    }">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                </div>
                <div class="space-y-2">
                    ${order.items.map(item => `
                        <div class="flex justify-between items-center text-sm">
                            <span>${item.name} × ${item.quantity}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="border-t mt-2 pt-2 flex justify-between items-center">
                    <span class="font-medium">Total</span>
                    <span class="font-bold">$${order.total.toFixed(2)}</span>
                </div>
                ${order.delivery ? `
                    <div class="mt-2 pt-2 border-t text-sm text-gray-600">
                        <p><span class="font-medium">Delivery to:</span> ${order.delivery.name}</p>
                        <p><span class="font-medium">Address:</span> ${order.delivery.address}</p>
                        ${order.delivery.instructions ? `
                            <p><span class="font-medium">Instructions:</span> ${order.delivery.instructions}</p>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `).join('');
    }
    
    document.getElementById('orderHistoryModal').classList.remove('hidden');
    document.getElementById('profileDropdown').classList.remove('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderHistoryModal() {
    document.getElementById('orderHistoryModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}