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

        var html = "<ul class='list-group'>";
        for(i=0; i<productsFound.size(); i++){
            var anchor = cheerio("<a/>");
            anchor.text(productsFound.get(i).getProductNum().concat(" - ").concat(productsFound.get(i).getDescription()));
            anchor.attr('href', 'javascript:$("#item_input").val("'+productsFound.get(i).getProductNum()+'"); sendrequest();');
            anchor.attr('class', 'list-group-item');
            /*var row = autosearchItemList.createItemRow(template,
            {"productnum": productsFound.get(i).getProductNum(),
             "desc": productsFound.get(i).getDescription()});
             */
            html = html.concat(anchor);
        }
        html += "</ul>"
        response.write(html);
    }

    response.end();

};

module.exports = autosearchrequest;