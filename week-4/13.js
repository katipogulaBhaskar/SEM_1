// 13  for loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 14 while loop to print the first 5 even numbers

let count = 0;
let num = 2;

while (count < 5) {
    console.log(num);
    num += 2; // Increment by 2 to get the next even number
    count++;
}

//15 do...while loop to prompt the user until they enter "stop"

let userInput;
do {
    userInput = prompt("Enter something (type 'stop' to end):");
} while (userInput.toLowerCase() !== "stop");

console.log("Loop ended.");
 
//16  for...in loop to iterate over the properties of an object

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let property in car) {
    console.log(`${property}: ${car[property]}`);
}

//17 for...of loop to iterate over the elements of an array

let fruits = ["apple", "banana", "cherry", "date"];

for (let fruit of fruits) {
    console.log(fruit);
}



