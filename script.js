'use strict'

console.log(document.body.clientWidth)
    // Меню бургер

let btnClose = document.querySelector('.btn_close_menu')
let navBar = document.querySelector('.nav-bar')
console.log(btnClose)

btnClose.addEventListener('click', function() {
    let navButtons = document.querySelector('.nav__buttons')
    console.log(Array.from(navButtons.classList))
    btnClose.classList.toggle('btn__close_active')
    navBar.classList.toggle('nav__bar__active')

    if (!Array.from(navButtons.classList).includes('nav_buttons__active')) {
        setTimeout(function() {
            navButtons.classList.add('nav_buttons__active')
        }, 100)

    } else {
        setTimeout(function() {
            navButtons.classList.remove('nav_buttons__active')
        }, 50)
    }

})