var box = document.querySelector('.box')
var btn = document.querySelector('.btn')

function changingColor(){
    var randomColor = '#' + Math.floor(Math.random()*16777295).toString(16)
    box.style.backgroundColor = randomColor
}

btn.addEventListener('click', changingColor)