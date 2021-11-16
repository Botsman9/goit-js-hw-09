const body = document.querySelector("body");


const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

 

function getRandomHexColor() {
   return`#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


btnStart.addEventListener("click", (e) => {

    timerId = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1000);
    
    if (timerId !== null) {
     btnStart.disabled = true
    }
    
btnStop.addEventListener("click", (e) => {
   clearInterval(timerId);
   btnStart.disabled = false
});

});





    

   
