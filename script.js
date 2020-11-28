'use strict'

// Меню бургер

let btnClose = document.querySelector('.btn_close_menu')
let navBar = document.querySelector('.nav-bar')
let navButtons = document.querySelector('.nav__buttons')

let btnBurgerHeader = function() {

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

}

let btnCheckedSize = function() {
    if (document.body.clientWidth > 544 && Array.from(navBar.classList).includes('nav__bar__active')) {
        navBar.classList.remove('nav__bar__active')
        navButtons.classList.remove('nav_buttons__active')
        btnClose.classList.remove('btn__close_active')
    }
    console.log('allo')
}

btnClose.addEventListener('click', btnBurgerHeader)

setInterval(btnCheckedSize, 100)