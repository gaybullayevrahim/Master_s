let home = document.querySelector(".nav__link");
let burger = document.querySelector(".nav_burger");

burger.addEventListener("click",function(){
    console.log("aaaa");
    home.classList.toggle("show")
})
let loader = document.querySelector(".loader");
setInterval(function(){
    loader.remove(".loader");
},2000)