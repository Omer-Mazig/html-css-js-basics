// JS Variables:
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_variables.asp

// This is how we print something in the console 👇
console.log('Hello Javascript');

// This is how we declare a variable 👇
let number = 10;

// This is how we print the value of a variable in the console 👇
console.log(number);

// We can print multiple values in the console like this 👇
let firstName = 'John';
let lastName = 'Doe';
console.log('first name is -', firstName);
console.log('last name is -', lastName);

// We can create new variables by combining the values of other variables like this 👇
// Note: In this case we are adding a space (' ') between the first and last name
let fullName = firstName + ' ' + lastName;
console.log('full name is -', fullName);

// We can change the value of a variable like this 👇
let age = 30;
console.log('age is -', age);
age = age + 1;
console.log('the new age is -', age);

// const is used to declare a constant variable. The value of a constant variable cannot be changed!
const myId = '1234';
myId = '5678'; // This will throw an error because we are trying to change the value of a constant
