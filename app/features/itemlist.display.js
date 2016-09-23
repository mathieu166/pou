var cheerio   = require('cheerio');
var fs        = require('fs');
var $;


module.exports = {

    createItemRow : function(template, values){
        var row = cheerio.load('<tr class="result_row"> </tr>');
        var content = cheerio.load(template.html());

        content('.item_cell').text(values['description']);
        content('.quantity_cell').text(values['quantity']);
        row('tr').append(content.html());
        return row;
    }

};
