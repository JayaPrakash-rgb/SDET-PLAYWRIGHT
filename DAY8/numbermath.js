//  Numbers & Math 

// 1. Generate a random number between 1 and 100.

function getrandom(min,max){
    return Math.floor(Math.random () * (max - min +1))+min;
}
const result = getrandom(1,100);
console.log(`random number : ${result}`);

//2. Check whether a number is prime. 

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true;  
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));  
console.log(isPrime(10)); 
console.log();

//3. Find factorial of a number using loops. 
function Factorial(num) {
    if (num < 0) return "Invalid Input";
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i; 
    }
    return result;
}

console.log(Factorial(5));
console.log(Factorial(0)); 
console.log();

//4. Find Fibonacci series up to n numbers. 
function getFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }

    return series;
}

console.log(getFibonacci(5)); 
console.log();

// 5. Check whether a number is Armstrong number. 

function isArmstrong(num) {
    const strNum = String(num);
    const numDigits = strNum.length;
    let sum = 0;
  
    for (let char of strNum) {
        
        sum += Math.pow(parseInt(char), numDigits);
    }

    if (sum === num) {
        return `${num} is an Armstrong number`;
    } else {
        return `${num} is not an Armstrong number`;
    }
}

console.log(isArmstrong(153));  
console.log(isArmstrong(123));  