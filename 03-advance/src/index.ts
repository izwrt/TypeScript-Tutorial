// User class with access modifiers
class User {
    // Protected property: Can be accessed within the class and subclasses
    protected _courseCount = 1;

    // Readonly property: Cannot be modified after initialization
    readonly city: string = "Managlore";

    // Constructor with public and private parameters
    constructor(public email: string, private name: string) {
        this.email = email;
        this.name = name;
    }

    // Private method: Cannot be accessed outside this class
    private deleteToken() {
        console.log("Token is deleted");
    }

    // Getter for email with an "apple" prefix
        get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    // Getter for _courseCount (only allows reading)
    get courseCount(): number {
        return this._courseCount;
    }

    // Setter for _courseCount (allows modifying with a condition)
    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course should be more than 1");
        }
        this._courseCount = courseNum;
    }
}

// Subclass of User (inherits from User)
class SubUser extends User {
    isFamily: boolean = true;

    // Method to modify _courseCount (allowed because it's protected)
    changeCourseCount() {
        this._courseCount = 4;
    }
}

// Creating an instance of the User class
const ishwar = new User("i@i.com", "ishwar");
console.log(ishwar);

export {
    
}