// --> Preloader of the Page
setTimeout(function () {
    $('.loading').fadeToggle();
}, 150);

let preloader = document.getElementById('loading');
let loadFunction = function () {
    preloader.style.display = "none";
}

// --> Mobile Menu Toggle
const openMobileMenu = () => document.querySelector('#sideBar').style.display = "block";
const closeMobileMenu = () => document.querySelector('#sideBar').style.display = "none";

// --> For Current Copyright Year in Footer
document.querySelector('#copyright_year').innerText = new Date().getFullYear();