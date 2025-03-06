// Function to detect the type of a given value (number or string)
function detectType(val: number | string) {
    if (typeof val === "string") { 
        // If val is a string, convert it to lowercase
        return val.toLowerCase();
    }
    // If val is a number, add 3 to it
    return val + 3;
}

// Function to check if an ID is provided and convert it to lowercase
function provideId(id: string | null) {
    if (!id) console.log("Please provide ID"); // If id is null, log a message
    id?.toLocaleLowerCase(); // Optional chaining prevents errors if id is null
}

// Interfaces defining User and Admin
interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

// Function to check if an account is an Admin by checking for 'isAdmin' property
function isAdmin(account: User | Admin) {
    if ("isAdmin" in account) // Type narrowing using 'in' operator
        return account.isAdmin; // If 'isAdmin' exists, return its value
    
    return account.name; // Otherwise, return the name
}

// Example usage of isAdmin function
isAdmin({ name: "ishwar", email: "i@i.com" });

// Declaring a variable of type Date
const x: Date = new Date();

// Function to log either a Date or a string
function logValue(x: Date | string): void {
    if (x instanceof Date) { 
        console.log(x); // If x is a Date, log it
    } else {
        console.log(x.toLowerCase()); // If x is a string, convert it to lowercase and log
    }
}

// Defining types for Fish and Bird with respective behaviors
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Type predicate function to check if a pet is a Fish
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined; // Type assertion and property check
}

// Function to determine the type of food based on the pet type
function getFood(pet: Fish | Bird) {
    if (isFish(pet)) { // If pet is a Fish
        pet; // Now TypeScript knows pet is Fish
        return "fish food";
    } else {
        pet; // Now TypeScript knows pet is Bird
    }
}