// 5. Template Literal Types for CSS
//Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
//Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.


type units="px"|"rem"|"vh";
type MarginValue=`${number}${units}`;
let a:MarginValue="50px";
let b:MarginValue="9rem";
// let c:MarginValue="hero"; // it gives error because it doesnt match the te plate.
console.log(a);
console.log(b);
//console.log(c);