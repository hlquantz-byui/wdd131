const navBar = document.querySelectorAll('nav a');
const heading = document.querySelector('h2');
const menuToggle = document.getElementById('menu')
const nav = document.querySelector('nav')

navBar.forEach(link =>{
    link.addEventListener('click', function(){
        heading.textContent = this.textContent;
    })
})

menuToggle.addEventListener('click', ()=> {
    nav.classList.toggle('open');

    menuToggle.classList.toggle('open');
})

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
    templeName: "Layton Utah",
    location: "Layton, Utah",
    dedicated: "2024, June 16",
    area: 93539,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/529738f2aff311eea33eeeeeac1e3460ceb07401/full/320%2C/0/default"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah",
    dedicated: "1990, February 2",
    area: 104000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/0ef41c19f3cd8113dba38d4dfdca16a5d06cdcd5/full/320%2C/0/default"
  },
  {
    templeName: "Ogden Utah",
    location: "Ogden, Utah",
    dedicated: "1971, January 18-20",
    area: 112232,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b001df653b3ca0c2dd39002cabb240b275025cf5/full/320%2C/0/default"
  }
  // Add more temple objects here...
];

function createTempleCards(temples){
    const container = document.getElementById("temple-pictures");
    container.innerHTML = "";

    temples.forEach(temple =>{
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        const title = document.createElement("h2");
        title.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.textContent = `Dedication: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img)

        container.appendChild(card);
    })
}

function filterTemples(filter){
    let filteredTemples;

    switch(filter){
        case "old":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(temple=> new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case "all":
        default:
            filteredTemples = temples;
            break;
    }

    createTempleCards(filteredTemples);
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (event) =>{
        event.preventDefault();
        const filter = event.target.getAttribute("data-filter");
        filterTemples(filter);
    })
})

document.addEventListener("DOMContentLoaded", function(){
    createTempleCards(temples);
});