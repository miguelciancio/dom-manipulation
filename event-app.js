// DOM Manipulation

// Event Listeners

/* 
    METHOD: addEventListener().

window.document.addEventListener("click", function) -> Example of sintaxe. 

*/

const buttonTwo = window.document.querySelector('.btn-2');

function alertBtn() {
    window.alert('I also love JavaScript');
};

buttonTwo.addEventListener("click", alertBtn);

/*
    MOUSEOVER EVENT
*/

const newBackgroundColor = window.document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
};

newBackgroundColor.addEventListener("mouseover", changeBgColor);



