// first 
// Initialization
const fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing by index (Zero-based indexing)
console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 3

// 2nd
const cars = ["BMW", "Tesla", "caorala"];
console.log(cars[0]); // Output: Bmw

// 3rd
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.length); // Output: 5

// 4th
const mixed = [1, "Hello", true, null, {id: 1}];
console.log(mixed);

// 5th
let colors = ["Red", "Green"];
colors.push("Blue"); 
// Adds "Blue" to the end
console.log(colors)
// Result: ["Red", "Green", "Blue"]

// 6th
let pets = ["Dog", "Cat", "Bird"];
pets.pop(); // Removes "Bird" from the end
console.log(pets);
// Result: ["Dog", "Cat"]

// 7th
const animals =["cat" , "monkey","dog"];
const removedanimals = animals.shift();
console.log(removedanimals);
console.log(animals);