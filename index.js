const l = console.log
l('hello world')

const email = document.getElementById('email')
const emailErrorMessage = document.querySelector('#email + span')

l(email)
l(emailErrorMessage)
l(email.validity.valid)

function showEmailError() {
  if (!email.validity.valid) {
    l(email.validity.valid)
    emailErrorMessage.textContent = 'Please enter a valid email address.'
    email.classList.add('invalid')
  } else {
    l(email.validity.valid)
    emailErrorMessage.textContent = ' '
    email.classList.remove('invalid')
  }
}

email.addEventListener('input', () => {
  showEmailError()
});

