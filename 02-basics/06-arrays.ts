// Declaring an array of strings to store superhero names
const superHero: string[] = [];

// Declaring an array of numbers using the generic syntax
const heroPower: Array<number> = [];

// Adding values to the arrays
superHero.push("Shaktiman");
heroPower.push(2);

// Defining a TypeScript type for a User object
type User = {
    name: string;  // User's name must be a string
    isActive: boolean; // Indicates if the user is active (true/false)
};

// Declaring an array that stores objects of type 'User'
const allUsers: User[] = [];

// Adding a new user to the 'allUsers' array
allUsers.push({
    name: "Ishwar",
    isActive: true
});

// Defining a multi-dimensional array (array of arrays) for ML models
const MLModels: number[][] = [
    [255, 255, 255]  // Example array representing some model data
];


export {
    
}