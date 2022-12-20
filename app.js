// const title = document.querySelector("#main-heading")

// title.style.color = 'red'

// const listItems = document.querySelectorAll('.list-items')

// for (let i = 0; i < listItems.length; i++)
// {
//     const listItem = listItems[i];
//     listItem.style.fontSize = '4rem';
// }

//Creating elements
const ul = document.querySelector('ul')
const li = document.createElement('li')

ul.append(li)

// Modifying the text
li.innerText = 'X-Men'

// Modifying attributes and classes
li.setAttribute('id', 'main-heading')
li.removeAttribute('id')

const title = document.querySelector('#main-heading')

console.log(title.getAttribute('id'))