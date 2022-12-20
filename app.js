// Event Listeners

const buttonTwo = document.querySelector('.btn-2')
// console.log(buttonTwo)

function alertBtn()
{
    alert("You have pressed a button")
}

buttonTwo.addEventListener("click", alertBtn)

// Mouseover events
const newBackgroundColor = document.querySelector('.box-3')

function changeBgColor()
{
    newBackgroundColor.style.backgroundColor = 'olive'
}

newBackgroundColor.addEventListener("mouseover", changeBgColor)