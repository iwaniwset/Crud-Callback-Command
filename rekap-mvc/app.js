const argv = process.argv
const command = argv[2]

const Controller = require("./Contoller/Controller")
console.log(command)

if (command === "tampilData") {
  Controller.showData()
}