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
const navigate = document.querySelectorAll("header nav a")[0];
navigate.textContent = siteContent["nav"]["nav-item-1"];

const navigate2 = document.querySelectorAll("header nav a")[1];
navigate2.textContent = siteContent["nav"]["nav-item-2"];

const navigate3 = document.querySelectorAll("header nav a")[2];
navigate3.textContent = siteContent["nav"]["nav-item-3"];

const navigate4 = document.querySelectorAll("header nav a")[3];
navigate4.textContent = siteContent["nav"]["nav-item-4"];

const navigate5 = document.querySelectorAll("header nav a")[4];
navigate5.textContent = siteContent["nav"]["nav-item-5"];

const navigate6 = document.querySelectorAll("header nav a")[5];
navigate6.textContent = siteContent["nav"]["nav-item-6"];


//nav items
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])//image one

//CTA

//header text
const header = document.querySelector('h1');
header.textContent = siteContent["cta"]["h1"];

//button
const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

//cta image
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"]);//image two


//MAIN CONTENT
// },
// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",

//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// },

//features h4
const features = document.querySelectorAll(".top-content .text-content h4")[0];
features.textContent = siteContent["main-content"]["features-h4"];

//features content
const featuresContent = document.querySelectorAll(".top-content .text-content p")[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

//about h4
const about = document.querySelectorAll(".top-content .text-content h4")[1];
about.textContent = siteContent["main-content"]["about-h4"];

//about content
const aboutContent = document.querySelectorAll(".top-content .text-content p")[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];


//image
let main = document.querySelector('#middle-img');
main.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//services h4
const services = document.querySelectorAll(".bottom-content .text-content h4")[0];
services.textContent = siteContent["main-content"]["services-h4"];

//services content
const servicesContent = document.querySelectorAll(".bottom-content .text-content p")[0];
servicesContent.textContent = siteContent["main-content"]["services-content"];

//product h4
const product = document.querySelectorAll(".bottom-content .text-content h4")[1];
product.textContent = siteContent["main-content"]["product-h4"];

//product content
const productContent = document.querySelectorAll(".bottom-content .text-content p")[1];
productContent.textContent = siteContent["main-content"]["product-content"];

//vision h4
const vision = document.querySelectorAll(".bottom-content .text-content h4")[2];
vision.textContent = siteContent["main-content"]["vision-h4"];

//vision content
const visionContent = document.querySelectorAll(".bottom-content .text-content p")[2];
visionContent.textContent = siteContent["main-content"]["vision-content"];




//CONTACT
// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },

const contactH4 = document.querySelectorAll(".contact h4")[0];
contactH4.textContent = siteContent["contact"]["contact-h4"];

//address
const p = document.querySelectorAll(".contact p")[0];
p.textContent = siteContent["contact"]["address"];

// p[0].setAttribute ('style', 'white-space: pre;');
// p[0].textContent = '123 Way 456 Street \r \n';
// p[0].textContent += 'Somewhere, USA'

//phone
const p2 = document.querySelectorAll(".contact p")[1];
p2.textContent = siteContent["contact"]["phone"];

//email
const p3 = document.querySelectorAll(".contact p")[2];
p3.textContent = siteContent["contact"]["email"];



//FOOTER
// "footer": {
//   "copyright" : "Copyright Great Idea! 2018"
// },

const footer = document.querySelector("footer p")
footer.textContent = siteContent ["footer"]["copyright"]


//ADD NEW CONTENT 

//change color of nav text to green
const navColor = document.querySelectorAll("header nav a")[0].style.color="green";
const navColor1 = document.querySelectorAll("header nav a")[1].style.color="green";
const navColor2 = document.querySelectorAll("header nav a")[2].style.color="green";
const navColor3 = document.querySelectorAll("header nav a")[3].style.color="green";
const navColor4 = document.querySelectorAll("header nav a")[4].style.color="green";
const navColor5 = document.querySelectorAll("header nav a")[5].style.color="green";



//add using append
// const newContentNav = document.createElement("nav");
// newContentNav.textContent = "Testimonials";

// const nav = document.querySelector("header");
// nav.append(newContentNav);


//add using append child
const newContentNav2 = document.createElement("a");
newContentNav2.textContent= "Whatever";
// newContentNav2.appendChild(textNode);

const whatever = document.querySelector("nav")
whatever.appendChild(newContentNav2);



//add using prepend
const newContentNav3 = document.createElement("a");
newContentNav3.textContent = "Prepend";

const navItem3 = document.querySelector("nav");
navItem3.prepend(newContentNav3);