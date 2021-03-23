$(document).ready(function(){
let $btns = $('.project-area .button-group button');
$btns.click(function(e){
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector=$(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
        filter:selector
    });

    return false;
})


});
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function my_cv_link() { 
    window.open("https://docs.google.com/document/d/1aKSk62cwiFZCprMBz-n1UTsoPLhZSeHl35eG_GaHv2s/edit"); 
} 
function my_ml_p1() { 
  window.open("https://github.com/rajswilochan1999/Prediction-and-Analysis-of-Degree-of-Suicidal-Ideation-in-Online-Content-using-Machine-Learning"); 
} 
function my_krishikart_p1() { 
  window.open("https://devfolio.co/submissions/krishi-kart"); 
} 
function my_E_banking_p1() { 
  window.open("https://github.com/rajswilochan1999/E-banking-Project"); 
} 
function my_hunter_p1() { 
  window.open("https://github.com/rajswilochan1999/Hunter--Corona-Tracker-Android-App-"); 
} 

  
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
}
// Immediately invoked function to set the theme on initial load



document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})