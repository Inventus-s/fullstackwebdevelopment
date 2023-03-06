const form = document.querySelector('form');
const highestMarks = document.getElementById('highest-marks');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const marksInput = document.getElementById('marks').value;
	const marksArray = marksInput.split(',').map((mark) => parseInt(mark.trim()));
	const highestMark = Math.max(...marksArray);
	highestMarks.textContent = `The highest marks scored by a student is: ${highestMark}`;
});
