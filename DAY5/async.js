// async and await 

// api->1 
async function ap1() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    const todos = data.filter(d => d.id <= 10);
    console.log(todos);
  } catch (err) {
    console.log("Error", err);
  }
}
ap1();

//api->2
 async function ap2() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const obj = await res.json();
  const names = obj.results.filter(p => p.name.startsWith("p")).map(p => p.name);
  console.log(names);
};
ap2();

//api->3

async function ap3() {
    const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const expensive = data.products.filter(item => item.price > 70);
  console.log(expensive); 
};
ap3();

// API->4
async function ap4(params) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const titles = data.filter(p => p.userId === 1).map(p => p.title);
  console.log(titles);
};
ap4();

// API->5

async function ap5() {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
  const data = await res.json();
  const names = data.filter(c => c.current_price > 1000).map(c => c.name);
  console.log(names);
};
ap5();

//API->6
async function ap6() {
    const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  console.log(data);
};
ap6();

//API->7

async function ap7() {
    const res = await fetch('https://coronavirus.m.pipedream.net/');
  const data = await res.json();
  const deaths = data.rawData.map(item => +item.Deaths).filter(d => d > 10000);
  console.log(deaths);
};
ap7();

//API->8
async function ap8() 
{
    const res = await fetch("https://zenquotes.io/api/quotes");
  const data = await res.json();
  const short = data.filter(q => q.q.length < 100).map(q => q.q);
  console.log(short);
};
ap8();

//API->9
async function ap9() {
    const res = await fetch("http://universities.hipolabs.com/search?country=India");
  const data = await res.json();
  const tech = data.filter(u => u.name.includes("Technology")).map(u => u.name);
  console.log(tech);
};
ap9();

//API->10
async function ap10() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const titles = data.filter(p => p.userId < 5).map(p => p.title);
  console.log(titles);
};
ap10();