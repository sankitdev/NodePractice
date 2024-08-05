fetch("http://127.0.0.1:4000/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "name=John&age=30",
})
  .then((res) => res.text())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
