const delay = 3; // Change this value to modify the delay in seconds

function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function generateRandomNumber() {
  const random_number = Math.floor(Math.random() * 100) + 1;
  console.log(`The random number is: ${random_number}`);
}

for (let i = delay; i > 0; i--) {
  console.log(`Waiting for ${i} seconds...`);
  wait(1).then(() => {});
}

console.log("Generating random number...");
wait(1).then(generateRandomNumber);