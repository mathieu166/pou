var Product = require('../Product');
var ProductList = require('../ProductList');

var products = new Map();

function TestDatabase() {
}

TestDatabase.prototype.findProduct = function(productId){
    return products.get(productId.toLowerCase());
}

TestDatabase.prototype.createProduct = function(productId, description){
    products.set(productId.toLowerCase(), new Product(productId, description))
}

TestDatabase.prototype.getProductList = function() {

    var prodList = new ProductList(new Array());
    var numberOfProducts = products.size;
    var productIterator = products.values();

    for(i=0; i<numberOfProducts; i++){
        prodList.add(productIterator.next().value);
    }

    return prodList;
}

module.exports = TestDatabase;