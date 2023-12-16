// navbarfixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// hamburger
const sidebar = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

sidebar.addEventListener('click', function () {
    sidebar.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// profile
const profile = document.querySelector('#profil');
const row = document.querySelector('#row');
const profileMenu = document.querySelector('#prfl-menu')

profile.addEventListener('click', function () {
    row.classList.toggle('row-active');
    profileMenu.classList.toggle('hidden');
});


// sidebar
const buttonSidebar = document.querySelector('#sidebarToggle');
// const row1 = document.querySelector('#row1');
const sideBarMenu = document.querySelector('#sidebar')

buttonSidebar.addEventListener('click', function () {
    // row.classList.toggle('row-active');
    sideBarMenu.classList.toggle('hidden');
});