async function fetchDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the function to fetch and log the data
  fetchDataFromAPI();
  