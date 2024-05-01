const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3062;
const nameObj= {name: "Gokalp", Surname: "Coban", team: "tavsanlilinyitspor"}

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json'); //mime-type
//   if(req.url === "/gokalp"){
//     const result = return_gokalp()
//     res.end(JSON.stringify(result));
//   } else {
//     const _default = return_default()
//     res.end(JSON.stringify(_default))
//   }
  
// });

function return_gokalp(){
    return({name: "gokalp", surname: "coban", age:"26"})
}

function return_default(){
    return({name: "BEKLEYİNİZ"})
}

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


module.exports = return_gokalp;