const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./Modules/ReplaceTemp');


const tempOverview = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/templates/template_overview.html', 'utf-8');
const tempProduct = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/templates/template_product.html', 'utf-8');
const tempCard = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/templates/template_card.html', 'utf-8');


const data = fs.readFileSync('./complete-node-bootcamp/1-node-farm/starter/dev-data/data.json', 'utf-8');
const DataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  
  const {query, pathname} = url.parse(req.url, true);

  // OVERVIEW PAGE

  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {'content-type' : 'text/html'});


    const cardsHtml = DataObject.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT CARDS%}', cardsHtml)
    res.end(output);

    //API PAGE 

  } else if (pathname === '/api'){
    res.end(data);

    //PRODUCT PAGE

  } else if (pathname === '/product') {

    res.writeHead(200, {'content-type' : 'text/html'});
    const product = DataObject[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    //NOT FOUND PAGE

  } else {
    res.writeHead('404', {
      'content-type': 'text/html'
    });
    res.end('<h1>PAGE CANNOT BE FOUND</h1>');
  }
 
});

server.listen(8000, '127.0.0.1', () => {
  console.log('already running');
});