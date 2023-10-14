document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});


