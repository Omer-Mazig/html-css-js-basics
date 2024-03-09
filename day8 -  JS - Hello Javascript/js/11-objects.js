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

// we can also access the object properties using the bracket notation
// this is useful when the key is a variable (more on that later)
console.log("person['name']", person["name"]); // John
console.log("person['age']", person["age"]); // 30
console.log("person['isMarried']", person["isMarried"]); // false

// we can modify the object properties
console.log("person (before increment)", person); // { name: 'John', age: 30, isMarried: false }
person.age = person.age + 1; // increment the age by 1
console.log("person (after increment)", person); // { name: 'John', age: 31, isMarried: false }
