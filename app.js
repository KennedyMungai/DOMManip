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
const firstListItem = document.querySelector('.list-items')

console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)