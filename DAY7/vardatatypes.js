//Variables & Data Types.

//1. Create a program that swaps two numbers without using a third variable.
let a=10;
let b=20;
console.log("a before swaping = ",a);
console.log("b before swaping=",b);
[a,b]=[b,a];
console.log("a=",a);
console.log("b=",b);
console.log();
//2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.

function typeChecker(value){
    if(value === null){
        console.log(`The given data is null : ${value}`)
    }
    else if(value === undefined){
        console.log(`The the given data is undefined: ${value}`)
    }
    else {
        const type = typeof value ;
        switch (type) {
            case "number":
                console.log(`given value is a number: ${value}`)
                break;
            case "string":
                console.log(`given value is string: ${value}`)
                break;
            case "boolean":
                console.log(`given value is boolean:${value}`)
                break;
            }
    }
}
typeChecker(null);
typeChecker(undefined);
typeChecker("jayaprakash");
typeChecker(100);


//3. Convert temperature from Celsius to Fahrenheit using variables.

let celsiustemp =[19.99, 5.50, 3.99, 25.00];
let Fahrenheit= celsiustemp.map(celsiustemp => celsiustemp* 1.9+32);
let hot =Fahrenheit.filter( hot => hot> 60);
console.log( hot);

// 4.Create a simple calculator using variables and arithmetic operators.

let y=10;
let z= 20;
let operator = "+";
let result ;
switch (operator){
    case "+":
        result = y+z;
        break;
    case "-":
    result =y-z;
     break;
     case "*":
        result = y*z;
        break;
    case "/":
        result = z !== 0 ? y/ z : "Error: Division by zero";
        break;
}
console.log(`${y} ${operator} ${z} = ${result}`);


//5. Write a program that takes a user’s birth year and calculates age.
let birthyear = 2004;
let currentyear = new Date().getFullYear();
let age = currentyear - birthyear;
console.log(`if he/she born in ${birthyear} then ,now his/her age is : ${age} `);