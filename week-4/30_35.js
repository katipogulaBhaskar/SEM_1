// 30

const fruits = ["apple", "banana", "cherry", "date"];
console.log("First fruit:", fruits[0]); // Output: apple
console.log("Last fruit:", fruits[fruits.length - 1]); // Output: date


// 31

const colors = ["red", "green", "blue"];
colors.push("yellow"); // Adds "yellow" at the end
console.log("After push:", colors); // Output: ["red", "green", "blue", "yellow"]

colors.pop(); // Removes the last element "yellow"
console.log("After pop:", colors); // Output: ["red", "green", "blue"]


// 32

const animals = ["lion", "tiger", "bear"];
animals.shift(); // Removes "lion" from the beginning
console.log("After shift:", animals); // Output: ["tiger", "bear"]
animals.unshift("elephant"); // Adds "elephant" at the beginning
console.log("After unshift:", animals); // Output: ["elephant", "tiger", "bear"]

// 33

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 34
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4, 6, 8]


// 35

const values = [10, 20, 30, 40, 50];
const sum = values.reduce((total, current) => total + current, 0);
console.log("Sum of values:", sum); // Output: 150

