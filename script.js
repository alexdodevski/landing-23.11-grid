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




// модальное окно

let modalWindow = document.querySelector('.modal')
let modalContent = document.querySelector('.modal_content')


// кнопки обратного звонка и модального окна
let callbackBtns = document.querySelectorAll('.btn_callback')
let btnClosedModal = document.querySelector('.btn_closed_modal')
let btnModalWindow = document.querySelector('.modal_button > button')


// функция открытия модального окна
let workModalWindows = function() {
    modalWindow.classList.add('modal_visible')
    setTimeout(function() {
        modalContent.classList.add('modal_content_visible')
    }, 200)
}

// инпуты имени и телефона формы
let nameInput = document.querySelector('.name_input')
let phoneInput = document.querySelector('.phone_input')


// функция проверки поля ввода имени
function validationName() {
    let value = nameInput.value
        // проверка на пустое поле
    if (value.length === 0) {
        nameInput.classList.add('disabled_form')
    }
    // проверяем есть ли заглавная буква в имени, если нет добавляем класс
    if (!value.includes(value[0].toUpperCase())) {
        nameInput.classList.add('disabled_form')
    } else {
        nameInput.classList.remove('disabled_form')
    }

}


//функция проверки поля ввода телефона 
function validationPhone() {
    let value = phoneInput.value
        //проверка на пустое поле
    if (value.length === 0) {
        phoneInput.classList.add('disabled_form')
        phoneInput.value = "+7"
    } else if (!value.includes('+7') || value.length < 12 || value.length > 12 || value.includes(" ")) {
        phoneInput.classList.add('disabled_form') // проверяем если в поле нет "+7", или поле менее или более 12 символов , или есть пробел ? тогда добавляем класс
    } else {
        phoneInput.classList.remove('disabled_form')
    }
}


// форма и ответный текст модального окна
let formModalWindow = document.querySelector('.modal_form')
let answerModalWindow = document.querySelector('.modal_answer')


// функция подтверждения и отправки формы 
let workModalDone = function() {
    let phoneValue = phoneInput.value
    let nameValue = nameInput.value

    if (phoneValue == "" || phoneValue == "+7" || nameValue == "") {
        phoneInput.classList.add('disabled_form')
        nameInput.classList.add('disabled_form')
    }


    if (!Array.from(nameInput.classList).includes('disabled_form') && !Array.from(phoneInput.classList).includes('disabled_form')) {
        formModalWindow.classList.toggle('modal_disable')
        answerModalWindow.classList.toggle('answer_visible')
        phoneInput.classList.remove('disabled_form')
        nameInput.classList.remove('disabled_form')
    }

}


// функция закрытия модального окна при нажатии на произвольную область + удаление старых данных из формы
let closeModalWindow = function(event) {
    if (event.target == modalWindow) {
        modalWindow.classList.remove('modal_visible')
        modalContent.classList.remove('modal_content_visible')

        if (Array.from(formModalWindow.classList).includes('modal_disable')) {
            formModalWindow.classList.toggle('modal_disable')
        }


        if (Array.from(answerModalWindow.classList).includes('answer_visible')) {
            answerModalWindow.classList.toggle('answer_visible')
        }

        nameInput.value = ""
        phoneInput.value = ""
    }
}


// функция закрытия модального окна через кнопку close modal + удаление старых данных из формы
let workBtnClosedModal = function() {
    modalWindow.classList.remove('modal_visible')
    modalContent.classList.remove('modal_content_visible')

    if (Array.from(formModalWindow.classList).includes('modal_disable')) {
        formModalWindow.classList.toggle('modal_disable')
    }


    if (Array.from(answerModalWindow.classList).includes('answer_visible')) {
        answerModalWindow.classList.toggle('answer_visible')
    }

    nameInput.value = ""
    phoneInput.value = ""
}


// события проверки формы
nameInput.addEventListener('blur', validationName)
phoneInput.addEventListener('blur', validationPhone)


// события на кнопках и окне
callbackBtns.forEach(item => {
    item.addEventListener('click', workModalWindows)
})
window.addEventListener('click', closeModalWindow)
btnClosedModal.addEventListener('click', workBtnClosedModal)
btnModalWindow.addEventListener('click', workModalDone)