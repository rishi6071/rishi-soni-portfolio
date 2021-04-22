// Animate on Scroll Library Initialisation
(() => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        once: true,
        delay: 100,
        easing: "ease",
        duration: 1000,
        disable: function () {
            var maxWidth = 800;
            return window.innerWidth < maxWidth;
        }
    });
})()