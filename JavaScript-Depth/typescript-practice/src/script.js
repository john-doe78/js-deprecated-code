var product = "Samsung TV, 45000.00, In Stock";
var _a = product.split(","), name_ = _a[0], price = _a[1], isAvailable = _a[2];
var productInfo = product.split(",");
for (var _i = 0, productInfo_1 = productInfo; _i < productInfo_1.length; _i++) {
    var product_1 = productInfo_1[_i];
    console.log(product_1.trim());
}
// boolean
var isInStock = "Yes";
var t = "Apple";
isInStock = true;
console.log("Product is ".concat(t, " and It is ").concat(isInStock));
var price_ = 5;
console.log(price_);
