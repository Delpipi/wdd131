const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation")
const links = document.querySelectorAll(".navigation a")

hamButton.addEventListener('click', ()=> {
    hamButton.classList.toggle("open")
    navigation.classList.toggle("open")
});