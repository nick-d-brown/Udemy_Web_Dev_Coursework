var faker = require("faker");


// ==============MY SOLUTION===============

console.log("============================\n    WELCOME TO MY SHOP     \n============================\n");


for (let i = 0; i <=10; i++) {
    console.log(faker.fake("{{commerce.product}} - ${{commerce.price}}"));
}

// ==============INSTRUCTOR SOLUTION===============

for (let i = 0; i <= 10; i++) {
    console.log("\n" + faker.commerce.productName() + " - $" + faker.commerce.price());
}