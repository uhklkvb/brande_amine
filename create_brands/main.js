const menuBtn = document.getElementById("menu__btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn?.querySelector("i");

if (menuBtn && navLinks && menuBtnIcon) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
    });

    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.className = "ri-menu-line";
    });
} else {
    console.warn("Menu elements not found in DOM.");
}

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

// Use the global ScrollReveal (capital S) if available
let sr = null;
if (typeof ScrollReveal === "function") {
    sr = ScrollReveal();

    sr.reveal(".header__image img", {
        ...scrollRevealOption,
        origin: "right",
    });

    sr.reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 500,
    });

    sr.reveal(".header__content p", {
        ...scrollRevealOption,
        delay: 1000,
    });

    sr.reveal(".header__btns", {
        ...scrollRevealOption,
        delay: 1500,
    });
} else {
    console.warn("ScrollReveal library not loaded.");
}


const banner = document.querySelector(".banner__container");

// Safely duplicate only the original children (guard if banner is missing)
if (banner) {
    const originals = Array.from(banner.children); // snapshot of originals
    originals.forEach(item => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", "true");
        banner.appendChild(duplicateNode);
    });
} else {
    console.warn("Banner container not found.");
}


// Reveal arrival cards only if ScrollReveal initialized
if (sr) {
    sr.reveal(".arrival__card", {
        ...scrollRevealOption,
        interval: 500,
    });
}