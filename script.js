document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle logic
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navButtons = document.getElementById("nav-buttons");
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");

  if (menuToggle && navLinks && navButtons && openMenu && closeMenu) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      navButtons.classList.toggle("show");
      openMenu.style.display = openMenu.style.display === "none" ? "inline-block" : "none";
      closeMenu.style.display = closeMenu.style.display === "none" ? "inline-block" : "none";
    });
  }

  // Carousel buttons
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (carousel && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -320, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // FAQ Accordion
  const faqCards = document.querySelectorAll(".fqa-card");

  faqCards.forEach(card => {
    const title = card.querySelector(".fqa-title");
    const answer = card.querySelector(".answer");
    const plusIcon = card.querySelector(".plus-icon");
    const minusIcon = card.querySelector(".minus-icon");

    if (!title || !answer || !plusIcon || !minusIcon) return;

    title.addEventListener("click", () => {
      const isOpen = answer.classList.contains("open");

      // Close all others
      faqCards.forEach(otherCard => {
        const otherAnswer = otherCard.querySelector(".answer");
        const otherPlus = otherCard.querySelector(".plus-icon");
        const otherMinus = otherCard.querySelector(".minus-icon");

        if (!otherAnswer || !otherPlus || !otherMinus) return;

        otherAnswer.classList.remove("open");
        otherPlus.style.display = "inline";
        otherMinus.style.display = "none";
        otherPlus.classList.remove("rotate");
        otherMinus.classList.remove("rotate");
      });

      if (!isOpen) {
        answer.classList.add("open");
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline";
        minusIcon.classList.add("rotate");
      }
    });
  });
});

// Navigation function (this one can stay outside)
function goToNextPage() {
  window.location.href = "./html/event.html";
}
