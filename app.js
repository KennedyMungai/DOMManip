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