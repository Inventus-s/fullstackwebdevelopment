let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec")

// Function for update clock

function updateClock() {
    let currentTime = new Date();
    hrs.textContent = currentTime.getHours();
    min.textContent = currentTime.getMinutes();
    sec.textContent = currentTime.getSeconds();
}

// update time

setInterval(()=>{
    updateClock();
},1000)