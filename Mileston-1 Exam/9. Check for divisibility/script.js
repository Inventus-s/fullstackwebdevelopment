function checkDivisibility() {
	// Get input value and split it into an array of numbers
	const input = document.getElementById("input").value;
	const numbers = input.split(",").map(Number);

	// Clear previous results
	const output = document.getElementById("output");
	// output.innerHTML = number;

	// Loop through the numbers and check for divisibility
	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i];

		// If number is not divisible by 3, skip to the next iteration
		if (number % 3 !== 0) {
			continue;
		}

		// If number is divisible by 2, skip to the next iteration
		if (number % 2 === 0) {
			continue;
		}

		// If number is divisible by 3 and not by 2, add it to the output
		const listItem = document.createElement("li");
		listItem.textContent = number;
		output.appendChild(listItem);
	}

	
}
