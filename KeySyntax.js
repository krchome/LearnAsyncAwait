async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
    const data = await response.json();
    return data;
  }
  
  fetchData().then(data => console.log(data));
  