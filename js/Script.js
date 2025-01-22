const swiper = new Swiper(".swiper", {
  loop: true,
});
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

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
      window.location.href = `/search.html?query=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search term.");
    }
  });
const mobileMenu = document.getElementById("mobileMenu");
const offcanvasInstance = new bootstrap.Offcanvas(mobileMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992 && mobileMenu.classList.contains("show")) {
    offcanvasInstance.hide();
  }
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
