document.addEventListener("DOMContentLoaded", function () {
  const productSwipers = document.querySelectorAll(".swiper");

  productSwipers.forEach(function (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
      // If we need pagination
      pagination: {
        el: swiperContainer.querySelector(".swiper-pagination"),
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: swiperContainer.querySelector(".swiper-button-next"),
        prevEl: swiperContainer.querySelector(".swiper-button-prev"),
      },

      // And if we need scrollbar
      scrollbar: {
        el: swiperContainer.querySelector(".swiper-scrollbar"),
      },
    });
  });
});
