 // set timeout()

 console.log("hello i am here");
  setTimeout(() => {console.log("hiii recived");},3000);
 console.log("waiting for reply");

 // set Interval
let attempts = 0;

const dataChecker = setInterval(() => { attempts++; console.log(`Attempt #${attempts}: Checking for new data...`);
           if (attempts >= 3) {
        clearInterval(dataChecker);
        console.log("Maximum attempts reached. Stopping.");
    }
}, 3000);

// Asynchronous,promises
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
 
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});

 // fetching data from api