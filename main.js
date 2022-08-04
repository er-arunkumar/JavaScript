//object

let personDetails = {
  name: "Arun",
  age: 24,
  gender: "Male",
  qualification: "B.E.,",
  branch: "Mechanical",
  family: {
    father: "selvam",
    mother: "kala",
    brother: "prasanna",
  },
};
personDetails.age = 25;
console.log(personDetails["name"]["age"]);

//Arrays

let favColor = ["Red", "Blue", "Green", "Yellow", "Pink"];
console.log(typeof []);

// Functions

function greet(firstName, lastName) {
  let msg = "Hi, I'm " + firstName + " " + lastName + " God is love";
  console.log(msg);
}

greet("arun", "selvam");

//Ternary Operators
// Problem Statement
/*Age verification using Ternary operator
Condition- Age = Above 18 means Adult, then Below 18, Consider as a Child*/

let age = 24;

let type = age > 18 ? "Adult" : "Child";
console.log(type);

// Logical Operators

// Bank Loan Eligible Project using Logical Operator
// Conditions
/* Check highIncome, CibilScore -> Loan Eligible
  Otherwise, Not Loan Eligible.*/
/* Logical AND, Both operands are True, Logical OR, Anyone operands are True ,Not, Opposite Output*/
let highIncome = true;
let cibilScore = false;

let eligiblePerson = highIncome || cibilScore;
let applicationStatus = !eligiblePerson;

console.log("Loan Creteria:" + eligiblePerson);
console.log("Application Approval Status:" + applicationStatus);

// Logical Operation with Non Boolean Value
// Select Favourite colour Program

let userColor = undefined;
let defaultColor = "Red";

let selectedColor = userColor || defaultColor;

console.log("Selected Color: " + selectedColor);

// Bitwise Operator

// & - Bitwise AND , | - Bitwise OR

// Approval Permission Program using bitwise operator

const workPermission = 1;
const leavePermission = 2;
const executePermission = 4;

let myPermission = 0;

myPermission = workPermission | leavePermission;

let message = workPermission | leavePermission ? "Yes" : "No";

console.log(message);

// If else condition

// If hour is between 12 AM (00:00) to 1 PM (13:00) - Message (Good Morning)
// Else If hour is between 1 PM (13:00) to 5 PM (17:00) - Message (Good Afternoon)
// Else hour is between 5 PM (17:00) to 12 AM (00:00) - Message (Good Evening)
/*Another Method
  Let nowTime = new Date();
  let hours = nowTime.getHours();*/

let nowTime = new Date().getHours();

if (nowTime >= 0 && nowTime <= 13) {
  console.log("Good Morning, Welcome to All !");
} else if (nowTime >= 13 && nowTime <= 17) {
  console.log("Good Afternoon, Welcome to All !");
} else {
  console.log("Good Evening, Welcome to All !");
}

// Switch Case Statement
// CSC Grade System using SwitchCase Statement
/* CSC Grades are 
  Above 90 - Excellent
  90 -80 - Very Good
  80-70 - Good 
  70-60 - Fair
  60-50 - Pass
  49-0 - Fail */

let grade = 95;

switch (true) {
  case (grade >100):
    console.log("Please, Enter range b/w 0 -100.");
    break;
  case (grade > 90):
    console.log("Your Mark is " + grade + ". Excellent");
    break;
  case (grade > 80):
    console.log("Your Mark is " + grade + ". Very Good");
    break;
  case (grade > 70):
    console.log("Your Mark is " + grade + ". Good");
    break;
  case (grade > 60):
    console.log("Your Mark is " + grade + ". Fair");
    break;
  case (grade >= 50):
    console.log("Your Mark is " + grade + ". Pass");
    break;
  case (grade > 0):
    console.log("Your Mark is " + grade + ". Fail");
    break;
  default:
    console.log("Enter vaild number only.");
}
