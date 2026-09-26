/* =========================
   PORTFOLIO JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });


    /* =========================
       CLOSE MOBILE MENU
       AFTER CLICKING A LINK
    ========================= */

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const header =
                    document.querySelector(".header");

                const headerHeight =
                    header.offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            });

        });


    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    const elements =
        document.querySelectorAll(
            ".section-title, .skill-card, .project, " +
            ".achievement-card, .certificate, " +
            ".experience-card, .quote-box, " +
            ".timeline-item, .roadmap, .contact-box"
        );


    elements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    elements.forEach(function (element) {

        observer.observe(element);

    });


    /* =========================
       DOWNLOAD CV
    ========================= */

    const downloadCV =
        document.getElementById("downloadCV");


    downloadCV.addEventListener("click", function () {

        /*
         * Since the website has exactly
         * three files, this button uses
         * the browser print dialog.
         *
         * Choose:
         * Destination → Save as PDF
         *
         * Then save your portfolio/CV.
         */

        window.print();

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(function (item) {

            item.classList.remove("active");

            if (
                item.getAttribute("href") ===
                "#" + currentSection
            ) {

                item.classList.add("active");

            }

        });

    });

});
