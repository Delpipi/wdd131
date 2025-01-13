//Select the DOM elements for output
const year = document.querySelector("#currentyear");
const last_modification_datetime = document.querySelector("#lastModified");

//use the date object
const today = new Date();

let oLastModif = new Date(document.lastModified)

year.innerHTML = today.getFullYear();
last_modification_datetime.innerHTML = `Last Modification: ${oLastModif}`