const input = document.getElementById('textInput');
const output = document.getElementById('output');
const button = document.getElementById('reverseBtn');

function reverseString(str) {
  return str.split('').reverse().join('');
}

input.addEventListener('input', () => {
  const value = input.value;
  button.style.display = value.length > 3 ? 'inline-block' : 'none';
  output.textContent = reverseString(value);
});

button.addEventListener('click', () => {
  output.textContent = reverseString(input.value);
});