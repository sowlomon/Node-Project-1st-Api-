
// const fs = require('fs');

// const textInput = fs.readFileSync("./complete-node-bootcamp/1-node-farm/starter/txt/read-this.txt", "utf-8");

// const newText = `This is what we know about avocados ${textInput} ${Date.now()}`;

// fs.writeFileSync("./complete-node-bootcamp/1-node-farm/starter/txt/outputcl.txt", newText);

// console.log('file has being written');

// console.log(textInput);

// const greetings = " Hello world";
// console.log(greetings);

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hello i am currently running');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('running currently');
});