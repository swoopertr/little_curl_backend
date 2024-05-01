const fs = require('fs');
const egemen_obj ={
  MimeType: {
      key: 'Content-Type',
      value: 'text/html'
  },
  url: "/ego",
  OutputFn: function (req, res) {
      res.statusCode = 200;
      res.setHeader(egemen_obj.MimeType.key, egemen_obj.MimeType.value);//mime-type
      let html_data = fs.readFileSync('myhtml.html').toString();
      const data = html_data.replace('{{name}}', 'Egemen');
      res.end(data);
  }
};
module.exports = egemen_obj;