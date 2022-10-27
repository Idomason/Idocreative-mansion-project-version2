// Select all needed tags
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

  timeoutID = setTimeout(() => {
    currImg++;
    updateImage();
  }, 5000);
}

updateImage();

// ==================  PHONE ===============
const phoneIcon = document.querySelector('.phone-icon');
const phoneNumber = document.querySelector('.phone-number');
const navIcons = document.querySelector('.nav-icons');
console.log('No');
phoneIcon.addEventListener('click', function () {
  console.log('clicked');
  navIcons.style.width = '80%';
  phoneNumber.classList.toggle('show-number');
});
