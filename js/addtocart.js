document.addEventListener('DOMContentLoaded', () => {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartIcon = document.getElementById('cart-icon');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const cartTotalSidebar = document.getElementById('cart-total-sidebar');
  
    let cart = [];
  
    // Open Sidebar
    cartIcon.addEventListener('click', () => {
      cartSidebar.classList.add('open');
    });
  
    // Close Sidebar
    closeSidebarBtn.addEventListener('click', () => {
      cartSidebar.classList.remove('open');
    });
  
    // Add to Cart Button
    document.querySelectorAll('.add-to-cart').forEach((button) => {
      button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));
  
        const existingProduct = cart.find((item) => item.name === productName);
  
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({ name: productName, price: productPrice, quantity: 1 });
        }
  
        updateCart();
      });
    });
  
    // Update Cart
    function updateCart() {
      let total = 0;
      cartItemsContainer.innerHTML = '';
  
      cart.forEach((item) => {
        total += item.price * item.quantity;
  
        const cartItem = document.createElement('div');
        cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-3');
        cartItem.innerHTML = `
          <div>
            <h6>${item.name}</h6>
            <small>Price: Rs.${item.price}</small>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn btn-sm btn-outline-secondary me-2 decrease-btn">-</button>
            <span>${item.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary ms-2 increase-btn">+</button>
          </div>
          <small>Subtotal: Rs.${item.price * item.quantity}</small>
        `;
  
        cartItem.querySelector('.decrease-btn').addEventListener('click', () => {
          item.quantity -= 1;
          if (item.quantity === 0) {
            cart = cart.filter((cartItem) => cartItem.name !== item.name);
          }
          updateCart();
        });
  
        cartItem.querySelector('.increase-btn').addEventListener('click', () => {
          item.quantity += 1;
          updateCart();
        });
  
        cartItemsContainer.appendChild(cartItem);
      });
  
      cartTotalDisplay.textContent = `Rs.${total}`;
      cartTotalSidebar.textContent = `Rs.${total}`;
    }
  });

  