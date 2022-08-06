// DOM MANIPULATION

// Event Propagation

/*
    FIRST AND SECOND PHASE: EVENT CAPTURE AND TARGET.
    EVENT CAPTURE -> GOES FROM THE TOP OF YOUR DOM TREE (WINDOW) UNTIL THE BOTTOM (YOUR TARGET).

window.addEventListener("click", function() {
    console.log('Window');
}, true);

window.document.addEventListener("click", function() {
    console.log('Document');
}, true);

window.document.querySelector(".div2").addEventListener("click", function() {
    console.log('DIV 2');
}, true);

window.document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
}, true);

window.document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText = 'Clicked!');
}, true);



    THIRD PHASE: EVENT BUBBLING.

window.addEventListener("click", function() {
    console.log('Window');
}, false);

window.document.addEventListener("click", function() {
    console.log('Document');
}, false);

window.document.querySelector(".div2").addEventListener("click", function() {
    console.log('DIV 2');
}, false);

window.document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
}, false);

window.document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText = 'clicked!');
}, false);


    STOP PROPAGATION!!!!!!!!!!


window.addEventListener("click", function() {
    console.log('Window');
}, true);

window.document.addEventListener("click", function() {
    console.log('Document');
}, true);

window.document.querySelector(".div2").addEventListener("click", function(e) {
    e.stopPropagation();
    console.log('DIV 2');
}, true);

window.document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
}, true);

window.document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText = 'clicked!');
}, true);


    FIRE OFF ONLY ONCE - EVENT BUBBLING/CAPTURE 



window.addEventListener("click", function() {
    console.log('Window');
}, false);

window.document.addEventListener("click", function() {
    console.log('Document');
}, false);

window.document.querySelector(".div2").addEventListener("click", function() {
    console.log('DIV 2');
}, {once: true});

window.document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
}, false);

window.document.querySelector("button").addEventListener("click", function(e) {
    console.log(e.target.innerText = 'clicked!');
}, false);


    PREVENT DEFAULT METHOD - EVENT BUBBLING/CAPTURE

*/

window.addEventListener("click", function() {
    console.log('Window');
}, false);

window.document.addEventListener("click", function() {
    console.log('Document');
}, false);

window.document.querySelector(".div2").addEventListener("click", function() {
    console.log('DIV 2');
}, {once: true});

window.document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
}, false);

window.document.querySelector(".button").addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target.innerText = 'clicked!');
}, false);

