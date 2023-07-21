async function fetchDataFromMultipleAPIs() {
    const todoApiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
    const postApiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch(todoApiUrl),
        fetch(postApiUrl),
      ]);
  
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error('One or both API requests failed');
      }
  
      const [todoData, postData] = await Promise.all([
        todoResponse.json(),
        postResponse.json(),
      ]);
  
      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      console.log(combinedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the function to fetch and log the combined data
  fetchDataFromMultipleAPIs();
  