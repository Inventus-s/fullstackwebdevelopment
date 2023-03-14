function convert(event) {
    event.preventDefault();  // Auto page refresh won't work
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius * 9/5) + 32;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`;
  }