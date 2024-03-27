// Navbar

const mobile_nav = document.querySelector('.mobile_nav');
const nav_header = document.querySelector('.header');

mobile_nav.addEventListener("click", () => toggleNavbar());

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}


// About US

document.querySelector('.play-button').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'https://www.instagram.com/reel/C3DAuQ0PusX/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==';
});

// Sponser
