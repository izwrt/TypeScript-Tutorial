/**
 * Abstract Class: TakePhoto
 * -------------------------
 * - This is an abstract class, meaning it cannot be instantiated directly.
 * - It acts as a blueprint for classes that extend it.
 * - It contains:
 *   1. A constructor that accepts 'cameraMode' and 'filter' as properties.
 *   2. An abstract method 'Story()' that must be implemented by any subclass.
 *   3. A normal method 'Login()' that returns a string.
 */
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    // Abstract method - Must be implemented in subclasses
    abstract Story(): void;

    // Regular method - Can be used as it is in subclasses
    Login() {
        return "Logged In...!";
    }
}

/**
 * Class: Insta (Extends TakePhoto)
 * --------------------------------
 * - This class extends the abstract class 'TakePhoto'.
 * - It must implement the abstract method 'Story()'.
 * - It also inherits the 'Login()' method from TakePhoto.
 */
class Insta extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) {
        // Call the parent class (TakePhoto) constructor
        super(cameraMode, filter);
    }

    // Implementing the abstract method
    Story(): void {
        console.log("New Story Added");
    }
}

// Creating an instance of Insta
const tp = new Insta("test", "Test");

// Calling the inherited 'Login' method
console.log(tp.Login()); // Output: "Logged In...!"

// Calling the implemented 'Story' method
tp.Story(); // Output: "New Story Added"
