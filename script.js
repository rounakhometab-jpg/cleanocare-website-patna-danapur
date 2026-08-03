/*==================================================
CleanO CARE
script.js
Part 1
Loader
Sticky Header
Mobile Menu
Smooth Scroll
Scroll Reveal
==================================================*/

"use strict";

/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {
  
  const loader = document.getElementById("loader");
  
  if (loader) {
    
    setTimeout(() => {
      
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      
    }, 700);
    
  }
  
});

/*=========================================
STICKY HEADER EFFECT
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  
  if (!header) return;
  
  if (window.scrollY > 40) {
    
    header.style.boxShadow = "0 12px 35px rgba(0,0,0,.10)";
    header.style.background = "rgba(255,255,255,.96)";
    header.style.backdropFilter = "blur(18px)";
    
  } else {
    
    header.style.boxShadow = "";
    header.style.background = "";
    header.style.backdropFilter = "";
    
  }
  
});

/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  
  menuBtn.addEventListener("click", () => {
    
    navLinks.classList.toggle("showMenu");
    menuBtn.classList.toggle("active");
    
  });
  
}

/*=========================================
CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {
  
  link.addEventListener("click", () => {
    
    if (navLinks) {
      
      navLinks.classList.remove("showMenu");
      
    }
    
    if (menuBtn) {
      
      menuBtn.classList.remove("active");
      
    }
    
  });
  
});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  anchor.addEventListener("click", function(e) {
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (!target) return;
    
    e.preventDefault();
    
    target.scrollIntoView({
      
      behavior: "smooth",
      block: "start"
      
    });
    
  });
  
});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(
  
  `
section,
.service-card,
.trust-card,
.why-card,
.process-card,
.review-note,
.gallery-grid img
`
  
);

const revealObserver = new IntersectionObserver(
  
  (entries) => {
    
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
        entry.target.classList.add("revealed");
        
      }
      
    });
    
  },
  
  {
    
    threshold: 0.15
    
  }
  
);

revealItems.forEach(item => {
  
  revealObserver.observe(item);
  
});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  
  let current = "";
  
  sections.forEach(section => {
    
    const sectionTop = section.offsetTop - 150;
    
    if (pageYOffset >= sectionTop) {
      
      current = section.getAttribute("id");
      
    }
    
  });
  
  navItems.forEach(link => {
    
    link.classList.remove("active");
    
    if (
      
      current &&
      link.getAttribute("href") === "#" + current
      
    ) {
      
      link.classList.add("active");
      
    }
    
  });
  
});

/*==================================================
PART 2
Back To Top
Lightbox
Forms
Ripple
Scroll Progress
FAQ
==================================================*/

/*=========================================
BACK TO TOP BUTTON
=========================================*/

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backToTop";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progress = document.createElement("div");

progress.id = "scrollProgress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (window.scrollY / total) * 100;

    progress.style.width = percent + "%";

});

/*=========================================
LIGHTBOX
=========================================*/

const galleryImages =
document.querySelectorAll(".gallery-grid img");

if(galleryImages.length){

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=

`
<span id="closeLightbox">&times;</span>

<img id="lightboxImg">
`;

document.body.appendChild(lightbox);

const lightboxImg=document.getElementById("lightboxImg");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

lightboxImg.alt=img.alt;

});

});

document
.getElementById("closeLightbox")
.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

}

/*=========================================
BUTTON RIPPLE
=========================================*/

document
.querySelectorAll(".btn-primary,.btn-outline")
.forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(

this.clientWidth,

this.clientHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.offsetX-size/2+"px";

ripple.style.top=

e.offsetY-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================================
FORM VALIDATION
=========================================*/

document
.querySelectorAll("form")
.forEach(form=>{

form.addEventListener("submit",e=>{

const required=
form.querySelectorAll("[required]");

let valid=true;

required.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.classList.add("input-error");

}else{

input.classList.remove("input-error");

}

});

if(!valid){

e.preventDefault();

alert(

"Please fill all required fields."

);

}

});

});

/*=========================================
FAQ
=========================================*/

document
.querySelectorAll(".faq details")
.forEach(item=>{

item.addEventListener("toggle",()=>{

if(item.open){

document
.querySelectorAll(".faq details")
.forEach(other=>{

if(other!==item){

other.open=false;

}

});

}

});

});

/*=========================================
LAZY IMAGE ANIMATION
=========================================*/

const lazyObserver=

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("img-visible");

}

});

},

{

threshold:.2

}

);

document
.querySelectorAll("img")
.forEach(img=>{

lazyObserver.observe(img);

});

/*=========================================
CURRENT YEAR
=========================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

console.log(

"CleanO CARE Website Loaded Successfully."

);

/* Remove all Call Now buttons except footer */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('a[href^="tel:"]').forEach(link => {

        if (!link.closest("footer")) {
            link.remove();
        }

    });

});