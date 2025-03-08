document.getElementById("menu-toggle")?.addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("hidden");
});

document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    const mailtoLink = `mailto:***update this to be email***?subject=New Inquiry from ${name}&body=${message}`;
    window.location.href = mailtoLink;
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && menuClose && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.remove("translate-x-full");
        });

        menuClose.addEventListener("click", function () {
            mobileMenu.classList.add("translate-x-full");
        });
    }
});

