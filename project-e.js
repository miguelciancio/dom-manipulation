// Variables

let openBtn = window.document.getElementById('open-btn');
let modalContainer = window.document.getElementById('modal-container');
let closeBtn = window.document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function() {

    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    // Make X button close the modal.    
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {
    // Make any area of the window close the modal.
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
