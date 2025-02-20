// ✅ TypeScript Object and Function Parameter Destructuring
// Defining a User object
const User = {
    name: "Ishwar",
    email: "ishwar.tu@gmail.com",
    isActive: true
};

// ❌ Incorrect way: You cannot define types inside destructured parameters
// function createUser({name: string, isPaid: boolean}) { }
// ❌ This will give an error because TypeScript does not allow type annotations directly in destructured parameters.

// ✅ Correct way: Define types for parameters separately
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log(`User: ${name}, Paid: ${isPaid}`);
}

// Calling the function
createUser({ name: User.name, isPaid: User.isActive });

// ✅ Function with a return type
function createCourse({ name, isPaid }: { name: string; isPaid: boolean }): { name: string; price: boolean } {
    return {
        name, // Using the provided name
        price: isPaid // Renaming 'isPaid' to 'price'
    };
}

// Calling the function
const course = createCourse({ name: User.name, isPaid: User.isActive });
console.log(course);

// 🔥 Best Practices
// 1️⃣ Always define types **outside** of destructured parameters.
// 2️⃣ Use **Type Aliases** for better readability and maintainability.
// 3️⃣ Ensure that returned values match the expected type.
// 4️⃣ Avoid modifying the original object inside a function.

export {};
