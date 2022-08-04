const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

const accordion = document.getElementsByClassName('frequentyl-section__box');
for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("portal__slider");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var slideIndexTwo = 1;
showDivsTwo(slideIndexTwo);

function currentDivTwo(n) {
  showDivsTwo(slideIndexTwo = n);
}

function showDivsTwo(n) {
  var i;
  var x = document.getElementsByClassName("portal__slider--two");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndexTwo = 1}    
  if (n < 1) {slideIndexTwo = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndexTwo-1].style.display = "block";  
  dots[slideIndexTwo-1].className += " active";
}
