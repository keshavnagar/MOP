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

const h1 = document.querySelector(".webDevH1")
const p = document.querySelector("#webDevP")

h1.addEventListener("click",()=>{


    p.classList.toggle("webDevPtoggle")
    

})
