

const di = document.querySelector('#draggable-elem');

di.addEventListener('drag', (e) => {

    di.style.left = `${e.clientX}px`;
    di.style.top = `${e.clientY}px`;
});



// Prevent default behavior for dragover to enable drop
di.addEventListener('dragover', (e) => {
    e.preventDefault();
});