
let buttons = document.querySelectorAll(".project-card-button");
let modal = document.querySelector(".hidden-modal");
let undo = document.querySelector(".undo");


const messages = [
    "For this project, I redid my old schools website for an assignment. My friends and I used to make fun of it, so I thought it would be a good exercise to improve upon it. Use this link to see the website:  https://github.com/asherboze/boze-csci181-p1.git",
    "For this project, I haven't coded anything yet. I will, though. You just wait...",
    "For this project, I was tasked with using all of my skills that I had developed during the semester to code a website. If you are reading this, then you are in this project! Cool huh?",
    "I composed a song called Leavetaking for my High School Graduation. Click this link to watch it:  https://youtu.be/B56jiHYLMe0?si=9muhvlJZD6j7rLVM",
    "This is a recent composition of mine. The lyrics are inspired by a used, discarded notebook I picked up in one of my classes. I will post this on my youtube channel later.",
    "I performed this set in between the fall semester and the spring semester. I've been meaning to post it, but I haven't got it edited yet, so I will put up the link when I finish that."
];

for (let x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", () => openModal(buttons[x], messages[x]));
}

function openModal(theClicked, whatItOozes) {
    let ogMessage = document.getElementById("ogMessage");
    ogMessage.textContent = whatItOozes
    modal.classList.add("unhidden");
}

function closeModal() {
    modal.classList.remove("unhidden");
}

undo.addEventListener("click", closeModal);





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