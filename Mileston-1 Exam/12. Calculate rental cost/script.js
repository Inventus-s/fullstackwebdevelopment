const rentalForm = document.querySelector('#rentalForm');
const resultDisplay = document.querySelector('#result');

rentalForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const carType = rentalForm.carType.value;
  const days = rentalForm.days.valueAsNumber;

  let rentalCost;

  switch (carType) {
    case 'economy':
      rentalCost = 4000;
      break;
    case 'midsize':
      rentalCost = 10000;
      break;
    case 'luxury':
      rentalCost = 20000;
      break;
    default:
      rentalCost = 0;
      break;
  }

  const totalCost = rentalCost * days;

  resultDisplay.textContent = `Total Rental Cost: Rs. ${totalCost}/-`;
});
