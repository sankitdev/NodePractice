function promise(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, 2000);
  })
    .then((res) => console.log(res))
    .catch((err) => console.err(err));
}

promise("Promise resolved");

async function fetchData() {
  return await new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1500);
  });
}

fetchData().then((data) => {
  console.log(data);
});
