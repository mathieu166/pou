var method = Product.prototype;

function Product(productId, desc) {
    this.productNum = productId;
    this.description = desc;
}

method.setProductNum = function(value){
    this.productNum = value;
}

method.setDescription = function(value){
    this.description = value;
}

method.getProductNum = function() {
    return this.productNum;
}

method.getDescription = function() {
    return this.description;
}

module.exports = Product;