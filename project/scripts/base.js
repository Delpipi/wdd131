// Select DOM elements
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation a");
const textPresentation = document.querySelector(".dynamic-text");
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

//Animate text
const textArray = ["Full Stack Developer","DevOps Engineer", "AI Enthusiast"];
let index = 0;

function changeText(){
    textPresentation.style.opacity = 0; //make text invisible(fade-out effect)

    setTimeout(() => {
        textPresentation.textContent = textArray[index]; // change the text
        textPresentation.style.opacity = 1; //make text visible
        index = (index + 1) % textArray.length // prevent never exceeds the array length
    }, 500); // wait 500 ms (0.5 seconds) before executing these code
}

//update DOM elemet content
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modified: ${today}`;

setInterval(changeText, 3000); // Calls changeText() every 3 seconds (3000 ms)