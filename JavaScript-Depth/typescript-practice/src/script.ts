let product: string = "Samsung TV, 45000.00, In Stock";
let [name_, price, isAvailable] = product.split(",");
let productInfo: string[] = product.split(",");

for (let product of productInfo) {
    console.log(product.trim());
}

// boolean
let isInStock: any = "Yes";
let t: string = "Apple";
isInStock = true;
console.log(`Product is ${t} and It is ${isInStock}`);

let price_: number|undefined = 5;
console.log(price_);