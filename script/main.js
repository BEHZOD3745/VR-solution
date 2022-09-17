// burger start

let headerMenu = document.querySelector('.header__menu')
let headerMenuLine = document.querySelector('.header__menu-line')
let headerList = document.querySelector('.header__list')
let headerBtn = document.querySelector('.header__btn')
let body = document.querySelector('body')

headerMenu.addEventListener("click", () => {
    headerList.classList.toggle('active')
    headerMenuLine.classList.toggle('active')
    body.classList.toggle('active')
})


// burger end