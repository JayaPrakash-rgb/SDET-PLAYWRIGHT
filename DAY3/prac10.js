// ### **Level 1: 1. The Warm-up (.forEach )**

const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(
    names => {
        console.log (`hello  ${names}`);
    }
)

//**2. Temperature Conversion**  (. map)
const celsiustemp =[0,10,20,30];
const Fahrenheittemp =celsiustemp.map (celsiustemp => celsiustemp * 1.8 + 32);
console.log(Fahrenheittemp);

//### **Level 2:  3.Data Filtering** (Finding Adults)

 const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 } ,{name : 'jp' , age: 18}];
 const adult = users.filter(users => users.age >=18);
 console.log(adult);

 //**4. String Lengths**

  const arr1 = ['abc' , 'aabbcc', 'a','aaaaaaaaa', 'bb' ,'ccccccc'];
  const words = arr1.filter(arr1  => arr1.length >5 );
  console.log(words);

//### **Level 3: The Power of Reduce**
//**5. Total Cost**

const prices= [19.99, 5.50, 3.99, 25.00]  ;
const total = prices.reduce( (acc,curr) => {return acc + curr},0);
console.log(total);

//**6. Counting Occurrences**
 const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const appleCount = fruits.reduce((count, fruit) => {
return fruit === 'apple' ? count + 1 : count;
}, 0);
console.log(appleCount);

// ### **Level 4: Advanced Scenarios**
// **7. Array Transformation**

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
.filter(num => num % 2 === 0)
.map( num => num * num );
console.log(result);

// **8. Object Extraction**

 const product = [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }];
 const title = product.map( product => product.title);
 console.log(title);

 //### **Level 5: Logic Challenges**
// **9. The Average**

const tresults = [80, 90, 70, 100];
const avg = tresults.reduce(( acc ,curr) => acc + curr  )/ tresults.length;
console.log(avg);

//**10. Flattening (The Bonus)**

const  arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.reduce((acc ,curr) => acc.concat(curr),[]);
 console.log(flat)
