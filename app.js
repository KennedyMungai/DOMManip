const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input')

addTask.addEventListener('click', function ()
{
    let task = document.createElement('div')
    task.classList.add('task')
    taskContainer.append(task)

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)
})