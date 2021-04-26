// Tilt.js Library Initialization
(() => {
    try {
        if(window.innerWidth > 800) {
            VanillaTilt.init(document.querySelector(".tilt-element"), {
                max: 5,
                axis: 'x',
                speed: 200,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                transition: true
            });
        
            //It also supports NodeList
            VanillaTilt.init(document.querySelectorAll(".tilt-element"));
        }
    }
    catch(error) {
    }
})()