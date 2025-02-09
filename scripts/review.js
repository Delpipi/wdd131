//Select DOM element for output
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const review = document.querySelector("#review");

// init the review counter
let counter = getCounter() || 0;

function getCounter(){
    return Number(JSON.parse(localStorage.getItem('counter')));
}

//Get the system current Date
const today = new Date(document.lastModified);

//Update DOM element content
currentYear.textContent = today.getFullYear();
lastModified.textContent = `last Modified : ${today}`;
review.textContent = counter;

