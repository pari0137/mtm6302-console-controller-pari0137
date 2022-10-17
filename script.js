//setTitle
function setTitle(message){
    const $h1 = document.querySelector('h1')
    $h1.textContent = message
}

//setDescription
function setDescription(message){
    const $p = document.querySelector('p')
    $p.textContent = message
}

//setBackground
const $body = document.querySelector('body')
function setBackgroundColor(color){
    $body.style.backgroundColor = color
}

//setFontColor
function setFontColor(color) {
    $body.style.color = color
}