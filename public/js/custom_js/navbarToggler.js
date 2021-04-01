// Animate on Scroll Library Initialisation
(() => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        once: true,
        delay: 100,
        easing: "ease",
        duration: 1000
    });
})()

// Open Humberger Menu
const openMenu = function (element) {
    document.getElementById('bar').style.display = "none";
    document.getElementById('cross').style.display = "block";
}

// Close Humberger Menu
const closeMenu = function (element) {
    document.getElementById('bar').style.display = "block";
    document.getElementById('cross').style.display = "none";
}