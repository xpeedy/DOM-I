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
// <-----------nav-bar--------------->
const link1 = document.querySelector("header nav a");
link1.textContent = "Services"

const link2 = link1.nextElementSibling;
link2.textContent = "Product"

const link3 = link2.nextElementSibling;
link3.textContent = "Vision"

const link4 = link3.nextElementSibling;
link4.textContent = "Features"

const link5 = link4.nextElementSibling;
link5.textContent = "About"

const link6 = link5.nextElementSibling;
link6.textContent = "Contact"

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let logo2 = document.getElementById("cta-img")
logo2.setAttribute("src", siteContent["cta"] ["img-src"])

let img3 = document.getElementById("middle-img")
img3.setAttribute("src", siteContent["main-content"] ["middle-img-src"])
//                 <------IMG END------>

// <---------------MIddle content----------------->
let space = document.createElement("br");
space.textContent = "is";
let BigText = document.querySelector("h1");
BigText.textContent = "DOM Is Awesome";
BigText.appendChild(space)


let button = document.querySelector("button");
button.textContent = siteContent["cta"] ["button"]

let features = document.querySelector(".text-content h4");
features.textContent = "Features"

let featuresContent = features.nextElementSibling;
featuresContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


// <---------------middle content end---------------->

const bottomContent = document.querySelector(".contact h4");
bottomContent.textContent = siteContent["contact"] ["contact-h4"]

let paragraph = bottomContent.nextElementSibling;
paragraph.textContent = siteContent["contact"] ["address"]

let paragraph2 = paragraph.nextElementSibling;
paragraph2.textContent = siteContent["contact"] ["phone"]

let paragraph3 = paragraph2.nextElementSibling;
paragraph3.textContent = siteContent["contact"] ["email"]

// <---------------middle content end---------------->

const footer = document.querySelector("footer");
footer.textContent = siteContent["footer"] ["copyright"]