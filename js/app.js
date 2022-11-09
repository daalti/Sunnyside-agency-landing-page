const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".header-container .nav");
const creative = document.querySelector(".header-container .creative");


btnMenu.addEventListener("click", () => { 
    console.log(menu)
    menu.classList.toggle('show-menu');
    creative.classList.toggle('creative-disappear');
   
});

