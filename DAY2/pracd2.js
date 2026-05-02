 //Question 1: The Guest List Formatter

 let arr=["mp","jp","bk","vinay","abhi"];
arr.shift();
arr.map(x=>console.log(`Guest: ${x}`));


//Question 2: The Logic Gate (Filter & Math)

let arr1=["prakash",1,,2,3,4,6,7,33,24,15,45,,"a"];
let getHighNumbers=arr1.filter(x=> typeof x==="number");

let random=Math.floor(Math.random()*50+1);
console.log(random);
getHighNumbers=arr1.filter(x=> x>random);
console.log(getHighNumbers);


//Question 3: The Price Calculator

let arr2=["30","200","48","100","20"];
arr2.pop();
let sum=0;
let arr3=arr2.map(x=> parseInt(x));
arr3.forEach(y=>sum=sum+y);
console.log(`Total price: ${sum}`);