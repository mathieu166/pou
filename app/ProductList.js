var method = ProductList.prototype;

function ProductList() {
    this.productArray = new Array();
}

function ProductList(list) {
    this.productArray = list;
}

method.add = function(value) {
    this.productArray.push(value);
}

method.get = function(value) {
    return this.productArray[value];
}

module.exports = ProductList;