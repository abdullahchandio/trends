document.addEventListener('DOMContentLoaded', function() {
    // Cart state
    let cartItems = [
        {
            id: '1',
            name: 'Zessi Dresses',
            price: 99.00,
            color: 'Yellow',
            size: 'L',
            quantity: 1,
            image: '../Assets/Productone.png'
        },
        {
            id: '2',
            name: 'Kirby T-Shirt',
            price: 89.00,
            color: 'Black',
            size: 'XS',
            quantity: 4,
            image: '../Assets/Producttwo.png'
        },
        {
            id: '3',
            name: 'Cableknit Shawl',
            price: 129.00,
            color: 'Green',
            size: 'L',
            quantity: 3,
            image: '../Assets/productthree.png'
        }
    ];

    // DOM Elements
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartToggle = document.getElementById('cart-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const subtotalElement = document.getElementById('subtotal');

    // Toggle cart sidebar
    cartToggle.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });

    closeSidebar.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && !cartToggle.contains(e.target)) {
            cartSidebar.classList.remove('open');
        }
    });

    // Render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cartItems.forEach(item => {
            subtotal += item.price * item.quantity;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <a href="#" class="cart-item-title">${item.name}</a>
                    <div class="cart-item-info">Color: ${item.color}</div>
                    <div class="cart-item-info">Size: ${item.size}</div>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <div class="quantity-control">
                            <button onclick="updateQuantity('${item.id}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)">+</button>
                        </div>
                        <div class="fw-bold">$${item.price.toFixed(2)}</div>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeItem('${item.id}')">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                        <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        cartCount.textContent = cartItems.length;
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Update quantity
    window.updateQuantity = function(id, change) {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(1, item.quantity + change);
            renderCart();
        }
    }

    // Remove item
    window.removeItem = function(id) {
        cartItems = cartItems.filter(item => item.id !== id);
        renderCart();
    }

    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.dataset.id;
            const existingItem = cartItems.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
            }

            renderCart();
            cartSidebar.classList.add('open');
        });
    });

    // Initial render
    renderCart();
});