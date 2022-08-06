// DOM Manipulation

// Event Listeners

/* 
    METHOD: addEventListener().

window.document.addEventListener("click", function) -> Example of sintaxe. 



const buttonTwo = window.document.querySelector('.btn-2');

function alertBtn() {
    window.alert('I also love JavaScript');
};

buttonTwo.addEventListener("click", alertBtn);
*/


/*
    MOUSEOVER EVENT


const newBackgroundColor = window.document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
};

newBackgroundColor.addEventListener("mouseover", changeBgColor);
*/

/*
    DOM MANIPULATION

    EXAMPLE
*/

// REVEAL EVENT

const revealBtn = window.document.querySelector('.reveal-btn');

const hiddenContent = window.document.querySelector('.hidden-content');

function revealContent() {

    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);