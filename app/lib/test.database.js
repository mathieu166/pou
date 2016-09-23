var Product = require('../Product');

var products = new Map();

function TestDatabase() {
}

TestDatabase.prototype.findProduct = function(productId){
    return products.get(productId);
}

TestDatabase.prototype.createProduct = function(productId, description){
    products.set(productId, new Product(productId, description))
}

module.exports = TestDatabase;