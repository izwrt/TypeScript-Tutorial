// ✅ Using Type Aliases in TypeScript
// Type aliases allow you to create custom types for better code organization and readability.

// ✅ Defining a Type Alias
// This creates a reusable type `Point` with `x` and `y` properties as numbers.
type Point = {
    x: number;
    y: number;
  };
  
  // ✅ Function that accepts a parameter of type `Point`
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  
  // ✅ Passing an object that matches the `Point` type
  printCoord({ x: 100, y: 100 });
  
  // ❌ What NOT to do:
  // printCoord({ x: "100", y: 100 }); // ❌ Error: x must be a number
  // printCoord({ x: 100 }); // ❌ Error: Missing y property
  

  // Define an interface with an optional property
type UserType = {
    id: number;
    name: string;
    email?: string; // 'email' is optional
  }
  
  const user1: UserType = { id: 1, name: "Alice" };
  const user2: UserType = { id: 2, name: "Bob", email: "bob@example.com" };
  
  console.log(user1); // Valid: no email provided
  console.log(user2); // Valid: email is provided
  