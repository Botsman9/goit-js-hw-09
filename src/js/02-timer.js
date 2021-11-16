
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';


const textInp = document.querySelector("#datetime-picker");

const btnS = document.querySelector("button[data-start]");
btnS.disabled = true


const spanD = document.querySelector("span[data-days]");
const spanH = document.querySelector("span[data-hours]");
const spanM = document.querySelector("span[data-minutes]");
const spanS = document.querySelector("span[data-seconds]");



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
     
    return { days, hours, minutes, seconds };
    
};
console.log(convertMs(20000));




const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
    onClose(selectedDates) {

        if (options.defaultDate.getTime() < selectedDates[0].getTime()) {
            btnS.disabled = false
        } else { window.alert("Please choose a date in the future") };
        
         btnS.addEventListener("click", (e) => {
            setInterval(() => {
                const timet = selectedDates[0].getTime() - Date.now()
                const timeDeta = convertMs(timet)
               console.log(timeDeta)
                
            }, 1000);
            });
        },
};

flatpickr(textInp, options);


            spanD.textContent = 50;
             spanH.textContent = 50;
             spanM.textContent = 50;
             spanS.textContent = 50;
