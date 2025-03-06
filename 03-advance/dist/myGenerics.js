"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
console.log(identityThree(24));
console.log(identityFour("water"));
identityFour({ brand: "Cloast", type: 500 });
function identityFive(val1, val2) {
    console.log(`bootle brand is ${val1} and type is ${val2}`);
}
identityFive("Closter", 500);
function typeCasting(val) {
    return 3;
}
function withouTypeCasting(val) {
    return 3;
}
function getSearchProduct(Product) {
    const myIndex = 3;
    return Product[myIndex];
}
const getMoreSerachProduct = (Product) => {
    const myIndex = 3;
    return Product[myIndex];
};
const anotherFunction = (value1, val2) => {
    return {
        value1,
        val2
    };
};
anotherFunction(3, "4");
