// DOM manipualtion

// get element 
let box = document.getElementById("box");

// add event listener
box.addEventListener("click", function(){
    box.style.backgroundColor = "yellow"; //change color
    box.style.width = "600px" //change width
    box.style.height = "600px" // change height
});