let name1 ="prakash";
console.log(name1);
console.log();


let name: string = "prakash";
let result: number | string;
result = 20;
result = "success";
console.log(name, result);
 console.log();

// trying function in typescript
function add(a: number, b: number): string
{
    return "a + b =  " + (a + b);
}
 
console.log(add(5, 10));
console.log()

let res: number | string ;
res = "a"
console.log(res);