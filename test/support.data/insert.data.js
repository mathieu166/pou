
function InsertData(){
}

InsertData.prototype.in = function(database){
    this.database = database;
    return this;
};

InsertData.prototype.from = function(data){
    for (i=0; i<data.products.length; i++) {
        this.database.createProduct(data.products[i].productId, data.products[i].description);
    }
};

module.exports = InsertData;