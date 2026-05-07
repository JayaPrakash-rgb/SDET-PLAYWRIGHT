const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

const FlightData = (flights) => {                                              
  const result = flights.map(flightString => {
      const [route, ticketprice] = flightString.split(':');                   //spliting string 
      const [fromcityA, tocityB] = route.split('-');
     let price = Number(ticketprice);

if (isNaN(price)) {
  price = 0;                                                                //Convert price and handle NaNs
} 
else {
  price = price; 
}
return { fromcityA, tocityB, price };                                        //Object Creation
    })
    .filter(flight => flight.price >= 100 && flight.price <= 500)
    .sort((a, b) => a.price - b.price);                                   //(ascending)
  return JSON.stringify(result);                                     // Return as a JSON string
};


const flyingflight = FlightData(rawFlights);
console.log(flyingflight);