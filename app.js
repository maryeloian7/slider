"use strict"

const upBtn =document.querySelector('.up-button')
const downBtn =document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const  container =document.querySelector('.container')

let activeSlideIn =  0

sidebar.style.top= `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', ()=> {
    changeSlide('up')
})

downBtn.addEventListener('click', ()=> {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up'){
        activeSlideIn++
        if (activeSlideIn === slidesCount){
            activeSlideIn =  0
        }
    } else if (direction === 'down'){
        activeSlideIn--
        if (activeSlideIn < 0){
            activeSlideIn = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform =`translateY(-${activeSlideIn * height}px)`
    sidebar.style.transform =`translateY(${activeSlideIn * height}px)`
}