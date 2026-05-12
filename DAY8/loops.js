//Print star pyramid patterns. 

let n=5;
for(let i=0;i<=n;i++)
{
    console.log(" * ".repeat(i));


    
}// 2. Print multiplication tables from 1 to 10. 

for (let i = 1; i <= 10; i++) {
    console.log(`\nmultiplication table of ${i}: `)
    for (let j = 1; j <= 10; j++) {
       console.log(`${i} * ${j} = ${i * j}`);
    }
}


