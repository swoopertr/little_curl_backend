const sinan_data = require('./sinan_server')
const elif_data = require('./elif_server');
const EgoData = require("./Egemen_server");
const gokalp_data = require('./gokalp_server');
const js_file = require('./js_file');


const routes = [
    EgoData,
    sinan_data,
    js_file
   
]

function return_tunc() {
    return { name: 'tunc' };
}
let work = {
    process: function (req, res) {
        
        if(req.url == '/favicon.ico'){
            res.end("");
            return;
        }

        const routeItem = routes.find(item => item.url == req.url);
        routeItem.OutputFn(req, res);



        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');//mime-type
        // if (req.url == '/tunc') {
        //     const result = return_tunc();
        //     res.end(JSON.stringify(result));
        // } else if (req.url === "/ego") {
        //     res.setHeader('Content-Type', 'text/html');//mime-type
        //     let html_data = fs.readFileSync('myhtml.html').toString();
        //     const data = html_data.replace('{{name}}', 'Egemen');
        //     res.end(data);
        // } else if (req.url === "/elif") {
        //     const data = elif_data();
        //     res.end(JSON.stringify(data));
        // } else if (req.url === "/gokalp") {
        //     const data = gokalp_data();
        //     res.end(JSON.stringify(data));
        // } else if (req.url === "/sinan") {
        //     const data = sinan_data();
        //     res.end(JSON.stringify(data));
        // } else if(req.url == '/js/main.js' ){
        //     res.setHeader('Content-Type', 'text/javascript');//mime-type
        //     let js_string = fs.readFileSync('js/main.js').toString();
        //     res.end(js_string);
        // } else {
        //     res.setHeader('Content-Type', 'text/html');//mime-type
        //     let html_data = fs.readFileSync('myhtml.html').toString();
        //     res.end(html_data);
        // }

    }
};

module.exports = work;