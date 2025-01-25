
// Zoom functionality
const zoomModal = document.querySelector(".zoom-modal");
const zoomModalImg = zoomModal.querySelector("img");

document.querySelectorAll(".zoom-icon").forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const currentImg = icon.previousElementSibling;
    zoomModalImg.src = currentImg.src;
    zoomModal.style.display = "block";
  });
});

zoomModal.addEventListener("click", () => {
  zoomModal.style.display = "none";
});

// Size selection
document.querySelectorAll(".size-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const activeBtn = document.querySelector(".size-btn.active");
    if (activeBtn) activeBtn.classList.remove("active");
    btn.classList.add("active");
  });
});

// Quantity Handlers
const quantityHandler = () => {
  const quantityInput = document.getElementById("quantity");
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");

  const updateQuantity = (change) => {
    let value = parseInt(quantityInput.value) || 1;
    value = Math.max(1, value + change);
    quantityInput.value = value;
  };

  decreaseBtn.addEventListener("click", () => updateQuantity(-1));
  increaseBtn.addEventListener("click", () => updateQuantity(1));

  // Prevent manual input of non-numeric values
  quantityInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (!e.target.value || parseInt(e.target.value) < 1) {
      e.target.value = 1;
    }
  });
};
quantityHandler();

// test
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentIndex = 0;
  const cardWidth = 100 / (window.innerWidth >= 768 ? 2 : 1); // Show 2 cards on desktop, 1 on mobile

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    const maxIndex = cards.length - (window.innerWidth >= 768 ? 2 : 1);
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateSlider();
  });

  // Update cards shown on window resize
  window.addEventListener("resize", () => {
    const maxIndex = cards.length - (window.innerWidth >= 768 ? 2 : 1);
    currentIndex = Math.min(currentIndex, maxIndex);
    updateSlider();
  });
});
// custom - loader
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");

  // Check if logo image loads correctly
  logo.onload = () => {
    console.log("Logo loaded successfully.");
  };

  logo.onerror = () => {
    console.error("Failed to load logo. Please check the URL.");
  };

  // Simulate loading completion after 3 seconds (optional)
  setTimeout(() => {
    document.getElementById("loading-wrapper").style.display = "none";
  }, 3000);
});
