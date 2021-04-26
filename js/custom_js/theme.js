// Theme Script
const themeCheck = () => {
    if (localStorage.getItem('theme') === undefined || localStorage.getItem('theme') === null)
        localStorage.setItem('theme', 'darkblue');

    document.querySelector('html').setAttribute('data-theme', localStorage.getItem('theme'));
    const color_opt = document.querySelectorAll('.color_opt');

    color_opt.forEach((color) => {
        color.addEventListener('click', (event) => {
            let theme = event.target.id;
            localStorage.setItem('theme', theme);
            document.querySelector('html').setAttribute('data-theme', localStorage.getItem('theme'));
            document.querySelectorAll('.color_opt').forEach((colorOpt) => colorOpt.style.border = 'none');
            event.target.style.border = '2px solid #29b6f6';
        });
    });
}