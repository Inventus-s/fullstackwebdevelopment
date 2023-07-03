const DecrementButton = document.getElementById("DecrementButton");
const count = document.getElementById("count");
const IncrementButton = document.getElementById("IncrementButton");
const ResetButton = document.getElementById("ResetButton");

// for increment button

IncrementButton.addEventListener("click", () => {
    const value = Number(count.innerText);
    if (value >= 10) {
        alert("10+ Values are not allowed")
    } else{
        count.innerText = value + 1
    }
})

// Decrement Button
DecrementButton.addEventListener("click", ()=>{
    const value = Number(count.innerText);
    if (value > 0) {
        count.innerText = value - 1 ;
    } else {
        alert("Negeative Values are not allowed")
    }
})

//Reset Button
ResetButton.addEventListener("click", () => {
    count.innerText = 0;
    
})