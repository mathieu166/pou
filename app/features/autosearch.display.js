var cheerio   = require('cheerio');
var fs        = require('fs');
var $;


module.exports = {

    createItemRow : function(template, values){
        var row = cheerio.load(template.clone().html());
        row('.search_item_cell').text(values['productnum'].concat(" - ").concat(values['desc']));

        return row;
    }

};