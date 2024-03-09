// JS Objects
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_objects.asp

// - Objects are variables too, but they can contain many values.
// - The values are written as key-value pairs ('key' and 'value' separated by a colon).

let person = {
  name: "John", // key: name, value: "John"
  age: 30, // key: age, value: 30
  isMarried: false, // key: isMarried, value: false
};

// we can access the object properties using the dot notation
console.log("person.name", person.name); // John
console.log("person.age", person.age); // 30
console.log("person.isMarried", person.isMarried); // false

// we can modify the object properties
console.log("person (before increment)", person); // { name: 'John', age: 30, isMarried: false }
person.age = person.age + 1; // increment the age by 1
console.log("person (after increment)", person); // { name: 'John', age: 31, isMarried: false }

// we can add new properties to the object
person.city = "New York";
console.log("person (after adding city)", person); // { name: 'John', age: 31, isMarried: false, city: 'New York' }

// we can delete properties from the object
delete person.city;
console.log("person (after deleting city)", person); // { name: 'John', age: 31, isMarried: false }

// we can also access the object properties using the bracket notation
// this is usful in some cases. more on this later...
console.log("person['name']", person["name"]); // John

// we can add functions to the object. these are called methods
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  drive: function () {
    console.log("driving...");
  },
};

car.drive(); // driving...

// we can also add objects to the object
let bankAccount = {
  accountNumber: "123456",
  balance: 1000,
  owner: {
    name: "Omer",
    age: 30,
  },
};

console.log("bankAccount.owner.name", bankAccount.owner.name); // Omer
