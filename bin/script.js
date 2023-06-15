const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button')

const handlerfocus = ({target}) => {
const span = target.previousElementSibling
span.classList.add('span-active')
}

const handlerfocusout = ({target}) => {

  if(target.value == ''){

  const span = target.previousElementSibling
  span.classList.remove('span-active')
  }
  }
  
const handleChanger = () => {
  const [username,password] = inputs
  
  if(username.value && password.value.length >= 8){
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', '')
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', handleChanger)
})

inputs.forEach((input) => {
  input.addEventListener('focus', handlerfocus)
})

inputs.forEach((input) => {
  input.addEventListener('focusout', handlerfocusout)
})

