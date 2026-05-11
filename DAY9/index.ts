let name1 ="prakash";
console.log(name1);
console.log();

let name: string = "prakash";
let result: number | string;
result = 20;
result = "success";
console.log(name, result);
 console.log();


function add(a: number, b: number): string
{
    return "a + b =  " + (a + b);
}
 
console.log(add(5, 10));