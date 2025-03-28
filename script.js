let nav = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger");
function toggleMenu() {
  nav.classList.toggle("responsive-nav");
  hamburger.classList.toggle("hamburgerToggle");
}

// chalo gayab karet hai is indicator ko

const scrollIndicator = document.querySelector("#scroll-indicator");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollIndicator.classList.add("hidden");
  } else {
    scrollIndicator.classList.remove("hidden");
  }
});

// ab apan ek work karte hai ki jo about me me apan ne heading likhi hai unpe click karu to property hide and apply honi chaiye

const p1 = document.querySelector("#webDevP");
const div = document.querySelector(".web-dev");
p1.style.display = "none";
div.addEventListener("mouseover", () => {
  p1.style.display = "block";
});

div.addEventListener("mouseout", () => {
  p1.style.display = "none";
});

const p2 = document.querySelector("#p2");
const div2 = document.querySelector(".ncc");

p2.style.display = "none";
div2.addEventListener("mouseover", () => {
  p2.style.display = "block";
});

div2.addEventListener("mouseout", () => {
  p2.style.display = "none";
});

const p3 = document.querySelector("#p3");
const div3 = document.querySelector(".ai");

p3.style.display = "none";
div3.addEventListener("mouseover", () => {
  p3.style.display = "block";
});

div3.addEventListener("mouseout", () => {
  p3.style.display = "none";
});

const p4 = document.querySelector("#p4");
const div4 = document.querySelector(".active");

p4.style.display = "none";
div4.addEventListener("mouseover", () => {
  p4.style.display = "block";
});

div4.addEventListener("mouseout", () => {
  p4.style.display = "none";
});
