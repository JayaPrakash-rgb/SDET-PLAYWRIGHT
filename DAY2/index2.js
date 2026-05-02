let a="jp";
let b="bk";
let c="rp";
let d=" hello " +  a  +","+ b +" and "+c+"!";
console.log(d);

// template literals
let e = `hello ${b} , ${a} and ${c} !`;
console.log(e);

// Using template literals to get length
let f=`LENGTH OF THE A ${a.length}`;
console.log(f);

// function table
function table(num){
    for(let i = 1;i<=10;i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
table(5);

//Arrow Functions
let sum = (a,b) => a + b;
console.log("Sum of 10 and 20:",sum(10,20));

//Call back function
let arr = [1, 2, 3, 4, 5,"jp"];

arr 
  .filter(x => typeof x === "number")
  .map(y => y * 2)
  .forEach(x => console.log("Element after number *2:", x));

  // find
let arr2 = [1,2,3,4,5,6];
console.log(arr2.find(x => x >2));
 
//map
let arr3 = [1,2,3,4];
let doubled = arr3.map(x => x * 5);
console.log(doubled);

// parseINt
let val = "5.6";
console.log(parseInt(val)); 
console.log(parseFloat(val)); 


let colors =["red" , "yellow" ,"blue ","black"]; 

 console.log(colors.indexOf("pink"));

 console.log(colors.includes("green"));

 console.log(colors.length);

 console.log(colors[3]);

 console.log(colors[colors.length-1]);
 colors.push("green");

 console.log(colors);

 colors.pop();

 console.log(colors);
  colors.unshift("purple");

 console.log(colors);

 colors.shift();
 console.log(colors);

 console.log(colors.splice(0,1));


 



