function fetchDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  }
  
  // Call the function to fetch and log the data
  fetchDataFromAPI();
  