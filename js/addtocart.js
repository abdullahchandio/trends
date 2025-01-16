document.addEventListener('DOMContentLoaded', () => {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartIcon = document.getElementById('cart-icon');
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalSidebar = document.getElementById('cart-total-sidebar');
  const subtotalDisplay = document.getElementById('subtotal');
  const shippingDisplay = document.getElementById('shipping');
  const totalPriceDisplay = document.getElementById('total-price-value');
  const noteTextArea = document.getElementById('note');

  let cart = [];
  let shippingCost = 50;

  // Open Sidebar
  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
  });

  // Close Sidebar
  closeSidebarBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
  });

  // Add to Cart Button
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      const productPrice = parseFloat(button.getAttribute('data-price'));
      const productImage = button.getAttribute('data-image');
      const productId = button.getAttribute('data-id');

      const existingProduct = cart.find(item => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1, image: productImage });
      }

      updateCart();
      cartSidebar.classList.add('open');
    });
  });

  // Update Cart
  function updateCart() {
    let total = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
      total += item.price * item.quantity;

      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="product-info">
          <h6>${item.name}</h6>
          <small>Price: Rs.${item.price}</small>
        </div>
        <div class="quantity-controls">
          <button class="decrease-btn">-</button>
          <span>${item.quantity}</span>
          <button class="increase-btn">+</button>
        </div>
        <button class="remove-btn">Remove</button>
        <small>Subtotal: Rs.${item.price * item.quantity}</small>
      `;

      cartItem.querySelector('.decrease-btn').addEventListener('click', () => {
        item.quantity -= 1;
        if (item.quantity === 0) {
          cart = cart.filter(cartItem => cartItem.id !== item.id);
        }
        updateCart();
      });

      cartItem.querySelector('.increase-btn').addEventListener('click', () => {
        item.quantity += 1;
        updateCart();
      });

      cartItem.querySelector('.remove-btn').addEventListener('click', () => {
        cart = cart.filter(cartItem => cartItem.id !== item.id);
        updateCart();
      });

      cartItemsContainer.appendChild(cartItem);
    });

    // Update Subtotal and Total Price
    subtotalDisplay.textContent = `Rs. ${total}`;
    shippingDisplay.textContent = `Rs. ${shippingCost}`;
    totalPriceDisplay.textContent = `Rs. ${total + shippingCost}`;

    cartTotalSidebar.textContent = `Rs.${total + shippingCost}`;
  }
});
