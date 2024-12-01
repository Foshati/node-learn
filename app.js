// console.log(module);

// const logger = require("./logger");

// logger.log("ali");

// const path = require("node:path")
// const data =path.parse(__filename)
// console.log(data)

// const os= require("node:os")
// const free = os.freemem()
// const total=os.totalmem()

// console.log(free, total)

// const fs = require("node:fs");
// const files = fs.readFileSync("./");
// console.log(files);

// const EventsEmitter = require("node:events");
// const emitter = new EventsEmitter();

// emitter.on("msg", () => {
//   console.log("listen called");
// });
// emitter.emit("msg");

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("hello from home page");
//     res.end();
//   }

//   if (req.url === "/api/books") {
//     res.write(JSON.parse);
//   }
// });

// server.listen(3000);

const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("hello from home page express");
});

app.get("/api/books", (req, res) => {
  res.send(["html", "css"]);
});

app.get("/api/books/:id?", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/books/:id?/:name?", (req, res) => {
  res.send([req.params.id]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connected to port: ${port}`);
});
