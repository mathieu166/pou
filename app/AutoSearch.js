var ProductList = require('./ProductList');
var method = AutoSearch.prototype;

var cheerio   = require('cheerio');
var fs        = require('fs');
var $;

function AutoSearch() {
    this.productList = new ProductList();
}

function AutoSearch(value) {
    this.productList = value;
}

method.setProductList = function(value){
    this.productList = value
}

method.getProductList = function(){
    return this.productList;
}

method.displayProductList = function(value) {
    var listToDisplay = new ProductList(new Array());
    for(i=0; i < this.productList.size(); i++){
        if(this.productList.get(i).getProductNum().toLowerCase().startsWith(value.toLowerCase())){
            listToDisplay.add(this.productList.get(i));
        }
    }

    return listToDisplay;
}

module.exports = AutoSearch;