import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name="step"]');
const amountRef = document.querySelector('input[name="amount"]');
const butSab = document.querySelector('button');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

formRef.addEventListener('submit', e => {
  e.preventDefault();
  let delay = Number(delayRef.value);

  for (let i = 0; i < Number(amountRef.value); i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      })
      .catch(({ position, delay }) => {
        console.log(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      });
    delay += Number(stepRef.value);
  }
});
