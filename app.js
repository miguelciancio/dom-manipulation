// DOM Manipulation

/*

-----------------------------------------------------------------------------------------------------------------------------------
|                                                       STYLING ELEMENTS                                                          |
-----------------------------------------------------------------------------------------------------------------------------------

const title =  window.document.querySelector('h1#main-heading');

title.style.color = 'red';

const listItems = window.document.querySelectorAll('li.list-items');

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}

*/



/*

-----------------------------------------------------------------------------------------------------------------------------------
|                                                       CREATING ELEMENTS                                                         |
-----------------------------------------------------------------------------------------------------------------------------------

*/

const ul = window.document.querySelector('ul');;
const li = window.document.createElement('li');

// Adding Elements
ul.append(li);

// Modifying the text
li.innerText = 'X-men';

// Modifying attributes & classes

/*
// First method to add attribute / remove attribute.
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

// Second method to get an attribute.
const title = window.document.querySelector('#main-heading');

console.log(title.getAttribute('id'));
*/

/*
// Add a class attribute / remove attribute
li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));
*/

// Remove Elements
li.remove()


