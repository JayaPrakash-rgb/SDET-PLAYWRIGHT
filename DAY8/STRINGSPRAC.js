// Strings .
// ->> 1. Reverse a string without using built-in reverse methods. 

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("JAVASCRIPT")); 
console.log(reverseString("MALAYALAM"));
console.log();

//2. Count the number of vowels in a string. 

function vowels(str){
    return str
               .toUpperCase()
               .split("")
               .filter(char => "AEIOU".includes(char))
               .length
           
}
console.log(vowels("aeiounnnaaa"));

// 3. Check whether a string is a palindrome. 

function palindrome(str){
       const givenstring = str.toUpperCase()
       const reversestring =givenstring.split("") .reverse().join("")
          if  (givenstring === reversestring) {
            return  `${str} :GIVEN STRING IS palindrome. `
          }
          else 
          return   `${str} :GIVEN STRING IS not palindrome. `
}
console.log(palindrome("madam"));
console.log(palindrome("hero"));
console.log();

// 4. Capitalize the first letter of every word in a sentence. 

function cap(str){
    const capitalized = str 
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
          return `given string : ${str} ---> after capitalization : ${capitalized}`
}
console.log(cap("aeiou"));

// 5. Find the longest word in a sentence.  
function long(sent){
    const words = sent.split(" ");
    const longest = words.reduce((current , next)=>{
        return next.length > current.length ? next : current ;
    },"");
    return `original : ${sent} --> longest word : ${longest}`;
}
console.log(long("aaaaaaaa nn bbbbbb"));