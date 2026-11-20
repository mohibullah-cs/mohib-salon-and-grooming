/* ==========================================
   MOHIB SALON & GROOMING
   Complete Website JavaScript
========================================== */


/* ==========================================
   1. MOBILE NAVIGATION
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    // Close menu when clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* ==========================================
   2. SMOOTH SCROLLING
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

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


/* ==========================================
   3. HEADER SCROLL EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (header) {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    }

}, { passive: true });


/* ==========================================
   4. BOOKING FORM VALIDATION
========================================== */

const bookingForm = document.querySelector("#booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name")?.value.trim();

        const phone = document.querySelector("#phone")?.value.trim();

        const service = document.querySelector("#service")?.value;

        const date = document.querySelector("#date")?.value;

        const time = document.querySelector("#time")?.value;

        if (!name || !phone || !service || !date || !time) {

            alert("Please complete all booking fields.");

            return;

        }

        const message = `
MOHIB SALON & GROOMING
New Appointment Request

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}

Please confirm my appointment.
        `;

        const whatsappNumber = bookingForm.dataset.whatsapp;

        if (!whatsappNumber) {

            alert("Booking details are ready, but WhatsApp booking needs to be configured.");

            return;

        }

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=` +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

}


/* ==========================================
   5. SCROLL REVEAL ANIMATIONS
========================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .gallery-item, .about-content, .section-title"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* ==========================================
   6. BACK TO TOP BUTTON
========================================== */

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


/* ==========================================
   7. DYNAMIC COPYRIGHT YEAR
========================================== */

const copyright = document.querySelector("#copyright-year");

if (copyright) {

    copyright.textContent = new Date().getFullYear();

}


/* ==========================================
   8. CONSOLE MESSAGE
========================================== */

console.log(
    "MOHIB SALON & GROOMING website loaded successfully."
);
