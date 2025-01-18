const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


//Events
button.addEventListener('click', function(){
    if(input.value.trim() !== '') {

        //li element to hold each entries
        const li = document.createElement('li');
        li.textContent = input.value;

        //create detele Button
        const deteleButton = document.createElement('button');
        deteleButton.textContent = '❌';

        li.append(deteleButton)
        list.append(li)

        deteleButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });
        
        input.value = ''
    }
});

