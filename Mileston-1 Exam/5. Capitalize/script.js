const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
    submitBtn.style.backgroundColor = "black" ;
    const name = document.getElementById('enterInput').value ;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById('result').textContent = capName ;
})