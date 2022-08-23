// Variables

const addTask = window.document.getElementById('add-task');
const taskContainer = window.document.getElementById('task-container');
const inputTask = window.document.getElementById('input-task');

// Event Listener for Add Button

addTask.addEventListener('click', function() {
    // Create a 'div' with a class called 'task' which will store and display all the to-do elements (to-do list, check & delete buttons).
    let task = window.document.createElement('div');
    task.classList.add('task');

    // Create the to-do list element and add it into the 'div' element.
    let li = window.document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);


});
