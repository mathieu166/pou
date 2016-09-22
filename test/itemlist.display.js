var cheerio = require('cheerio');
var fs      = require('fs');
var expect  = require('expect');
var itemlist = require('../app/features/itemlist.display');
var $;
describe('Item result parser', function(){

    beforeEach(function(){
        var html = fs.readFileSync('./app/supplyusage.html').toString();
        $ = cheerio.load(html);
    });

    it('creates item list row', function(){
        var template = $('.result_row').first();
        var row = itemlist.createItemRow(template, {"item": "patate", "quantity": 3});

        expect(row('.item_cell').text()).toBe('patate');
        expect(row('.quantity_cell').text()).toBe('3');
    });



});