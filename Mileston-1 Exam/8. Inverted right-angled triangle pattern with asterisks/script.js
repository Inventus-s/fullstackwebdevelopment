const generateButton = document.getElementById("generate");
const outputDiv = document.getElementById("output");

generateButton.addEventListener("click", function() {
  const rows = document.getElementById("rows").value;

  let pattern = "";
  for (let row = rows; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      pattern += "*";
    }
    pattern += "<br>";
  }

  outputDiv.innerHTML = pattern;
});
