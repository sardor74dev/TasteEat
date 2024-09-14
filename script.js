const menu = document.querySelector('.burger_menu')
const menuItems = document.querySelectorAll('.menu_item')
const hamburger = document.querySelector('.hamburger')
const navToggle = document.querySelector('.nav-toggle')

function toggleMenu(){
    if (menu.classList.contains('showMenu')){
        menu.classList.remove('showMenu')
        hamburger.style.display = 'block'
        hamburger.style.transform = 'rotate(-180deg)'
        hamburger.style.transition = "all 0.5s";
        hamburger.style.position = 'relative'
    } else {
        menu.classList.add('showMenu')
        hamburger.style.transform = 'rotate(180deg)'
        hamburger.style.transition = "all 0.5s";
        hamburger.style.position = 'fixed'
    }
}
navToggle.addEventListener('click', toggleMenu)

menuItems.forEach(
    function (menuItem){
        menuItem.addEventListener('click', toggleMenu)
    }
)
let splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    gap: '1 rem',
    breakpoints: {
        1024: {
            perPage: 2,
        },
        768: {
            perPage: 1
        }
    }
});

splide.mount();
