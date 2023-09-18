// ---------------------------------typing-script--------------------------------------------

var typed = new Typed("#element", {
  strings: [
    "UG Student",
    "Web Developer",
    "Competitive Progammer",
    "UG Student",
    "Web Developer",
    "Competitive Progammer",
  ],
  typeSpeed: 100,
});

// --------------------------------------------------------------------------------------------

// ----------------------------------mobile-menu------------------------------------------

const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navbarMenu = document.getElementById("navbarMenu");
mobileMenuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
});

// --------------------------------------------------------------------------------------------