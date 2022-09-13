// ASYNCHRONOUS JS


const fs = require('fs');

const superAgent = require('superagent');

fs.readFile('./readText.txt', 'utf-8', (err, data) => {
  console.log(`breed ${data}`);



  superAgent.get('./readText.txt')
  .then((res) => {
    console.log(res.body);
  }).catch((err) => {
    console.log(err);
  });
});

