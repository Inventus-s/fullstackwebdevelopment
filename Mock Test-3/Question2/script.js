//  Input box App

let textInput = document.getElementById("text-input");
let btn = document.getElementById("btn");
let listContain = document.getElementById("list-contain");

btn.addEventListener("click", function(){
    let textValue = textInput.value;
    if (textValue != "") {
        let listValue = document.createElement("li");
        listValue.textContent = textValue;
        listContain.appendChild(listValue);

        textInput.value = "";
    }
})