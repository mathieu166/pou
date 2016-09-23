var fs          = require('fs');
var cheerio		= require('cheerio');
var url         = require('url');
var AutoSearch    = require('./AutoSearch');
var autosearchItemList = require('./features/autosearch.display');

autosearchrequest = function(request, response, database) {
    var query = url.parse(request.url, true).query;

    var html = fs.readFileSync('./app/supplyusage.html').toString();
    $ = cheerio.load(html);
    var template = $('.resultsfound').first();

    var allProductsList = database.getProductList();
    var autosearcher = new AutoSearch(allProductsList);
    var productsFound = autosearcher.displayProductList(query.productinput);

    if(productsFound){

        var html = "";
        for(i=0; i<productsFound.size(); i++){

            var row = autosearchItemList.createItemRow(template,
            {"productnum": productsFound.get(i).getProductNum(),
             "desc": productsFound.get(i).getDescription()});

            html = html.concat(row.html());
        }

        response.write(html);
    }

    response.end();

};

module.exports = autosearchrequest;