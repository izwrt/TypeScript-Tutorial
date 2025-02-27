// Union Type Example
let score: number | string = 33 // Can hold either a number or a string

score = 44
score = "Ishwar"

// Defining Types for User and Admin
type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

// Using Union Type for an Object
let ishwar: User | Admin = {
    name: "ishwar",
    id: 9090
}

ishwar = {
    username: "izwrt",
    id: 8080
}

// Function with Union Type Parameter
function getDbId(id: number | string) {
    // Making API calls
    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

// Handling Type Inside Function
function getDbIdSolved(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase() // Works because we checked the type
    } else {
        id + 2 // Works only for numbers
    }
}

// Array with Union Types
const data: number[] = [1, 2, 3] // Array of numbers
const data2: string[] = ["1", "2", "3"] // Array of strings
const data3: number[] | string[] = ["1", "2", "3"] // Either number[] or string[]
const data4: (number | string)[] = [1, 2, "3"] // Array containing both numbers and strings

// Literal Type Example
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" // ❌ This will cause an error
seatAllotment = "window"
