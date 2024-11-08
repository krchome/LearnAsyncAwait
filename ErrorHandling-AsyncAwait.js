async function handleData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  handleData();
  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;  //50% chance of success
        if (success) {
          resolve({ userId: 1, name: 'John Doe' });
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1000);
    });
  }
  
  