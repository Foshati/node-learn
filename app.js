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

const EventsEmitter = require("node:events");
const emitter = new EventsEmitter();

emitter.on("msg", () => {
  console.log("listen called");
});

emitter.emit("msg");
