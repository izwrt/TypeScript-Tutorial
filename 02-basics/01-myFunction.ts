// Function with explicit number type for the parameter
// The function is expected to return a number but currently returns a string
// TypeScript will show an error because of this mismatch

// Example: Function without explicit return type (Implicit Any)
// If we don’t define the return type, TypeScript will infer it automatically.
// However, this can lead to unexpected behavior.
function ImAny(anything) {
    return anything;
}
ImAny("1")


function addTwo(num: number): number { // Function should return number, but it's returning a string
    return num + 2; // Correct implementation
    // return "Ishwar"; // Incorrect: Type mismatch (string instead of number)
}
addTwo(5);


// Function with explicit string type
function getUpper(val: string): string {
    return val.toUpperCase();
}
getUpper("Ishwar");


// Function without return type (void) since it does not return any value
function signUpUser(name: string, email: string, isPaid: boolean): void {
}
signUpUser("Ishwar", "Ishwar.tu@gmail.com", false);


// Arrow function with explicit parameter types
const loginUser = (name: string, email: string, isPaid: boolean): void => {
}
loginUser("h", "h@h.com", true);


// Function with default parameters
function greetUser(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}
console.log(greetUser()); // Uses default value "Guest"
console.log(greetUser("Ishwar"));


// Function with return type enforcement
function multiplyByTwo(num: number): number {
    return num * 2;
}
console.log(multiplyByTwo(10));



function exampleImplicitReturn(num: number) {
   return "Not a number" // Even though it accepting number the function is any so it can return anything.
}
console.log(exampleImplicitReturn(5));

//if function is not returing anything then we need to use void
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

// Best Practices and Things to Avoid:
// 1. Always define return types explicitly to prevent unexpected behavior.
// 2. Ensure parameter and return types match to avoid TypeScript errors.
// 3. Use default values when applicable to provide fallback values.
// 4. Use void for functions that don't return anything.
// 5. Don't return incorrect types (e.g., returning a string from a function expected to return a number).

export { };

