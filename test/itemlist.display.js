var cheerio = require('cheerio');
var fs      = require('fs');
var expect  = require('expect');
var $;
describe('Item result', function(){

    beforeEach(function(){
        var html = fs.readFileSync('./app/supplyusage.html').toString();
        $ = cheerio.load(html);
    });

    it('shows item in results', function(){

    });
});