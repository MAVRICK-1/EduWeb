'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
let slideSearch = document.querySelector(".me-2");
let slideCross= document.querySelector(".cross");
let searchIcon= document.querySelector(".header-action-btn");

slideSearch.style.display='none'
slideCross.style.display='none'
function showBar() {
  slideSearch.style.display = "block";
  slideCross.style.display='inline-block'
  searchIcon.style.display='none'

  
}
function removeSearchBar() {
  slideSearch.style.display = "none";
  slideCross.style.display='none'
  searchIcon.style.display='inline-block'
}
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);



/**
 * contact form
 */

const contactForm = document.querySelector("[contact-form]");

const onContactFormSubmit = function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  var data = {
    service_id: 'YOUR_SERVICE_ID',
    template_id: 'YOUR_TEMPLATE_ID',
    user_id: 'YOUR_PUBLIC_KEY',
    template_params: {
      'name': name,
      'email': email,
      'message': message
    }
  };

  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function () {
    alert('Your mail is sent!');
  }).fail(function (error) {
    alert('Oops... ' + JSON.stringify(error));
  });
}

contactForm.addEventListener("submit", onContactFormSubmit);