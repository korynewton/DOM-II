// Your code goes here

//10 unique event listeners

//1. 'mouseover' on Fun Bus logo
const fbLogo = document.querySelector('h1')
fbLogo.addEventListener('mouseover', element => console.log("the logo was moused over"))

//2. 'keydown' on body
const body = document.querySelector('body')
body.addEventListener('keydown', element => console.log("the body was keyed into"))

//3.'wheel' on .text-content
const firstTextContent = document.querySelector('.text-content')
console.log(firstTextContent)
firstTextContent.addEventListener('wheel', element => console.log('first text content was wheeled on'))

//4.'drag' on any img
const imgListener = document.querySelectorAll('img')
imgListener.forEach(function() {
    addEventListener('drag', event => console.log('This image is being dragged'))
})

//5. 'load' on all images
imgListener.forEach(function() {
    addEventListener('load', event => console.log('img has loaded'))
})

//6. window resize
window.addEventListener('resize', element => console.log('window has been resized'))
