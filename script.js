'use strict'

// Меню бургер

// элементы навигации

let btnClose = document.querySelector('.btn_close_menu')
let navBar = document.querySelector('.nav-bar')
let navButtons = document.querySelector('.nav__buttons')

//классы элементов

// let classListNavButtons = Array.from(navButtons.classList)
// let classListNavBar = Array.from(navBar.classList)

// функция работы меню бургера

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

//проверка размеров nav bar и коррекция классов в соответсвии с размерами

let btnCheckedSize = function() {
    if (document.body.clientWidth > 544 && Array.from(navBar.classList).includes('nav__bar__active')) {
        navBar.classList.remove('nav__bar__active')
        navButtons.classList.remove('nav_buttons__active')
        btnClose.classList.remove('btn__close_active')
    }

}

// запуск функций

btnClose.addEventListener('click', btnBurgerHeader)
setInterval(btnCheckedSize, 100)