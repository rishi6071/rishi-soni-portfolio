// Theme Script
(() => {
    const color_opt = document.querySelectorAll('.color_opt');
    color_opt[0].style.border = '2px solid #29b6f6';

    color_opt.forEach((color) => {
        color.addEventListener('click', (event) => {
            let theme = event.target.id;
            document.querySelector('html').setAttribute('data-theme', theme);
            document.querySelectorAll('.color_opt').forEach((colorOpt) => {
                colorOpt.style.border = 'none';
            });
            event.target.style.border = '2px solid #29b6f6';
        });
    });
})()