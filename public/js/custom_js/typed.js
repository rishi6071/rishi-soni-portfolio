// typed.js for Typing Some Context letter by letter
(() => {
    try {
        var typed = new Typed('#my_name_box', {
            strings: [, `Hello World! This is <span>Rishi Soni</span>`, `I am a <span>Frontend Web Developer</span>`, `I am an <span>RPA Developer</span>`],
            startDelay: 800,
            backSpeed: 20,
            backDelay: 1500,
            loop: true,
            typeSpeed: 40,
            showCursor: false,
            oncomplete() {
                typedInstance.cursor.remove();
            }
        });
    }
    catch (error) {
        document.querySelector('#my_name_box').innerHTML = `This is <span>Rishi Soni</span>`;
    }
})()