const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Brand Marketing", "Instagram Promotion", "Logo Promotion"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 100);
});

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   // direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

//   // Navigation arrows
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-button-prev',
//   // },
//   // // navigation:
//   // // {
//   // //   disabledClass: 'disabled_swiper_button'
//   // // },
//   // autoplay:{
//   //   delay:500
//   // },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });
const swiper = new Swiper(".swiper-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 500,
    disableOnInteraction: false
  },

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   dynamicBullets: false,
  //   clickable: true
  // },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // Responsive breakpoints
  breakpoints: {
    390:
    {
      slidesPerView:2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
      // background: linear-gradient(103 , #7600, #ffffff),
  // position: relative
    },
    1024: 
    {
      slidesPerView: 4,
      spaceBetween: 100
    }
  }
});
