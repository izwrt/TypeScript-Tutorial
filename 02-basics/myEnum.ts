// Defining an enum with explicit values
enum SeatChoice {
    AISLE = 10,  // Explicitly assigned 10
    MIDDLE,      // Automatically becomes 11 (increments from previous value)
    WINDOW = 22, // Manually set to 22
    FOURTH       // Automatically becomes 23 (increments from WINDOW)
}

// Using an enum value
const hcSeat = SeatChoice.WINDOW; // hcSeat will be 22

// Defining a constant enum
const enum SeatChoiceBrokenPattern {
    AISLE = "aisle", // Explicit string value
    MIDDLE = 3,      // Explicit numeric value (must assign a value if mixing types)
    WINDOW = 22,     // Explicit numeric value
    FOURTH           // Automatically becomes 23 (increments from WINDOW)
}

// Using a constant enum value
const BrokenhcSeat = SeatChoiceBrokenPattern.WINDOW; // BrokenhcSeat will be 22

export {};
