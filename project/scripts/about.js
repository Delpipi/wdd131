// Select DOM elements
const textPresentation = document.querySelector(".dynamic-text");

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

setInterval(changeText, 3000); // Calls changeText() every 3 seconds (3000 ms)