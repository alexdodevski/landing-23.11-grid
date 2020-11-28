'use strict'

// Меню бургер

// элементы навигации

const btnClose = document.querySelector('.btn_close_menu')
const navBar = document.querySelector('.nav-bar')
const navButtons = document.querySelector('.nav__buttons')

//классы элементов

const navBarActive = 'nav__bar__active'
const navButtonsActive = 'nav_buttons__active'
const btnCloseActive = 'btn__close_active'

// let classListNavButtons = Array.from(navButtons.classList)
// let classListNavBar = Array.from(navBar.classList)

// функция работы меню бургера

let btnBurgerHeader = function() {

    btnClose.classList.toggle(btnCloseActive)
    navBar.classList.toggle(navBarActive)

    if (!Array.from(navButtons.classList).includes(navButtonsActive)) {
        setTimeout(function() {
            navButtons.classList.add(navButtonsActive)
        }, 100)

    } else {
        setTimeout(function() {
            navButtons.classList.remove(navButtonsActive)
        }, 50)
    }

}

//проверка размеров nav bar и коррекция классов в соответсвии с размерами

let btnCheckedSize = function() {
    if (document.body.clientWidth > 544 && Array.from(navBar.classList).includes(navBarActive)) {
        navBar.classList.remove(navBarActive)
        navButtons.classList.remove(navButtonsActive)
        btnClose.classList.remove(btnCloseActive)
    }

}

// запуск функций

btnClose.addEventListener('click', btnBurgerHeader)
setInterval(btnCheckedSize, 100)



// Нажатие пина в контактах

const locationPin = document.querySelector('#location_pin')

let openContacts = function() {
    const contact = document.querySelector('.contact_text')
    contact.classList.toggle('contact_text_visible')
    console.log("hi")
}

locationPin.addEventListener('click', openContacts)