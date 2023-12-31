import {RandomName} from "./randomFunction.js";

let nameInput = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");
let randomBtn = document.getElementById("randomBtn");
let nameTxt = document.getElementById("nameTxt");
let removeBtn = document.getElementById("removeBtn");

let nameArray = [];
// local storage
if(localStorage.getItem("names")){
    nameArray = JSON.parse(localStorage.getItem("names"));
}

// localStorage.setItem("names", JSON.stringify(nameArray)); updates the local storage
addBtn.addEventListener('click', function() {
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);
    
    localStorage.setItem("names", JSON.stringify(nameArray));
});

randomBtn.addEventListener('click', function() {
    nameTxt.innerText = RandomName(nameArray);
});

removeBtn.addEventListener('click', function() {
    let index = nameArray.indexOf(nameInput.value);
    nameArray.splice(index, 1);
    nameInput.value = "";
    console.log(nameArray);

    localStorage.setItem("names", JSON.stringify(nameArray));
});