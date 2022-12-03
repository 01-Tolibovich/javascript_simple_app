let number = document.querySelector('.number')

let counter = 0

// Увеличить нам 1 number
let plus = document.querySelector('.plus')
plus.addEventListener('click', function() {
    counter++
    number.innerText = counter
})

//Уменшить на 1 number
let minus = document.querySelector('.minus')
minus.addEventListener('click', function() {
    counter--
    number.innerText = counter
})

//Сбросить number
let reset = document.querySelector('.reset')
reset.addEventListener('click', function() {
    counter = 0
    number.innerText = counter
})



// day and night switcher by img
let light = document.querySelector('.light')
let dark = document.querySelector('.dark')
let body = document.querySelector('.body')

light.addEventListener('click', function() {
    dark.classList.add('active')
    light.classList.add('hidden')
    body.classList.add('night')
})
dark.addEventListener('click', function() {
    dark.classList.remove('active')
    light.classList.remove('hidden')
    body.classList.remove('night')
})


//Title
let HtmlCssJavascript = document.querySelector('.html-css-javascript')

function changeText() {
    setInterval(() => {
        HtmlCssJavascript.innerText = 'HTML'
    }, 1000);
    setInterval(() => {
        HtmlCssJavascript.innerText = 'CSS'
    }, 2000);
    setInterval(() => {
        HtmlCssJavascript.innerText = 'JavaScript'
    }, 3000);
}
changeText()

HtmlCssJavascript.addEventListener( 'mouseover', mouseenter )

function mouseenter() {
    
}