let addToDobutton = document.getElementById('btn');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');

addToDobutton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
})