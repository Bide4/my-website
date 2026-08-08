const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
}
