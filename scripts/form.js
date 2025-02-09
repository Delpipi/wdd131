const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
  
//Select DOM element for output
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const listOptions = document.querySelector("#pname");
const form = document.querySelector(".reviewForm");

// init the review counter
let counter = getCounter() || 0;

function getCounter(){
    return Number(JSON.parse(localStorage.getItem('counter')));
}

function setCounter(review){
    localStorage.setItem('counter', JSON.stringify(review));
}
//Get the system current Date
const today = new Date(document.lastModified);

//map each product to the option html element
const html = products.map((product) => `<option value="${product.id}">${product.name}</option>`);

//Update DOM element content
currentYear.textContent = today.getFullYear();
lastModified.textContent = `last Modified : ${today}`;
listOptions.innerHTML += html.join(" ");

form.addEventListener('submit', (event) => {
    counter++;
    setCounter(counter);
});

