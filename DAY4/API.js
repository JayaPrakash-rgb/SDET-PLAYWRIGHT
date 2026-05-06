//let attempt = 0
//const data=
//setInterval(() => {attempt++;console.log( `attempt ${attempt} :finding data.. `);
   // if (attempt >=5 ){
   //     clearInterval(data);
      //  console.log("done with attempts");
   // }
//},3000)

 // fetching data from API

 // api-1
 fetch("https://jsonplaceholder.typicode.com/todos")
 .then(res => res.json())
 .then(data =>data.filter( d => d.id%2 !== 0))
 .then(data => data.map(d => (d.title = "here we go ->"+d.title)))
  .then(data=> console.log(data))
 .catch(error => console.log("error:",error));


 // api-2

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
.then(res => res.json())
.then(obj => obj.results)
.then(arr => arr.filter(p => p.name.startsWith("p")))
.then(arr => arr.map(p => p.name))
.then(console.log);

//api-3
fetch("https://dummyjson.com/products")
.then(res =>res.json())
.then(data => data.products)
.then(data=> data.filter(item=> item.price>50))
.then(data => console.log(data))


//api -4
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(r => r.json())
  .then(a => a.filter(p => p.userId === 1))
  .then(a => a.map(p => p.title))
  .then(console.log)
  .catch(console.error);

  //api -5
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
   .then(r => r.json())
   .then(arr => arr) // already array
   .then(arr => arr.filter(c => c.current_price > 1000))
   .then(arr => arr.map(c => c.name))
   .then(console.log);

// API-6
fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(data => console.log(data));
  
//api -7
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

// api-8

  fetch("https://zenquotes.io/api/quotes")
  .then(r => r.json())
  .then(arr => arr.filter(q => q.q.length < 100))
  .then(arr => arr.map(q => q.q))
  .then(console.log)
  .catch(console.error);


//API -9

fetch("http://universities.hipolabs.com/search?country=India")
   .then(r => r.json())
   .then(arr => arr.filter(u => u.name.includes("Technology")))
   .then(arr => arr.map(u => u.name))
   .then(console.log);

   //api -10

   fetch("https://jsonplaceholder.typicode.com/posts")
  .then(r => r.json())
  .then(a => a.filter(p => p.userId <5))
  .then(a => a.map(p => p.title))
  .then(console.log)
  .catch(console.error);
