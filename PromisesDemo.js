function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { userId: 1, name: 'John Doe' };
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(data => processData(data))
  .then(result => console.log(result))
  .catch(error => console.error(error));

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Processed data for ${data.name}`);
    }, 1000);
  });
}
