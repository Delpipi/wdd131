const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan Ivory Coast",
        dedicated: "2025, May, 25",
        area: 2000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108-main.jpg"
    },
    {
        templeName: "Aba Nigeria Temple",
        location: " Address 72-80 Okpu-Umuobo Rd Aba, Abia State",
        dedicated: "2005, August, 7",
        area: 2500,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 2400,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
  ];
  
  
  //Select DOM elements
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')
const links = document.querySelectorAll('.navigation a')
const currentYear = document.querySelector('#currentYear')
const lastModified = document.querySelector('#lastModified')

function buildTempleCard(temple){

    return ` <div class="temple-card">
            <div class="card-header">
                <h2>${temple.templeName}</h2>
                <ul>
                    <li>Location: ${temple.location}</li>
                    <li>dedicated : ${temple.dedicated}</li>
                    <li>Size: ${temple.area} sq ft</li>
                </ul>
            </div>
            <div class="card-body">
                
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">                            
                
            </div>
        </div>`
}

function renderTempleCard(templeList){
    const html = templeList.map(buildTempleCard)
    document.querySelector("#temples").innerHTML = html.join("");
}

//use the Date Object
const today = new Date();
lastModified.textContent = new Date(document.lastModified);

currentYear.textContent = today.getFullYear();

hamButton.addEventListener('click', ()=> {
    hamButton.classList.toggle("open")
    navigation.classList.toggle("open")
});

links.forEach(link => {
  link.addEventListener('click', (event) => {

    event.preventDefault();

    //remove 'active' class from all liks
    links.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    event.target.classList.add('active');

    const clickedText = event.target.textContent.trim().toLowerCase();
  
    let filteredTemples = [];
    
    if(clickedText === 'old'){
       filteredTemples = temples.filter(temple => {
        let dedicated = new Date(temple.dedicated)
        const year = dedicated.getFullYear()
        return year < 1900
      });
      renderTempleCard(filteredTemples)
    }else if (clickedText === 'new'){
       filteredTemples = temples.filter(temple => {
        let dedicated = new Date(temple.dedicated)
        const year = dedicated.getFullYear()
        return year > 2000
      });
      renderTempleCard(filteredTemples)
    }else if (clickedText === 'large'){
       filteredTemples = temples.filter(temple => temple.area > 90000);
      renderTempleCard(filteredTemples)
    }else if (clickedText === 'small'){
       filteredTemples = temples.filter(temple => temple.area < 10000);
      renderTempleCard(filteredTemples)
    }else{
      renderTempleCard(temples);
    }
  });

});

renderTempleCard(temples);