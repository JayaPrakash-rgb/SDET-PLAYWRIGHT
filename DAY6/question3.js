const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

function analyzeMovies(data) {
  const processedMovies = data.map(movieString => {
      const [name, genre, Viewscount] = movieString.split('|');                       //parsing
      let views = Number(Viewscount);
    if (isNaN(views)) {
    views = 0;                                                                       //validating views
}
      return { name, genre, views };                                                 //object creating
    })
    .filter(movie => (movie.genre === "Action" || movie.genre === "Sci-Fi")&& movie.views > 5000)   //Filtering: Action or Sci-Fi AND views > 5000
    .sort((a, b) => b.views - a.views);         //Descending
  return JSON.stringify(processedMovies);                                                        //  Return as a JSON string
}
const result = analyzeMovies(rawMovies);
console.log(result);