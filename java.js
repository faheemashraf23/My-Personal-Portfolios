  const scriptURL = 'https://script.google.com/macros/s/AKfycbwIV_QiEG3Gin_Y2SXLcfbbFghku1Mfgo06RcZdZdd1c78wlIg1p7dlWO2fDmOWagOFVg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})