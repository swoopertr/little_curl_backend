const http = require('node:http');

const routing = require('./routing/index');
const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    console.log('method: ', req.method);
    console.log('url: ', req.url);

    routing.process(req, res);

    
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});