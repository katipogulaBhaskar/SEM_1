function getGrade(marks) {
    let grade;

    // Convert marks to the nearest tens to simplify the switch case logic
    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = "A";
            break;
        case (marks >= 80 && marks < 90):
            grade = "B";
            break;
        case (marks >= 70 && marks < 80):
            grade = "C";
            break;
        case (marks >= 60 && marks < 70):
            grade = "D";
            break;
        case (marks >= 50 && marks < 60):
            grade = "E";
            break;
        case (marks >= 0 && marks < 50):
            grade = "F";
            break;
        default:
            grade = "Invalid marks"; // For marks outside the 0-100 range
    }

    return grade;
}

// Test cases
console.log("Marks: 95, Grade:", getGrade(95)); // A
console.log("Marks: 82, Grade:", getGrade(82)); // B
console.log("Marks: 76, Grade:", getGrade(76)); // C
console.log("Marks: 64, Grade:", getGrade(64)); // D
console.log("Marks: 55, Grade:", getGrade(55)); // E
console.log("Marks: 43, Grade:", getGrade(43)); // F
console.log("Marks: 105, Grade:", getGrade(105)); // Invalid marks
