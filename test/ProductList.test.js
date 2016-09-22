var expect = require("expect");
var ProductList = require("../app/ProductList");
var Product = require("../app/Product");

var products = new ProductList(new Array());

var product1 = new Product("MyProduct", "My great product");
var product2 = new Product("YourProduct", "Your lesser product");

products.add(product1);
products.add(product2);

describe('Product List', function(){

    it('can hold multiple products', function(){
        expect(products.get(0).getProductNum()).toEqual("MyProduct");
        expect(products.get(1).getProductNum()).toEqual("YourProduct");
    });

    it('can hold multiple products with different descriptions', function(){
        expect(products.get(0).getDescription()).toEqual("My great product");
        expect(products.get(1).getDescription()).toEqual("Your lesser product");
    });
});