"use strict";

const navbar = document.querySelector('.navbar');
const searchFrom = document.querySelector('.search-form');

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active')
        searchFrom.classList.remove('active')
    }

    document.querySelector('#search-btn').onclick = () => {
        searchFrom.classList.toggle('active')
        navbar.classList.remove('active')
    }

    window.onscroll = () => {
        navbar.classList.remove('active')
        searchFrom.classList.remove('active')
    }
})