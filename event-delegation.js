// DOM Manipulation

// EVENT DELEGATION

/*
    It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.
*/

/*
window.document.querySelector('#football').addEventListener('click', function(e) {
    console.log('football is clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});

window.document.querySelector('#basketball').addEventListener('click', function(e) {
    console.log('basketball is clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});

window.document.querySelector('#boxing').addEventListener('click', function(e) {
    console.log('boxing is clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});

window.document.querySelector('#tennis').addEventListener('click', function(e) {
    console.log('tennis is clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});

window.document.querySelector('#golf').addEventListener('click', function(e) {
    console.log('golf is clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});
*/


window.document.querySelector('#sports').addEventListener('click', function(e) {
    console.log(e.target.getAttribute('id') + ' is clicked!');

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});

const sport = window.document.querySelector('#sports');
const newSport = window.document.createElement('li');

newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sport.appendChild(newSport);
