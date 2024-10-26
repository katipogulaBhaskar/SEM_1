// 18 Function to return the sum of two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Example usage
console.log(addNumbers(3, 5)); // Output: 8

// 19 Function expression to multiply two numbers

const multiply = function(num1, num2) {
    return num1 * num2;
};

// Example usage
console.log(multiply(4, 6)); // Output: 24

// 20  Arrow function to check if a number is even or odd

const isEven = (num) => num % 2 === 0;

// Example usage
console.log(isEven(7)); // Output: false
console.log(isEven(10)); // Output: true

// 21 Function to return a string in uppercase

function toUpperCase(str) {
    return str.toUpperCase();
}

// Example usage
console.log(toUpperCase("hello")); // Output: "HELLO"

// 22 Recursive function to calculate the factorial of a number

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage
console.log(factorial(5)); // Output: 120

// 23 Script demonstrating local and global scope

// Global scope variable
let globalVar = "I am global";

function checkScope() {
    // Local scope variable
    let localVar = "I am local";

    console.log(globalVar); // Accessible here, prints: "I am global"
    console.log(localVar);  // Accessible here, prints: "I am local"
}

checkScope();

console.log(globalVar); // Accessible here, prints: "I am global"
console.log(localVar);  // Error: localVar is not defined, as it is local to the function
