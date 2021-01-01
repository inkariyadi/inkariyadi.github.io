let btn = document.getElementById('cta-btn');
// let overlay = document.getElementById('overlay');
btn.addEventListener('click',() => {
  audio.play();
    // overlay.style.display = 'grid';
    // overlay.classList.add('animate-overlay');
})

// const toTop = document.querySelector(".to-top");
// window.addEventListener("scroll",()=>{
//     if(window.pageYOffset>100){
//         toTop.classList.add("active");
//     }
//     else{
//         toTop.classList.remove("active");
//     }

// })

document.getElementById("my_audio").src = "lagu.mp3";
document.getElementById("my_audio").load();

var audio = new Audio('lagu.mp3');
var mySoundObject;
var i = 0;
var j = 0
var txt = 'Happy Birthdayyyy, ayaangg! <3'; /* The text */
var txt2 = 'Semoga panjang umur!';
var speed = 50; /* The speed/duration of the effect in milliseconds */
var lanjut = false;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2() {
  // while(lanjut==)
  if (j < txt2.length) {
    document.getElementById("wish").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}


var countDownDate = new Date("Jan 1, 2021 12:30:00").getTime();

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
    
    console.log("hore");
    confetti.maxCount = 300;
    confetti.particleSpeed = 5;
    confetti.frameInterval = 20;
    confetti.alpha = 1;
    
    confetti.start();
    document.getElementById("my_audio").play();
    // mySoundObject.play();
    
    document.getElementById("demo").innerHTML = " ";
  
    
    // document.getElementById("demo").innerHTML = "HAPPY BIRTHDAYYYYY";
    typeWriter();
    setTimeout(typeWriter2, 2000);
    setTimeout(dor, 3000);
    
  }
  else if(seconds<=10){
    document.getElementById("demo").innerHTML = " ";
    document.getElementById("demo").innerHTML = seconds;
  }
}, 1000);




function dor() {
    confetti.stop();

}

function play(){
  audio.play();
}

