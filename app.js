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



const ul = window.document.querySelector('ul');;
const li = window.document.createElement('li');

// Adding Elements
ul.append(li);

// Modifying the text
li.innerText = 'X-men';

// Modifying attributes & classes


// First method to add attribute / remove attribute.
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

// Second method to get an attribute.
const title = window.document.querySelector('#main-heading');

console.log(title.getAttribute('id'));



// Add a class attribute / remove attribute
li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));


// Remove Elements
li.remove()
*/




/*

-----------------------------------------------------------------------------------------------------------------------------------
|                                                       TRAVERSE THE DOM TREE                                                     |
-----------------------------------------------------------------------------------------------------------------------------------



// Parent Node Traversal

let ul = window.document.querySelector('ul');


    UPWARDS TRAVERSE.

console.log(ul.parentNode.parentNode.parentNode);
console.log(ul.parentElement.parentElement);


const html = document.documentElement;

console.log(html.parentNode);  //  return the node HTML.
console.log(html.parentElement);  //  return null since there aren't any element above the document element - root node.
*/


/*
    DOWNWARDS TRAVERSE.



console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[3].style.backgroundColor = 'blue';


console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

ul.children[0].style.backgroundColor = 'blue';


const div = window.document.querySelector('div');
console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);  //  return null because there isn't any next element after the ul on this dom tree.
*/

