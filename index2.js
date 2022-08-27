

const fs = require('fs');

// const readFile = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', 'utf-8');

// console.log(readFile);

// const textTobWritten = `my name is ${readFile} please now`;

// const writeToFile = fs.writeFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', textTobWritten);

// console.log('It has being done');

const readFile = fs.readFile('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', 'utf-8', (err , data)=>{
  console.log(data);
})

console.log('reading file, please wait....');