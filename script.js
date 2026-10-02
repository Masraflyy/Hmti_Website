// ============================================
// MOBILE MENU
// ============================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ============================================
// CLOSE MENU AFTER CLICK
// ============================================

const navLinks = document.querySelectorAll(".nav-link, .nav-contact");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ============================================
// NAVBAR SHADOW WHEN SCROLLING
// ============================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.filter =
            "drop-shadow(0 10px 20px rgba(80,60,150,0.15))";

    } else {

        navbar.style.filter = "none";

    }

});


// ============================================
// ACTIVE MENU
// ============================================

const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    menuItems.forEach(function (item) {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + current) {

            item.classList.add("active");

        }

    });

});