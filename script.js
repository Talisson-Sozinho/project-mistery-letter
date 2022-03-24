const cartaGerada = document.getElementById('carta-gerada');
const inputPhrase = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');

createLetterButton.addEventListener('click', () => {
  const phrase = inputPhrase.value.split(' ');
  cartaGerada.innerHTML = null;
  for (let index = 0; index < phrase.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = phrase[index];
    cartaGerada.appendChild(span);
  }
});
