//Select DOM elements
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')
const links = document.querySelectorAll('.navigation a')
const currentYear = document.querySelector('#currentYear')
const lastModified = document.querySelector('#lastModified')

//use the Date Object
const today = new Date();
lastModified.textContent = new Date(document.lastModified);

currentYear.textContent = today.getFullYear();

hamButton.addEventListener('click', ()=> {
    hamButton.classList.toggle("open")
    navigation.classList.toggle("open")
});