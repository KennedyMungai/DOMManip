// Event delegation
document.querySelector('#football').addEventListener('click', function (e)
{
    console.log("Football is the shit")

    const target = e.target;

    if (target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#basketball').addEventListener('click', function (e)
{
    console.log("Football is the shit")

    const target = e.target;

    if (target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#boxing').addEventListener('click', function (e)
{
    console.log("Football is the shit")

    const target = e.target;

    if (target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#tennis').addEventListener('click', function (e)
{
    console.log("Football is the shit")

    const target = e.target;

    if (target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey'
    }
})

document.querySelector('#golf').addEventListener('click', function (e)
{
    console.log("Football is the shit")

    const target = e.target;

    if (target.matches('li'))
    {
        target.style.backgroundColor = 'lightgrey'
    }
})