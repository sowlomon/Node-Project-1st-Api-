
const fs = require('fs');

const textInput = fs.readFileSync("./complete-node-bootcamp/1-node-farm/starter/txt/read-this.txt", "utf-8");

const newText = `This is what we know about avocados ${textInput} ${Date.now()}`;

fs.writeFileSync("./complete-node-bootcamp/1-node-farm/starter/txt/outputcl.txt", newText);

console.log('file has being written');

console.log(textInput);

// const greetings = " Hello world";
// console.log(greetings);