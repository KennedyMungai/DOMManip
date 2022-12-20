document.querySelector('#sports').addEventListener('click', function (e)
{
    console.log(e.target.getAttribute('id') + ' is clicked')

    const target = e.target
    if (target.matches('li'))
    {
        target.style.backgroundColor = 'gray'
    }
})

const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = "Rugby"
newSport.setAttribute('id', 'rugby')
sports.appendChild(newSport)