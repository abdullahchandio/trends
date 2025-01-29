// Initialize Swiper Slider
const heroSwiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Category
const swiper = new Swiper(".category-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // Mobile
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // Tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// Review Swiper
const reviewSwiper = new Swiper(".review-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
  },
});


// Initialize Thumbnail Swiper
const thumbnailSwiper = new Swiper(".thumbnail-swiper", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 10,
  watchSlidesProgress: true,
});

// Initialize Main Swiper
const mainSwiper = new Swiper(".main-swiper", {
  thumbs: {
    swiper: thumbnailSwiper,
  },
});



// navabr 
document.querySelectorAll('.dropdown-submenu').forEach((submenu) => {
  submenu.addEventListener('mouseenter', (e) => {
    const dropdownMenu = submenu.querySelector('.dropdown-menu');

    // Adjust position if needed
    const rect = dropdownMenu.getBoundingClientRect();
    if (rect.bottom > window.innerHeight) {
      dropdownMenu.style.top = '-2.5rem'; // Show above if overflowing
    } else {
      dropdownMenu.style.top = '0'; // Default position
    }
  });
});

