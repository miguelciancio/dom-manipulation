// Variable

const accordion = window.document.getElementsByClassName('content-container');
 for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        /*
            We use the 'this' keyword here with a callback function to reference to the object which in this case is your accordion variable which contains your div of class content-container, and you do that in order to toggle between adding or removing the class name inside it.
        */
        this.classList.toggle('active');
        console.log(this)
    })
 };