
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

}
