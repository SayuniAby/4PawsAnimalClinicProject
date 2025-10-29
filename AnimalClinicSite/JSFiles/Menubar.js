document.addEventListener("DOMContentLoaded", function() {
        const menuIcon = document.querySelector(".menu-icon");
        const closeIcon = document.querySelector(".close-icon");
        const navLinks = document.querySelector(".nav-links");

        menuIcon.addEventListener("click", function() {
            navLinks.classList.add("active");
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        });

        closeIcon.addEventListener("click", function() {
            navLinks.classList.remove("active");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        });

        // **Handle screen resizing**
        window.addEventListener("resize", function() {
            if (window.innerWidth >  1500) { // If screen is bigger than mobile
                navLinks.classList.remove("active"); // Close sidebar
                menuIcon.style.display = "none"; // Hide menu icon
                closeIcon.style.display = "none"; // Hide close icon
            } else {
                menuIcon.style.display = "block"; // Show menu icon for small screens
            }
        });
    });