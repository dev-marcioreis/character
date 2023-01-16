let menu = document.getElementById('menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const scrollreveal = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    display: 450,
    reset: true
})

scrollreveal.reveal('.hero-text', {delay: 200, origin: 'top'})
scrollreveal.reveal('.hero-img', {delay: 400, origin: 'right'})
scrollreveal.reveal('.icons', {delay: 500, origin: 'left'})
scrollreveal.reveal('.scroll-down', {delay: 500, origin: 'right'})