const menu =document.querySelector(".nav-menu")
const openmenu =document.querySelector(".nav-toggle-c")
const closemenu=document.querySelector(".nav-toggle")

function togglem(){
    menu.classList.toggle("abrir-menu");
}

openmenu.addEventListener("click", togglem);
closemenu.addEventListener("click", togglem);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("abrir-menu");
  });
});