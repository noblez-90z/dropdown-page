const list = document.querySelectorAll('.navbar-menu li')
const arrowdown = document.querySelectorAll('.arrow-down')
const arrowup = document.querySelectorAll('.arrow-up')
const dropdown01 = document.querySelector('.dropdown01')
const dropdown02 = document.querySelector('.dropdown02')
const company = document.querySelector('#check')
console.log(company)
console.log(Array.isArray(Array.from(list)))
console.log(Array.isArray(Array.from(arrowdown)))
console.log(Array.isArray(Array.from(arrowup)))
// arrowdown[0].addEventListener('click',function(){
//     if (arrowdown[0] || list[0]) {
//         arrowdown[0].classList.add('inactive')
//         arrowup[0].classList.add('active')
//         dropdown01.classList.add('show')
//     }
// })
// arrowdown[1].addEventListener('click',function(){
//     if (arrowdown[1] || list[1]) {
//         arrowdown[1].classList.add('inactive')
//         arrowup[1].classList.add('active')
//         dropdown02.classList.add('show')
//     }
// })
list[0].addEventListener('click',function(){
    arrowdown[0].classList.toggle('inactive')
    arrowup[0].classList.toggle('active')
    dropdown01.classList.toggle('show')
    list[0].classList.toggle('check')
})
company.addEventListener('click',function(){
    arrowdown[1].classList.toggle('inactive')
    arrowup[1].classList.toggle('active')
    dropdown02.classList.toggle('show')
    company.classList.toggle('check')
})
// arrowup[0].addEventListener('click',function(){
//     arrowup[0].classList.remove('active')
//     arrowdown[0].classList.remove('inactive')
//     dropdown01.classList.remove('show')
// })
// arrowup[1].addEventListener('click',function(){
//     arrowup[1].classList.remove('active')
//     arrowdown[1].classList.remove('inactive')
//     dropdown01.classList.remove('show')
// })

const menu = document.querySelector('.menu')
const close_menu = document.querySelectorAll('.close-menu')
const navbarcon = document.querySelector('.navbar-container')
console.log(Array.isArray(Array.from(close_menu)))

menu.addEventListener('click',function(){
    menu.classList.add('active')
    close_menu[0].classList.add('show')
    navbarcon.classList.add('active')
    
})
close_menu[0].addEventListener('click',function(){
    menu.classList.remove('active')
    close_menu[0].classList.remove('show')
    navbarcon.classList.remove('active')
    
})
console.log(close_menu)