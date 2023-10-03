"use strict";

// Initialize swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// Scroll-down button

const scrollDownBtn = document.querySelector(".scroll-down");
const scrollToSection = document.querySelector(".scroll-to-section");

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true)
      scrollDownBtn.classList.remove("scroll-down-active");
  },
  { threshold: [1] }
);

observer.observe(scrollDownBtn);

scrollDownBtn.addEventListener("click", function () {
  scrollDownBtn.classList.add("scroll-down-active");
  scrollToSection.scrollIntoView();
});
