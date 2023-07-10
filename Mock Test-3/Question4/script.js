const navBtn = document.querySelector(".hamburger");
const header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("Hello Everyone");
    header.classList.toggle("active");
};

navBtn.addEventListener("click", ()=> toggleNavbar());