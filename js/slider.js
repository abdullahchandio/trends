// Initialize Hero Slider
const heroSwiper = new Swiper('.hero-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


// Initialize Product Slider
const productSwiper = new Swiper('.product-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        }
    }
});


// Initialize category Slider
const swiper = new Swiper('.category-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // Mobile
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // Tablet
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});


  