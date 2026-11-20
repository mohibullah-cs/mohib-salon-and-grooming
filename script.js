// ==========================================
// MOHIB SALON - JAVASCRIPT
// ==========================================

// 1. Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active");
    });
}

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
        menuToggle?.classList.remove("active");
    });
});


// 2. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 3. Booking Form
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
Hello Mohib Salon!

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}

Please confirm my appointment.
        `;

        const whatsappURL =
            "https://wa.me/923400559956?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

        bookingForm.reset();
    });
}


// 4. Scroll Reveal Animation
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


// 5. Header Scroll Effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
    }
});


// 6. Dynamic Copyright Year
const copyright = document.querySelector("#copyright-year");

if (copyright) {
    copyright.textContent = new Date().getFullYear();
}


// 7. Back to Top Button
const backToTop = document.querySelector("#back-to-top");

if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("show", window.scrollY > 400);
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

console.log("Mohib Salon website JavaScript loaded successfully!");
