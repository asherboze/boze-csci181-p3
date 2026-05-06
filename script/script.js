const hidden_popup = document.querySelector(".hidden-nav-popup");
const open_popup = document.getElementById("nav-toggle");
const close_popup = document.getElementById("close-nav");

function handleClick() {
    hidden_popup.classList.toggle("show");
}

open_popup.addEventListener("click", handleClick);

function closeNav() {
    hidden_popup.classList.remove("show");
}

close_popup.addEventListener("click", closeNav)