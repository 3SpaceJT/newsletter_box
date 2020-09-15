const nlt_inputs = document.querySelectorAll('.field__field')
nlt_inputs.forEach(input => (input.addEventListener('input', () => {
  input.classList.add('filled')
})))