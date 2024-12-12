let count = 0;
let countElement = document.getElementById("counter-element"); 

function incrementCount() {
    count++;
    countElement.innerHTML = count;
}

let saveElement = document.getElementById("save-el");

function save() {
    let countStr = count + " - "
    saveElement.textContent += countStr
    countElement.textContent = 0;
    count = 0;
}




