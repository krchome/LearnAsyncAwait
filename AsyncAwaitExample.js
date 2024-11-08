async function handleData() {
    try {
      const data = await fetchData();
      const result = await processData(data);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  handleData();
  async function fetchData() {
    try
    {
      return await new Promise((resolve) => {
        setTimeout(() => {
        const data = { userId: 1, name: 'John Doe' };
         // const data = [{ userId: 1, name: 'John Doe' }, { userId: 2, name: 'Jane Doe' }, { userId: 3, name: 'Jim Doe' }];
          resolve(data);
        }, 1000);
      });
    }
    catch(error)
    {
      console.error('Error:', error);
    }
  }
  
  async function processData(data) {
    try
    {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Processed data for ${data.name}`);
        }, 1000);
      });
    }
    catch(error)
    {
      console.error('Error:', error);
  }
  }
  