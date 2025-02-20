/**
 * TypeScript Basics - Type Annotations
 */

// String Type
let greetings: string = "Hello Ishwar";
console.log(greetings);

// ❌ Error: Type 'number' is not assignable to type 'string'
// greetings = 6;  // This will cause a TypeScript error

// Number Type
let userId: number = 6789.3; // Even decimals are considered numbers in TypeScript

// Not good practice 
// let userId:number
// userId = 6789.3; // Here you just overuse the TypeScript

// boolean
let isLoggedIn: boolean = false;


export { }; // Ensures the module scope is maintained

