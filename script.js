/* =====================================================
   AOS INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 900,
            once: true,
            offset: 80
        });

    }

});

/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        hamburger.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");
            hamburger.classList.remove("active");

        });

    });

}

/* =====================================================
   TYPED HERO TEXT
===================================================== */

const typedElement = document.getElementById("element");

if (typedElement && typeof Typed !== "undefined") {

    new Typed("#element", {

        strings: [
            "Web Developer",
            "UI-UX Designer",
            "Frontend Developer",
            "Creative Designer"
        ],

        typeSpeed: 70,
        backSpeed: 45,
        backDelay: 1400,
        loop: true

    });

}

/* =====================================================
   READ MORE / READ LESS
===================================================== */

function toggleReadMore() {

    const extraContent =
        document.getElementById("aboutExtra");

    const text =
        document.getElementById("readMoreText");

    const icon =
        document.getElementById("readMoreIcon");

    if (!extraContent) {
        return;
    }

    extraContent.classList.toggle("show");

    if (extraContent.classList.contains("show")) {

        if (text) {
            text.textContent = "Read Less";
        }

        if (icon) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        }

    } else {

        if (text) {
            text.textContent = "Read More";
        }

        if (icon) {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }

    }

}

/* =====================================================
   WEB PROJECT FILTER
===================================================== */

const webFilterButtons =
    document.querySelectorAll(".filter-btn");

const webProjectCards =
    document.querySelectorAll(".web-project-card");

if (webFilterButtons.length > 0) {

    webFilterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.getAttribute("data-filter");

            webFilterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            webProjectCards.forEach(function (card) {

                const categories =
                    card.getAttribute("data-category") || "";

                if (
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter)
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

            if (typeof AOS !== "undefined") {
                AOS.refresh();
            }

        });

    });

}

/* =====================================================
   CREATIVE PROJECT FILTER
===================================================== */

const creativeFilterButtons =
    document.querySelectorAll(".creative-filter-btn");

const creativeCards =
    document.querySelectorAll(".creative-card");

if (creativeFilterButtons.length > 0) {

    creativeFilterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter =
                button.getAttribute("data-filter");

            creativeFilterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            creativeCards.forEach(function (card) {

                const categories =
                    card.getAttribute("data-category") || "";

                if (
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter)
                ) {

                    card.style.display = "inline-block";

                } else {

                    card.style.display = "none";

                }

            });

            if (typeof AOS !== "undefined") {
                AOS.refresh();
            }

        });

    });

}

/* =====================================================
   ACTIVE NAVIGATION ON SCROLL
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === "#" + currentSection ||
            href === "index.html#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});

/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn(
            "Image could not be loaded:",
            image.src
        );

    });

});

/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    new Date().getFullYear();

document.querySelectorAll(".footer-bottom p")
    .forEach(function (footerText) {

        footerText.innerHTML =
            footerText.innerHTML.replace(
                /©\s*\d{4}/,
                "© " + currentYear
            );

    });

