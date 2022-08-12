"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
``; // string 
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll",() => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.add("navbar--dark");
    }
});

//
