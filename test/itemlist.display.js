var Browser = require('zombie');
var cheerio = require('cheerio');
var fs      = require('fs');
var expect  = require('expect');
var itemlist = require('../app/features/itemlist.display');
var TestDatabase = require('../app/lib/test.database');
var $;
describe('Item result parser', function(){

    beforeEach(function(){
        var html = fs.readFileSync('./app/supplyusage.html').toString();
        $ = cheerio.load(html);
    });

    it('creates item list row', function(){
        var template = $('.result_row').first();

        var row = itemlist.createItemRow(template, {"description": "patate", "quantity": 3});

        expect(row('.item_cell').text()).toBe('patate');
        expect(row('.quantity_cell').text()).toBe('3');
    });

    describe('is beeing called from ajax call', function(){

        before(function(done) {
            var database = new TestDatabase();
            this.server = require('http').createServer(function(request, response) {
                require('../app/servlet/router').endPointOf(request)(request, response,database);
            }).listen(3000);

            this.browser = new Browser();

            this.browser.visit('http://localhost:3000/searchrequest?productrequest=P00281', function() {
              done();
            });
        });

        it('and respond successfully', function(){
            this.browser.assert.success();

        });
    });


});