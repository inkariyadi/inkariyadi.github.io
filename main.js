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

btn.addEventListener('click',() =>{
    confetti.maxCount = 200;
    confetti.frameInterval = 20;
    confetti.alpha = 1;
    confetti.start();
})
