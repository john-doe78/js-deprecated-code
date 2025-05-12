let username = prompt("Enter username: ")
let designation = prompt("Enter designation: ")
let productName = prompt("Product name: ")

class Product {
    // let name = "TV";

    name = "TV"; // property
    productName;
    hello() { // method
        var x = 10;
    }
    Product() { // constructor

    }
    // accessor
    get productName() {
        return this.productName;
    }

    set productName(name) {
        if (designation === "admin") {
            this.productName = name;
        } else {
            document.write("Unauthorized");
        }
    }
}

let obj = new Product();
obj.productName = productName;


// every derived class constructor must have a super call
class BaseClass {
    constructor(message) {
        document.write("Base Class Constructor " + message);
    }
}

class DerivedClass extends BaseClass {
    constructor() {
        super("Hello");
        document.write("Child Class Constructor");
    }
}