function setName() {
    console.log("Original function");
}

setName(); // "Original function"

// Someone else in the code accidentally redefines it
function setName() {
    console.log("Oops, I overwrote it!");
}

setName();