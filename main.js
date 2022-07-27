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

function greet(firstName, lastName){

    let msg = "Hi, I'm " + firstName +" "+ lastName + " God is love";
    console.log(msg);
    

}

greet('arun','selvam')

//Ternary Operators
// Problem Statement
/*Age verification using Ternary operator
Condition- Age = Above 18 means Adult, then Below 18, Consider as a Child*/

let age = 24;

let type = age > 18 ? "Adult":"Child";
console.log(type);

// Logical Operators

// Bank Loan Eligible Project using Logical Operator
// Conditions
/* Check highIncome, CibilScore -> Loan Eligible
  Otherwise, Not Loan Eligible.*/

  let highIncome =true;
  let cibilScore =false;

  console.log(highIncome && cibilScore); // Logical AND, Both operands are True
  console.log(highIncome || cibilScore); // Logical OR, Anyone operands are True
  console.log(!highIncome); // Not, Opposite Output



