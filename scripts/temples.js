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