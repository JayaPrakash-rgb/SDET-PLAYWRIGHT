let str = "i am human"

// String operations

console.log("GIVEN STRING :" ,str);
console.log("convert string into uppercase :",str.toUpperCase());
console.log("convert the string into lowercase :",str.toLowerCase());
console.log("LENGTH OF THE STRING :",str.length);
console.log("sub string of given string :",str.substring(0,7));

// Mathematical operations
let a=10;
let b=20;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// Logical operations
console.log("a > b:", a > b); 
console.log("a < b:", a < b);
console.log("a == b:", a == b);
console.log("a != b:", a != b); 
console.log("a >= b:", a >= b); 
console.log("a <= b:", a <= b); 

//JavaScript Object
let data ={
    name:"jp",
    age: 22,
    city:"newyork"
}

console.log("name :", data.name);
console.log("age :",data.age);
console.log("city:",data.city);
console.log("object :",data );

//ARRAY METHODS // push //pop //unshift // shift
console.log()  // to give gap between upper output and this output
console.log("array methods ->push ,pop,shift ,unshift");
let cart=["chocolate","biscuit"];

console.log(cart);

console.log("using push to add item at end of the array");
cart.push("DRINK","softdrink");
console.log(cart);

console.log("using pop to remove last element of array ");
cart.pop("softdrink");                                          // no mater what we given to pop in bulit it will remove last element.
console.log(cart);

console.log("using unshift to add element in starting of array");
cart.unshift("shoes","footwear");
console.log(cart);

console.log ("using shift to remove element in the start of the array")
cart.shift("shoes");
console.log(cart);



// finding index value
console.log();
let arr=[1,2,3];
let found =false;
 for(  let i=0 ;i<=arr.length;i++)
 {
    if(arr[i]==3){
     found=i;
    }
 }
 console.log("index of the number :",found);


 //type checker 

 function typeChecker(input){
    if(typeof input === "number" ){
        console.log("given input is numbere:" ,input);
    }
    else if (typeof input === "string"){
        console.log("given input is string :",input);
    }
    else {console.log("invalid",input)};
 }
 typeChecker("jayaprakash");
 typeChecker(123);

 //// template literals
 let k="jp";
 let l="is";
 let m="human";

 let n=`${k} ${l} ${m} `;
 console.log(n);

 function table(num){
   for( let i=1 ; i<=10 ; i++)
   {
    console.log(`-> ${i}  * ${num}  = ${i*num}`)
   }
 }
 table(5);

 //Arrow Functions

 let sum = (a,b) => a+b;
 console.log("sum : ",sum(10,20));

 //

 let arr1 =[1,2,3,4];
 console.log(`single value >2 : ${arr1.find( x => x> 2)}`);  // it find single value.                                           // find 
 console.log()
 console.log(`filtered value: ${arr1.filter( x => x> 2)}`);  //it filter the values and give that >2.                        // filter 
 console.log()
  console.log(`indexvalue: ${arr1.findIndex( x => x> 2)}`);  // it find the index of the single greater value.         //findIndex
  console.log()
let double = arr1.map(x => x + x)                                                                                    // map
console.log(`doubled value : ${double}`); 

// parseINt
let val = ['5.6','7.9'];

let result = val.map(x=>parseInt(x));                // parseInt value -> it returns interger

let rel1 = val.map(x=>parseFloat(x));               // parseFloate vale -> it returns decimal value
console.log(result);
console.log(rel1);

