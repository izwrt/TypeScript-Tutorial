// ✅ Understanding `never` in TypeScript
// The `never` type represents values that never occur. It is often used for:
// 1️⃣ Functions that throw errors
// 2️⃣ Infinite loops
// 3️⃣ Exhaustive type checking in switch cases

// ✅ Example 1: Function that always throws an error
function throwError(message: string): never {
    throw new Error(message);
}

// throwError("Something went wrong!"); // ❌ This function never returns

// ✅ Example 2: Infinite Loop (Function that never completes)
function infiniteLoop(): never {
    while (true) {
        console.log("Running forever...");
    }
}

// infiniteLoop(); // ❌ Will run indefinitely

// ✅ Example 3: Using `never` for Exhaustive Checking in Switch Cases
type Status = "success" | "error" | "loading";

function handleStatus(status: Status) {
    switch (status) {
        case "success":
            console.log("Operation was successful");
            break;
        case "error":
            console.log("An error occurred");
            break;
        case "loading":
            console.log("Loading...");
            break;
        default:
            const unreachable: never = status; // ❌ Ensures all cases are handled
            throw new Error(`Unhandled status: ${status}`);
    }
}

// ✅ Best Practices
// 1️⃣ Use `never` to ensure all cases are handled in switch statements.
// 2️⃣ Use `never` for functions that always throw an error or run indefinitely.
// 3️⃣ Avoid returning `never` from functions that might eventually return something.

export { };

