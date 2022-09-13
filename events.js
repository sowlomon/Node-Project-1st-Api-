const EventEmitter = require('events');

const http = require('http');


class Sales extends EventEmitter{
  constructor() {
    super();
  };
};

const myEmitter = new Sales();


myEmitter.on('newSale', () => {
  console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
  console.log('Customer name: Solomon');
});


myEmitter.on('newSale', (stock) => {
  console.log(`they are ${stock} amount oranges left david`);
});

myEmitter.emit('newSale', 9);


//////////////////////


const server = http.createServer();

server.on('request', (req, res) => {
  console.log('event received');

  res.end('Event has been received');
});

server.on('request', (req, res) => {
  console.log(' Another Event has been received');
});

server.on('close', () => {
  console.log('server closed down');
});

server.listen(8000, '127.0.0.1' , () => {
  console.log('waiting for a event.....');
});
