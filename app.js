document.querySelector('#sports').addEventListener('click', function (e)
{
    console.log(e.target.getAttribute('id') + ' is clicked')
})