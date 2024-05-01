const fs = require('fs');
const js_obj = {
    MimeType: {
        key: 'Content-Type',
        value: 'text/javascript'
    },
    url: "/js/main.js",
    OutputFn: function (req, res) {
        res.statusCode = 200;
        res.setHeader(js_obj.MimeType.key, js_obj.MimeType.value);//mime-type

        let js_string = fs.readFileSync('js/main.js').toString();
        res.end(js_string);
    }
};
module.exports = js_obj;