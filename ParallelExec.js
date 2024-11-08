async function fetchDataParallel() {
    const [data1, data2] = await Promise.all([
      fetchData(1),
      fetchData(2)
    ]);
    console.log(data1, data2);
  }
  
  fetchDataParallel();
  async function fetchData(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id, name: `User ${id}` });
      }, 1000);
    });
  }
  