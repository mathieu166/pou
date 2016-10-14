var cheerio   = require('cheerio');
var fs        = require('fs');
var $;


module.exports = {

    createItemRow : function(template, values){
        var row = cheerio.load(template.clone().html());
        var anchor = cheerio("<a/>");
        anchor.text(values['productnum'].concat(" - ").concat(values['desc']));
        anchor.attr('href', 'onclick');
        row('.search_item_cell').append(anchor); //.text(values['productnum'].concat(" - ").concat(values['desc']));

        return row;
    }

};