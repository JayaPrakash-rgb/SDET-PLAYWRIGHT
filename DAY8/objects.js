//1. Create an object for a student and display all properties dynamically. 

const student ={
    name : "jayaprakash",
    age : 22,
    city : "texas"
}
console.log(student)
console.log();

// 2. Count number of keys in an object. 

const student1 ={
    name : "jaya",
    age : 21,
    city : "hooosur"
}
let count=Object.keys(student1).length;
console.log(count)

//3. Merge two objects into one. 

 let student2 ={
    name : "arun",
    age : 22,
    city : "dallas"
}
let place ={
    country :"India",
    years: 25,
    area : "newyork"
}
let merging = {...student2 , ...place}
console.log(merging);

//4. Convert an object into an array of keys and values. 

 let student3 ={
    name : "priya",
    age : 22,
    city : "hyd"
}
let convert1 = Object.keys(student3);
let convert2=Object.values(student3);          //let convert1 = `${Object.keys(student3)} ---> ${convert2=Object.values(student3)}`
console.log(convert1)
console.log(convert2)
console.log();

// 5. Create a shopping cart object and calculate total bill amount.

let cart = {
    drink :200,
    chocolate:250,
    biscuit :50,
  }
  let  bill = Object.values(cart).reduce((acc,curr) => { return acc+curr });
  console.log(`TOTAL CART BILL : ${bill}`)