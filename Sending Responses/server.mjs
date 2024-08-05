import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/text") {
    res.statusCode = 200;
    res.setHeader("Chutiya", "text/plain");
    res.end("Plain text Received");
  } else if (req.url === "/html") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is html</h1>");
  } else if (req.url === "/json") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ messege: "This is msg" }));
  } else {
    res.statusCode = 400;
    res.setHeader = ("Content-Type", "text/plain");
    res.end("Not a valid method");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server Start on http://127.0.0.1:3000");
});
