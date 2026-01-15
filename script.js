const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1
});


const hero = document.querySelector(".hero");
const title = document.querySelector(".hero-title");

hero.addEventListener("mousemove", (e) => {
  const { width, height } = hero.getBoundingClientRect();
  const x = (e.clientX / width - 0.5) * 30;
  const y = (e.clientY / height - 0.5) * 30;

  title.style.transform = `
    translateX(-50%)
    translate(${x}px, ${y}px)
  `;
});

hero.addEventListener("mouseleave", () => {
  title.style.transform = "translateX(-50%) translate(0,0)";
});


// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true
// });

// const navbar = document.querySelector(".navbar");

// scroll.on("scroll", (obj) => {
//   if (obj.scroll.y > 80) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });


let lastScrollY = 0;

scroll.on("scroll", (obj) => {
  const currentScroll = obj.scroll.y;

  if (currentScroll > lastScrollY && currentScroll > 200) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScrollY = currentScroll;
});




const practiceSection = document.querySelector(".practice-section");
const blob = document.querySelector(".blob-wrapper");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
let isActive = false;

// Activate only when mouse enters section
practiceSection.addEventListener("mouseenter", () => {
  isActive = true;
});

practiceSection.addEventListener("mouseleave", () => {
  isActive = false;
  mouseX = 0;
  mouseY = 0;
});

// Mouse move relative to section
practiceSection.addEventListener("mousemove", (e) => {
  const rect = practiceSection.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  mouseX = (e.clientX - centerX) * 0.25;
  mouseY = (e.clientY - centerY) * 0.25;
});

// Smooth animation loop
function animateBlob() {
  if (isActive) {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
  } else {
    currentX += (0 - currentX) * 0.06;
    currentY += (0 - currentY) * 0.06;
  }

  blob.style.transform = `
    translate(-50%, -50%)
    translate(${currentX}px, ${currentY}px)
  `;

  requestAnimationFrame(animateBlob);
}

animateBlob();


