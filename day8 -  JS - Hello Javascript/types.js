// JS Data Types:
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_datatypes.asp

// String:
const firstName = 'John';
const lastName = 'Doe';

// Number:
const age = 30;

// Boolean:
const isMarried = false;
const isSingle = true;

// Boolean Expressions:
// Check if a person is single and 30 years old or older 👇
const shouldBeMarried = (isSingle === true && age >= 30);
console.log('shouldBeMarried is', shouldBeMarried);

// Undefined:
let car; 
const bike = undefined;

// Null:
const house = null;

// Object:
const person = {firstName: 'John', lastName: 'Doe', age: 30, isMarried: false};

// Array:
const fruits = ['Apple', 'Banana', 'Mango'];

// Function:
function sayHello() {
  console.log('Hello');
}