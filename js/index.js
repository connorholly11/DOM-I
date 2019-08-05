const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//NAV
const navigate = document.querySelectorAll("nav > a");
console.log (navigate);


//nav items
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])//image one

//CTA

//header text
const header = document.querySelector('h1');
header.textContent = "Dom Is Awesome";
console.log(header);

//button
const button = document.querySelector('button')
console.log(button);

//cta image
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])//image two


//MAIN CONTENT

let main = document.querySelector('#middle-img');
main.setAttribute('src', siteContent["main-content"]["middle-img-src"])//image three


//CONTACT


//FOOTER



//ADD NEW CONTENT 

//change color of nav text to green



//add using append
const newContentNav = document.createElement("nav");
newContentNav.textContent = "Testimonials";

const navItem = document.querySelector("nav");
navItem.append(newContentNav);


//add using append child
const newContentNav2 = document.createElement("nav");
const textNode = document.createTextNode("Whatever");
newContentNav2.appendChild(textNode);

document.querySelector("nav").appendChild(newContentNav2);



//add using prepend
const newContentNav3 = document.createElement("nav");
newContentNav3.textContent = "Prepend";

const navItem3 = document.querySelector("nav");
navItem3.prepend(newContentNav3);