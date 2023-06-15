const inputs = document.querySelectorAll('.input');

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

inputs.forEach((input) => {
  input.addEventListener('focus', handlerfocus)
})

inputs.forEach((input) => {
  input.addEventListener('focusout', handlerfocusout)
})