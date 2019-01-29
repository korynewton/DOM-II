// Your code goes here

//10 unique event listeners

//1. 'mouseover' on Fun Bus logo
const fbLogo = document.querySelector('h1')
fbLogo.addEventListener('mouseover', element => {element.target.style.color = 'red'})

//2. 'keydown' on first Nav item
const firstNavItem = document.querySelector('.nav-link')
firstNavItem.addEventListener('keydown', element => {
    firstNavItem.style.fontSize = '40px'
})

//3.'wheel' on first .text-content
const firstTextContent = document.querySelector('.text-content')
firstTextContent.addEventListener('wheel', element => {
    firstTextContent.style.border = "3px dashed black"
})

//4.'drag' on any img
const imgListener = document.querySelectorAll('img')
imgListener.forEach(function() {
    addEventListener('drag', event => {
        event.target.remove()
    })
})

//5. 'load' on all images
imgListener.forEach(function() {
    addEventListener('load', function(){
        document.querySelector('body').style.backgroundColor = 'yellow'
    })
})


//6. window resize
window.addEventListener('resize', element => {
    document.querySelector('img').src = 'https://pacogampp.files.wordpress.com/2013/06/cat-on-bus.jpg'
})


//7. 'scroll' listener added to window
window.addEventListener('scroll', function() {
    fbLogo.textContent = "Scrolly Bus"
})

//8. 'select' text within input
const inputObj = document.querySelector('input')
inputObj.addEventListener('select', element => element.target.style.backgroundColor = 'red')

//9. 'focus' on input
inputObj.addEventListener('focus', element => element.target.style.color = 'white')

//10. 'dblclick' on first button
const firstDestinationButton = document.querySelector('.btn')
firstDestinationButton.addEventListener('dblclick', element => {
    element.target.textContent = 'Have a Nice Trip!'
    element.target.style.backgroundColor = 'blue'
})