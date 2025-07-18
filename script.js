document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navButtons = document.getElementById("nav-buttons");
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    navButtons.classList.toggle("show");
    openMenu.style.display = openMenu.style.display === "none" ? "inline-block" : "none";
    closeMenu.style.display = closeMenu.style.display === "none" ? "inline-block" : "none";
  });
});

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -320, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 320, behavior: 'smooth' });
});

function goToNextPage() {
  window.location.href = "/App/html/single-event.html";
}

  AOS.init({
    duration: 1000,
    once: true
  });

