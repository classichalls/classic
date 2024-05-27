// Initialize Swiper for home-slider
const homeSwiper = new Swiper('.home-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  // Initialize Swiper for review-slider
  const reviewSwiper = new Swiper('.review-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  