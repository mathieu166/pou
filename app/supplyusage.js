var fs        = require('fs');
var cheerio		= require('cheerio');

homepage = function(request, response, database) {
    var html = fs.readFileSync('./app/supplyusage.html').toString();
    var $ = cheerio.load(html);
    $('.result_row').empty();
    response.write($.html());
    response.end();
  
};

module.exports = homepage;