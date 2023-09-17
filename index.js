// alert("Thank you for visiting my website.");

  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
      link.addEventListener("click", scrollToSection);
    });
    
    function scrollToSection(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      }
    }
  });