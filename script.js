const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".list")

hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-mobile")
    logo.classList.toggle("list-mobile")
});
