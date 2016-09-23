var expect = require('expect');
var Database = require('../app/lib/test.database');

describe('Test Database can', function(){

    before(function(){
        this.database = new Database();
    });

    it('insert and retreive a product', function(){

        this.database.createProduct("pouelle", "patate");

        var product = this.database.findProduct("pouelle");
        expect(product.getProductNum()).toBe("pouelle");
        expect(product.getDescription()).toBe("patate");

    });
});