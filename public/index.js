const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const about=document.querySelector('#about');
const contact = document.querySelector('#contact');


burger.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});

document.getElementById('about').addEventListener('click', (e) => {
  window.location.href = "about.html";
});

document.getElementById('contact').addEventListener('click', (e) => {
  window.location.href = "contact.html";
});
