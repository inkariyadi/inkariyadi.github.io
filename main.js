let btn = document.getElementById('cta-btn');
// let overlay = document.getElementById('overlay');
// btn.addEventListener('click',() => {
//     overlay.style.display = 'grid';
//     overlay.classList.add('animate-overlay');
// })

// const toTop = document.querySelector(".to-top");
// window.addEventListener("scroll",()=>{
//     if(window.pageYOffset>100){
//         toTop.classList.add("active");
//     }
//     else{
//         toTop.classList.remove("active");
//     }

// })
var i = 0;
var txt = 'Happy Birthdayyyy'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


var countDownDate = new Date("Jan 3, 2021 10:57:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    
    confetti.maxCount = 300;
    confetti.particleSpeed = 5;
    confetti.frameInterval = 20;
    confetti.alpha = 1;
    confetti.start();
    document.getElementById("demo").innerHTML = " ";
    // document.getElementById("demo").innerHTML = "HAPPY BIRTHDAYYYYY";
    typeWriter();
    setTimeout(dor, 3000);
  }
}, 1000);


btn.addEventListener('click',() =>{
    
    confetti.maxCount = 300;
    confetti.particleSpeed = 5;
    confetti.frameInterval = 20;
    confetti.alpha = 1;
    confetti.start();
    setTimeout(dor, 3000);
    
    // setTimeout(myFunction, 3000);
    
})


function dor() {
    confetti.stop();

}