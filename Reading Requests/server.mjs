import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log("Received Data", body);
      res.end("Data Received Ho Gya");
    });
  } else {
    res.end("Send a Post req to See Data Handling");
  }
});

const PORT = 4000;
const URL = "127.0.0.1";
server.listen(PORT, URL, () => {
  console.log("Connected to Server");
});
