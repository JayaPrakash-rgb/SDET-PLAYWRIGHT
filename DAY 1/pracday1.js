//Q1 The Swapper
console.log("Question 1: ");

let a = 55;
let b = 66;
console.log("Before Swapping value of a:", a);
console.log("Before Swapping value of b:", b);

let temp = a;
a = b;
b = temp;

console.log("After Swapping value of a:", a);
console.log("After Swapping value of b:", b);

//Q2 Type Checker
console.log();
console.log("Question 2: ");
function typeChecker(input) {
  if (typeof input === "number") {
    console.log("This is a number");
  } else if (typeof input === "string") {
    console.log("This is a string");
  } else {
    console.log("Invalid Type");
  }
}

typeChecker("prakash");
typeChecker(123);

//Q3 Initials Creator
console.log();
console.log("Question 3: ");

let fullName = "John Doe";
let firstWord = fullName[0];
let spaceIndex = fullName.indexOf(" ");
let secondWord = fullName[spaceIndex + 1];

let combinedWords = firstWord + secondWord;
console.log(combinedWords);

//Q4 The Cleaner
console.log();
console.log("Question 4:");
let str = " JavaScript is fun ";
console.log(str.trim().toLowerCase());

//Q5The Grocery List
console.log();
console.log("Question 5:");
let cart = ["jam", "bun", "drink"];

console.log("Adding Milk to the end: ");
cart.push("Milk");
console.log(cart);

console.log("Adding Eggs to the beginning: ");
cart.unshift("Eggs");
console.log(cart);

console.log("Removing the last item from the array: ");
cart.pop();
console.log(cart);

//Q6 Value Finder
console.log();
console.log("Question 6:");

let numbers = [10, 20, 30, 40, 50];
let found = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 30) {
    found = true;
  } 
  if(numbers[i] == 50){
    console.log("50 is found at index",i);
  } 
}
console.log(found);