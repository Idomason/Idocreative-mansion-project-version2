// Selected all needed tags
const phoneIcon = document.querySelector('.phone-icon');
const phoneNumber = document.querySelector('.phone-number');
const navIcons = document.querySelector('.nav-icons');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelector('.nav-items');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelector('.navbar .menu-items li .nav-link');
const menuItems2 = document.querySelector('.navbar2');

// Image Slider
const next = document.querySelector('.next-icon');
const prev = document.querySelector('.previous-icon');
const imgcontainer = document.querySelector('.project-images');
const numImg = document.querySelectorAll('img').length;

let currImg = 1;

let timeoutID;

next.addEventListener('click', () => {
  currImg++;
  clearTimeout(timeoutID);
  updateImage();
});

prev.addEventListener('click', () => {
  currImg--;
  clearTimeout(timeoutID);

  updateImage();
});

function updateImage() {
  if (currImg > numImg) {
    currImg = 1;
  } else if (currImg < 1) {
    currImg = numImg;
  }
  imgcontainer.style.transform = `translateX(-${(currImg - 1) * 800}px)`;
}

// ==================  PHONE ===============

console.log('No');
phoneIcon.addEventListener('click', function () {
  console.log('clicked');
  navIcons.style.width = '80%';
  phoneNumber.classList.toggle('show-number');
});

// ================  STICKY NAVBAR ================

window.addEventListener('scroll', function () {
  navbar.classList.toggle('sticky', window.scrollY > 0);
  menuItems2.classList.add('close');
});

// ================  HAMBURGER ================
// Open function
function open() {
  menuItems2.classList.remove('close');
  menuItems2.classList.add('open');
}

// Close function
function close() {
  menuItems2.classList.add('close');
}

openMenu.addEventListener('click', open);

closeMenu.addEventListener('click', close);
