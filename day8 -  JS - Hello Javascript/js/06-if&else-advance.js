// JS Conditionals
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_if_else.asp

// else if statement
const studentGrade = 85;
if (studentGrade > 90) {
  console.log("A");
} else if (studentGrade > 80) {
  console.log("B");
} else if (studentGrade > 70) {
  console.log("C");
} else if (studentGrade > 60) {
  console.log("D");
} else {
  console.log("F");
}

// remember, we can make it one line if we want
if (studentGrade > 90) console.log("A");
else if (studentGrade > 80) console.log("B");
else if (studentGrade > 70) console.log("C");
else if (studentGrade > 60) console.log("D");
else console.log("F");

// Reminder: the order of the conditions is important!
// the first condition that is true will run and the rest will be ignored.

// Nested if statement.
// Try to avoid using nested if statements as much as possible... it can get messy.
const isRaining = true;
const isCold = true;

if (isRaining === true) {
  if (isCold === true) {
    console.log("Bring an umbrella and a jacket");
  } else {
    console.log("Bring an umbrella");
  }
} else {
  console.log("Enjoy the weather");
}
