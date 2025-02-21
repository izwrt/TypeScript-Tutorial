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
  