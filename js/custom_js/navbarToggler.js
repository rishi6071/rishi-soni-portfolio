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