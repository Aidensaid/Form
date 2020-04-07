const l = console.log
const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error')

l(emailError)


email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = '';
    emailError.className = 'error'
  } else {
    showEmailError()
  }
});


form.addEventListener('submit', function (event) {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault()
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.'
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = 'error active'
}

const countryCode = document.getElementById('country-code')
const countryCodeError = document.querySelector('#country-code +span.error')

countryCode.addEventListener('input', function (event) {
  l(countryCode.validity.valid)
  l(countryCode.validity.valid)
  if (countryCode.validity.valid) {
    l('clearing error message')
    countryCodeError.textContent = '';
    l(countryCodeError.innerHTML)
    countryCodeError.className = 'error';
  } else {
    showCountryError()
  }
});

form.addEventListener('submit', function (event) {
  if (!countryCode.validity.valid) {
    showEmailError();
    event.preventDefault()
  }
});

function showCountryError() {
  if (countryCode.validity.patternMismatch) {
    countryCodeError.textContent = 'Entered value must be a number'
  }
  emailError.className = 'error active'
}

//   if (countryCode.validity.valueMissing) {
//     countryCodeError.textContent = 'You need to enter a country code'
//   } else 
// } else if (countryCode.validity.tooLong) {
//   countryCodeError.textContent = `Country code should be a maximum of ${countryCode.maxLength} characters; you entered ${countryCode.value.length}; `

const password = document.getElementById('password')
const passwordError = document.querySelector('#password +span.error')

password.addEventListener('input', function (event) {
  if (password.validity.valid) {
    passwordError.innerHTML = ''
    passwordError.className = 'error'
  } else {
    showPasswordError()
  }
})

form.addEventListener('submit', function (event) {
  if (!password.validity.valid) {
    showPasswordError();
    event.preventDefault()
  }
})

function showPasswordError() {
  if (password.validity.tooShort) {
    passwordError.textContent = `Your password must be a minimum of ${password.minLength} characters; you entered ${password.value.length}.`
  }
}

const confirmPassword = document.getElementById('confirm-password')
const confirmPasswordError = document.querySelector('#confirm-password +span.error')

confirmPassword.addEventListener('input', function (event) {
  if (confirmPassword.value === password.value) {
    confirmPasswordError.innerHTML = ''
    confirmPasswordError.className = 'error'
  } else {
    showConfirmPasswordError()
  }
})

form.addEventListener('submit', function (event) {
  if (!confirmPassword.validity.valid) {
    showConfirmPasswordError();
    event.preventDefault()
  }
})

function showConfirmPasswordError() {
  confirmPasswordError.textContent = 'passwords don\'t match'
}
