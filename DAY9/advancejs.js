// DEFAULT PARAMETERS


function welcome (name ="members"){                   

    console.log(`welcome on to the board ${name}!`)

}
welcome("jaya prakash");
welcome();                      // here it take the default parameters as members if no name or inputs is not given 
                               // if we wont mention any default papas in function it returns as --> welcome undefine.

                               console.log()
// spread operator

const num =[1,2,3]
const newnum = [...num,4,5,6]   // (...) -> this will first pack array and when we call it will unpack the array in output.
console.log(newnum);
  console.log();  


// using in obj
const obj={name:"prakash", age:25}
const updatedObj = {...obj, city:"texas"};
console.log(updatedObj);


const cal = { // rest operator
    sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
}

console.log(cal.sum(1, 2, 43, 4))

// destructuring
// const arr = ["Aryan", "Arush", "Vivek", "Rohit"];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

const [first, second, third, fourth, fifth] = ["Aryan", "Arush", "Vivek", "Rohit"]; // pos-based extraction
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

const { name, age } = {name: "aryan", age: 25}; // key-based extracted
console.log(name, age);