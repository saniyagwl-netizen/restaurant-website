document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // Offer Popup
  // ==========================
  const offerBtn = document.getElementById("offerBtn");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  if (offerBtn && popup && closeBtn) {

    offerBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });

  }

  // ==========================
  // Smooth Scroll Navigation
  // ==========================
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});