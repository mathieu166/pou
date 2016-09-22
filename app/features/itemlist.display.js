var cheerio   = require('cheerio');
var fs        = require('fs');
var $;


module.exports = {

    createItemRow : function(template, values){
        var row = cheerio.load(template.clone().html());
        row('.item_cell').text(values['item']);
        row('.quantity_cell').text(values['quantity']);

        return row;
    }

};
