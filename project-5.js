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

    // Create Check Button adding it into the 'div' element.
    let checkButton = window.document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    // Create Delete Button adding it into the 'div' element.
    let deleteButton = window.document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    // Create Some Validations: Error message in case of user click on add without typing anything on input field and also add the item in your to-do list.
    if(inputTask.value === "") {
        window.alert('ERROR: Please, enter a task!')
    } else {
        taskContainer.appendChild(task);
    };

    // Clear the input field after add a task.
    inputTask.value = "";

    // Create Buttons Functionalities.
    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = 'line-through';
    });

    deleteButton.addEventListener('click', function(e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    });

});
