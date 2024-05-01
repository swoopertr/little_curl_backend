/* const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3010;
const name_e= {
    name:"elif",
}
const server = http.createServer((req, res) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if(req.url == '/elif') {
        const result= return_elif();
        res.end(JSON.stringify(result));
    }
    else {
        const default_ = return_default_elif();
        res.end(JSON.stringify(default_));
    }
    res.end(JSON.stringify(name_e));
  }); */
function return_elif() {
    return { name: 'elif' }
}
function return_default_elif() {
    return { name: 'öğretici elif server' }
}

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
module.exports = return_elif;