/////////////////////////////////////// Start The Top Bottom//////////////////////////////////

let button = document.querySelector(".top-button");

window.onscroll = function() {

if(window.scrollY >= 280) {
    button.classList.add("show-button")
}
 else { button.classList.remove("show-button")
}}

button.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
//////////////////////////////////////// End The Top Bottom//////////////////////////////////



///////////////////////////////////// Start color for navgition/////////////////////////////
let abuot = document.querySelector(".abuot");         //657
let services = document.querySelector(".services");   //1247
let protfalue = document.querySelector(".protfalue"); //1695
let contact = document.querySelector(".contact");     //2695 
let nav = document.querySelector(".nav"); 
let logo = document.querySelector("header .log");


function scsrolladd() {
    nav.classList.add("nav-color");
    abuot.classList.add("links-color");
    services.classList.add("links-color");
    protfalue.classList.add("links-color");
    contact.classList.add("links-color");
    logo.classList.add("links-color1");
    button.classList.add("show-button")
}

function scsrollremove() {
    nav.classList.remove("nav-color");
    abuot.classList.remove("links-color");
    services.classList.remove("links-color");
    protfalue.classList.remove("links-color");
    contact.classList.remove("links-color");
    logo.classList.remove("links-color1");
    button.classList.remove("show-button")
}


window.onscroll = function() {

    if(this.scrollY >= 3) {
        scsrolladd()
    }
     else { 
        scsrollremove()
         }
    }

////////////////////////////////////// Start color for navgition/////////////////////////////


