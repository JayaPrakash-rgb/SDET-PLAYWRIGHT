//let attempt = 0
//const data=
//setInterval(() => {attempt++;console.log( `attempt ${attempt} :finding data.. `);
   // if (attempt >=5 ){
   //     clearInterval(data);
      //  console.log("done with attempts");
   // }
//},3000)

 // fetching data from API

 fetch("https://jsonplaceholder.typicode.com/todos")
 .then(res => res.json())
 .then(data =>data.filter( d => d.id%2 !== 0))
 .then(data => data.map(d => (d.title = "here we go ->"+d.title)))
  .then(data=> console.log(data))
 .catch(error => console.log("error:",error));
