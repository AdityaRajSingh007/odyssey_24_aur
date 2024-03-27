// Navbar

const mobile_nav = document.querySelector('.mobile_nav');
const nav_header = document.querySelector('.header');

mobile_nav.addEventListener("click", () => toggleNavbar());

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}
