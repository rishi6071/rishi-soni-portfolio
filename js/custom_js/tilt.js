// Tilt.js Library Initialization
(() => {
    VanillaTilt.init(document.querySelector(".tilt-element"), {
        max: 5,
        speed: 200,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        transition: true
    });

    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".tilt-element"));
})()