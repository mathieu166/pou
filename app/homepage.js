var fs        = require('fs');
var cheerio		= require('cheerio');
var fillCalendar = require('./calendar/calendar');

homepage = function(request, response, database) {
  var html = fs.readFileSync('./app/homepage.html').toString();
  var $ = cheerio.load(html);

  response.write($.html());
	response.end();
  
};

module.exports = homepage;