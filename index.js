const l = console.log
l('hello world')

const email = document.getElementById('email')
const emailErrorMessage = document.querySelector('#email + span')

l(email)
l(emailErrorMessage)
l(email.validity.valid)

function showEmailError() {
  if (!email.validity.valid) {
    l('show error text')
  }
}

email.addEventListener('input', () => {
  showEmailError()
  emailErrorMessage.textContent = 'Please check the formatting of your email address'
})