/* =====================================
   MOHIB SALON & GROOMING
   Website JavaScript
===================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = nav.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

    });

    // Close menu after clicking a link

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            nav.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

        });

    });

    // Close menu when clicking outside

    document.addEventListener("click", function (event) {

        if (
            !nav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            nav.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

        }

    });

    // Close menu with Escape key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            nav.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

        }

    });

}


/* 2. SMOOTH SCROLLING */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 3. HEADER SCROLL EFFECT */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (header) {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    }

}, { passive: true });


/* 4. DYNAMIC COPYRIGHT YEAR */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* 5. BACK TO TOP SUPPORT */

const backToTop = document.querySelector("#back-to-top");

if (backToTop) {

    window.addEventListener("scroll", function () {

        backToTop.classList.toggle(
            "show",
            window.scrollY > 400
        );

    }, { passive: true });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* 6. WEBSITE LOADED */

console.log("Mohib Salon website loaded successfully!");
