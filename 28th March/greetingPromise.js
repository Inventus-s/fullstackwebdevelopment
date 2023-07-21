function greetWithName(name) {
    return new Promise((resolve, reject) => {
      if (typeof name !== 'string' || name.trim().length === 0) {
        reject(new Error('Invalid name. Please provide a non-empty string.'));
      } else {
        const greetingMessage = `Hello, ${name}!`;
        resolve(greetingMessage);
      }
    });
  }

  
  const name = "Mithun";
  greetWithName(name)
    .then((greetingMessage) => {
      console.log(greetingMessage); // Output: "Hello, Mithun!"
    })
    .catch((error) => {
      console.error(error.message);
    });
  