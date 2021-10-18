let darkMode = localStorage.getItem('darkmode')

var options = {
  strings: ['Hi there.', 'I\'m Sardor G\'ulomjonov,  JavaScript developer.', 'from Uzbekistan, Samarkand'],
  typeSpeed: 70,
  backSpeed: 30,
  backDelay: 1000,
  showCursor: false,
  loop: true
};

var typed = new Typed('.element', options);

AOS.init({
  duration: 1000,
})



const sun = document.querySelector('.sun'),
      body = document.querySelector('.body'),
      h1 = document.querySelector('.h1'), 
      element = document.querySelector('.element'),
      aa = document.querySelectorAll('.aa'),
      moon = document.querySelector('.moon'); 


function sunFunc() {
  sun.addEventListener('click', () => {
    body.style.transition = "1s ease";
    body.style.background = "white";
    moon.style.display = "block";
    sun.style.display = 'none';
    h1.style.color = 'black';
    element.style.color = 'red';
    aa.forEach((e) => {
      e.style.color = "black";
    })
    localStorage.setItem('darkMode', "white");
  })
}

     
if(localStorage.getItem('darkMode') === "white"){
  body.style.background = "white";
  moon.style.display = "block";
  sun.style.display = 'none';
  h1.style.color = 'black';
  element.style.color = 'red';
  aa.forEach((e) => {
    e.style.color = "black";
  })
}
else{
  body.style.background = "black";
  moon.style.display = "none";
  sun.style.display = 'block';
  h1.style.color = 'white';
  element.style.color = '#faff00';
  aa.forEach((e) => {
    e.style.color = "white";
  })
}

function moonFunc() {
  moon.addEventListener('click', () => {
    body.style.transition = "1s ease";
    body.style.background = "black";
    moon.style.display = "none";
    sun.style.display = 'block';
    h1.style.color = 'white';
    element.style.color = '#faff00';
    aa.forEach((e) => {
      e.style.color = "white";
    })
    localStorage.setItem('darkMode', "dark");
  })
}
moonFunc()
sunFunc()
