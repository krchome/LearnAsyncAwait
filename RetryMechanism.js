async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Request failed');
        return await response.json();
      } catch (error) {
        if (i === retries - 1) throw error;
        console.warn(`Retrying... (${i + 1})`);
      }
    }
  }
  //fetchWithRetry('https://jsonplaceholder.typicode.com/todos/9')
 fetchWithRetry('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error(error));
  