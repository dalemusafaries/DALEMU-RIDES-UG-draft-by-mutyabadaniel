/* ==========================================
   DALEMU RIDES UGANDA
   Main JavaScript
========================================== */


/* ===============================
   MOBILE MENU
================================ */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}


/* Close menu when clicking links */

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        if(navMenu){

            navMenu.classList.remove("active");

        }

    });

});


/* ===============================
   STICKY NAVBAR
================================ */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }


});



/* ===============================
   SCROLL TO TOP
================================ */


const scrollTop = document.querySelector(".scroll-top");


window.addEventListener("scroll",()=>{


    if(scrollTop){


        if(window.scrollY > 500){

            scrollTop.classList.add("show");

        }

        else{

            scrollTop.classList.remove("show");

        }


    }


});


if(scrollTop){

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});


});


}


/* ===============================
   SMOOTH SCROLLING
================================ */


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


let target=document.querySelector(this.getAttribute("href"));


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});



/* ===============================
   SCROLL REVEAL
================================ */
/* ===============================
   SCROLL REVEAL (REPEAT ANIMATION)
================================ */


const revealElements=document.querySelectorAll(".reveal");


function revealOnScroll(){

let windowHeight=window.innerHeight;


revealElements.forEach(element=>{


let position=element.getBoundingClientRect().top;


if(position < windowHeight - 100){

element.classList.add("active");

}

else{

element.classList.remove("active");

}


});


}



window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/* ===============================
   COUNTER ANIMATION
================================ */


const counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target=+counter.getAttribute("data-target");


const count=+counter.innerText;


const speed=target/100;



if(count < target){


counter.innerText=Math.ceil(count+speed);


setTimeout(updateCounter,20);


}

else{


counter.innerText=target+"+";


}


};


updateCounter();


});



/* ===============================
   IMAGE LAZY LOADING
================================ */


const images=document.querySelectorAll("img");


images.forEach(img=>{


img.addEventListener("load",()=>{


img.classList.add("loaded");


});


});



/* ===============================
   BOOK NOW BUTTON EFFECT
================================ */


const buttons=document.querySelectorAll(".book-btn,.gold-btn");


buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.transform="translateY(-4px)";


});


button.addEventListener("mouseleave",()=>{


button.style.transform="translateY(0)";


});


});



/* ===============================
   PAGE LOADER
================================ */


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


console.log("Dalemu Rides Website Loaded Successfully");


});


document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("mobileMenuBtn");
    const nav = document.querySelector("nav");
    const overlay = document.getElementById("mobileNavOverlay");

    if (!menuBtn || !nav || !overlay) return;


    function openMenu() {

        nav.classList.add("mobile-open");

        menuBtn.classList.add("active");

        overlay.classList.add("active");

        document.body.classList.add("menu-open");

        menuBtn.setAttribute("aria-expanded", "true");
    }


    function closeMenu() {

        nav.classList.remove("mobile-open");

        menuBtn.classList.remove("active");

        overlay.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuBtn.setAttribute("aria-expanded", "false");
    }


    /* Hamburger button */
    menuBtn.addEventListener("click", function () {

        if (nav.classList.contains("mobile-open")) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    /* Click outside menu */
    overlay.addEventListener("click", closeMenu);


    /* Close after clicking a navigation link */
    nav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 700) {
                closeMenu();
            }

        });

    });


    /* ESC key closes menu */
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    /* Close if screen becomes desktop size */
    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {
            closeMenu();
        }

    });

});
document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("dalemuToggle");
    const closeButton = document.getElementById("dalemuClose");

    const mobileMenu = document.getElementById("dalemuMobileMenu");
    const menuBackground = document.getElementById("dalemuMenuBg");


    function openDalemuMenu() {

        mobileMenu.classList.add("dalemu-show");

        menuBackground.classList.add("dalemu-bg-show");

        document.body.style.overflow = "hidden";

    }


    function closeDalemuMenu() {

        mobileMenu.classList.remove("dalemu-show");

        menuBackground.classList.remove("dalemu-bg-show");

        document.body.style.overflow = "";

    }


    /* OPEN */

    openButton.addEventListener("click", function () {

        openDalemuMenu();

    });


    /* CLOSE */

    closeButton.addEventListener("click", function () {

        closeDalemuMenu();

    });


    /* CLOSE WHEN CLICKING OUTSIDE */

    menuBackground.addEventListener("click", function () {

        closeDalemuMenu();

    });


    /* CLOSE MENU AFTER SELECTING A PAGE */

    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            closeDalemuMenu();

        });

    });

});

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;
    const expectedAmount = document.getElementById("expectedAmount").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Hello Dalemu Rides,%0A%0A" +
        "*NEW TRANSPORT REQUEST*%0A%0A" +
        "*Full Name:* " + fullName + "%0A" +
        "*Pickup Location:* " + pickup + "%0A" +
        "*Destination:* " + destination + "%0A" +
        "*Expected Amount:* UGX " + expectedAmount + "%0A%0A" +
        "*Message:*%0A" + message;

    const whatsappNumber = "256700301716";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
});
