import Notiflix from 'notiflix';

import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const textInp = document.querySelector('#datetime-picker');

const btnS = document.querySelector('button[data-start]');
btnS.disabled = true;

const spanD = document.querySelector('span[data-days]');
const spanH = document.querySelector('span[data-hours]');
const spanM = document.querySelector('span[data-minutes]');
const spanS = document.querySelector('span[data-seconds]');

const addLeadingZero = value => {
  return value.toString().padStart(2, 0);
};

let convertMs = ms => {
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

  spanD.textContent = days;
  spanH.textContent = addLeadingZero(hours);
  spanM.textContent = addLeadingZero(minutes);
  spanS.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate.getTime() < selectedDates[0].getTime()) {
      btnS.disabled = false;
    } else {
      console.log(Notiflix.Notify.failure('Please choose a date in the future'));
      window.alert('Please choose a date in the future');
    }

    btnS.addEventListener('click', e => {
      let timet = Infinity;
      const timeId = setInterval(() => {
        if (timet <= 1000) {
          clearInterval(timeId);
          return;
        }
        timet = selectedDates[0].getTime() - Date.now();
        const timeDeta = convertMs(timet);
      }, 1000);
    });
  },
};

flatpickr(textInp, options);
