// Tuple Example in TypeScript

// Using Union Type Array (Not a Tuple)
const user1: (string | number)[] = [1, "hc"];

// Defining a Tuple (Fixed Type & Order)
let user: [string, number, boolean];
user = ["hc", 131, true]; // Correct ✅

// Defining an RGB Tuple
let rgb: [number, number, number];
rgb = [255, 255, 255]; // Correct ✅

// Export statement to avoid module scope issues
export {};
