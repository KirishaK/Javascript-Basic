function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function displayData() {
  let data = await fetchData();
  console.log(data);
}

displayData();
