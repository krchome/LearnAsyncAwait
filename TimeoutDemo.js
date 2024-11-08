function timeout(time, promise) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Operation timed out')), time);
      promise.then(resolve).catch(reject).finally(() => clearTimeout(timer));
    });
  }
 // timeout(5000, fetchWithRetry('https://jsonplaceholder.typicode.com/posts/10'))
  timeout(5000, fetchWithRetry('https://api.example.com/data'))
  .then(data => console.log(data))
  .catch(error => console.error(error));

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
  