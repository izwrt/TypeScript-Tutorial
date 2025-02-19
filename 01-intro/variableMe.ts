/**
 * TypeScript Basics - Type Annotations
 */

// String Type
let greetings: string = "Hello Ishwar";

// ❌ Error: Type 'number' is not assignable to type 'string'
// greetings = 6;  // This will cause a TypeScript error

// Number Type
let userId: number = 6789.3; // Even decimals are considered numbers in TypeScript

console.log(greetings);

export {}; // Ensures the module scope is maintained
