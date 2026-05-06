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


 // api-1

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
.then(res => res.json())
.then(obj => obj.results)
.then(arr => arr.filter(p => p.name.startsWith("p")))
.then(arr => arr.map(p => p.name))
.then(console.log);

//api-2
fetch("https://dummyjson.com/products")
.then(res =>res.json())
.then(data => data.products)
.then(data=> data.filter(item=> item.price>50))
.then(data => console.log(data))


//api -3 
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(r => r.json())
  .then(a => a.filter(p => p.userId === 1))
  .then(a => a.map(p => p.title))
  .then(console.log)
  .catch(console.error);

  //api -4
  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
.then(r => r.json())
.then(obj => obj.results)
.then(arr => arr.filter(p => p.name.startsWith("b")))
.then(arr => arr.map(p => p.name))
.then(console.log);

// API5 
fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => console.log(data));
  
//api 6
const url = 'https://coronavirus.m.pipedream.net/';

fetch(url)
  .then(res => res.json())
  .then(data => {
    const deathsOnly = data.rawData
      .map(item => parseInt(item.Deaths)) // Convert strings to numbers
      .filter(deathCount => deathCount > 10000); 

    console.log(deathsOnly);
  })
  .catch(err => console.error(err));
