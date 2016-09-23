var fs          = require('fs');
var cheerio		= require('cheerio');
var url         = require('url');
var itemlist    = require('./features/itemlist.display');

searchrequest = function(request, response, database) {
    var query = url.parse(request.url, true).query;

    var html = fs.readFileSync('./app/supplyusage.html').toString();
    $ = cheerio.load(html);
    var template = $('.result_row').first();

    var product = database.findProduct(query.productrequest);

    if(product){
        itemlist.createItemRow(template, {"description": product.getDescription(), "quantity": 1});

        var html = '<tr class="result_row"><td class="item_cell">'+product.getDescription()+'</td><td class="quantity_cell">5</td><td></td></tr>';

        response.write(html);
    }
    response.end();
  
};

module.exports = searchrequest;