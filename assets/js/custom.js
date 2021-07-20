window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header-navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// ===========================================  JAVASCRIPT FOR PROGRESS BAR 
window.addEventListener('load',()=> {
  let progressBars = document.querySelectorAll(".progress-bar");
  let values = [
    '80%',
    '74%',
    '79%',
    '90%',
    '75%',
    '85%'
  ];
  progressBars.forEach((progress,index)=> {
    progress.style.width = values[index];
  });
});
