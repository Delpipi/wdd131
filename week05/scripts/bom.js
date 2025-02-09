const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item != chapter);
    setChapterList();
}


function displayList(item){

     //li element to hold each entries
     let li = document.createElement('li');
     li.textContent = item;

     //create detele Button
     const deteleButton = document.createElement('button');
     deteleButton.textContent = '❌';

     li.append(deteleButton)
     list.append(li)

     deteleButton.addEventListener('click', function(){
         list.removeChild(li);
         deleChapter(li.textContent);
         input.focus();
     });
     
}


chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//Events
button.addEventListener('click', function(){
    if(input.value.trim() !== '') { // make sure the input is not empty

        displayList(input.value); // call the function that outputs the submitted chapter

        chaptersArray.push(input.value); // add the chapter to the array

        setChapterList(); // update the localStorage with the new array

        input.value = ""; // clear the input

        input.focus(); // set the focus back to the input
    }
});

