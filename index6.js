// EVENT LOOP

const fs = require('fs');

const crypto = require('crypto')

const start = Date.now();


setTimeout(() => {
  console.log('Timer-1');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

fs.readFile('./text.txt', 'utf-8', () => {
  console.log('responsible');

  setTimeout(() => {
    console.log('Timer-1');
  }, 0);

  setTimeout(() => {
    console.log('Timer-2');
  }, 3000);
  
  setImmediate(() => {
    console.log('immediate');
  });

  process.nextTick(() => console.log('process.NextTick'));

  crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'password encrypted');
  });

});

console.log('hello from top here');

