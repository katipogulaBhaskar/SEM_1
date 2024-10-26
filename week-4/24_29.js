// 24  Object literal representing a car

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car);

// 25 

const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.greet(); // Output: "Hello, my name is Alice."

// 26

const user = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        console.log(`Full Name: ${this.firstName} ${this.lastName}`);
    }
};

user.fullName(); // Output: "Full Name: John Doe"


// 27 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1); // Output: Person { name: 'Alice', age: 30 }

// 28

Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

person1.greet(); // Output: "Hi, I'm Alice and I'm 30 years old."

// 29

Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

person1.greet(); // Output: "Hi, I'm Alice and I'm 30 years old."


