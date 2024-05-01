const fs = require('fs');
const sinan_obj = {
  MimeType: {
      key: 'Content-Type',
      value: 'text/html'
  },
  url: "/sinan",
  OutputFn: function (req, res) {
      res.statusCode = 200;
      res.setHeader(sinan_obj.MimeType.key, sinan_obj.MimeType.value);//mime-type
      let html_data = fs.readFileSync('myhtml.html').toString();
      const data = html_data.replace('{{name}}', 'Sinan');
      res.end(data);
  }
};

module.exports = sinan_obj;