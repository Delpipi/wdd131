// Select DOM elements
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation a");
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

//Get current Date
const today = new Date(document.lastModified);

// Toggle responsive menu
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle("open");
    navigation.classList.toggle("open");
});

// Toggle active link
links.forEach( link => {

    link.addEventListener('click', (event) => {
        links.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active')
    })

});

//update DOM elemet content
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modified: ${today}`;