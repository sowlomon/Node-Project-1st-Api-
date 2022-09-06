

const fs = require('fs');
const http = require('http');

//FILES

// const readFile = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', 'utf-8');

// console.log(readFile);

// const textTobWritten = `my name is ${readFile} please now`;

// const writeToFile = fs.writeFileSync('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', textTobWritten);

// console.log('It has being done');

// const readFile = fs.readFile('./complete-node-bootcamp/1-node-farm/starter/txt/input.txt', 'utf-8', (err , data1)=>{
//   console.log(data1);

//   fs.readFile('./complete-node-bootcamp/1-node-farm/starter/txt/final.txt', 'utf-8', (err, data2) => {
//     console.log(data2);

//     fs.writeFile('./complete-node-bootcamp/1-node-farm/starter/txt/money.txt', `${data1}\n${data2} `, 'utf-8', (err) => {
//       // console.log(err)
//     })
//   })
  
// })


// console.log('reading file, please wait....');


// SERVER

const server = http.createServer((req, res) => {
  res.end('hello from solomon adache');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('running');
});