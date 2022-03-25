const cartaGerada = document.getElementById('carta-gerada');
const inputPhrase = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');
const counterElement = document.getElementById('carta-contador');

function arrayRandomClass() {
  const stylesForRandomizer = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];
  const stringClassName = [];
  for (let index = 0; index < stylesForRandomizer.length; index += 1) {
    const randomPosition = Math.round(Math.random() * (stylesForRandomizer[index].length - 1));
    stringClassName.push(stylesForRandomizer[index][randomPosition]);
  }
  return stringClassName.join(' ');
}

function generatePhrase(phrase) {
  cartaGerada.innerHTML = null;
  for (let index = 0; index < phrase.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = phrase[index];
    span.className = arrayRandomClass();
    cartaGerada.appendChild(span);
    counterElement.innerText = index + 1;
  }
}

createLetterButton.addEventListener('click', () => {
  const phrase = inputPhrase.value.split(' ');
  if (phrase.length === inputPhrase.value.length + 1) {
    cartaGerada.innerText = 'por favor, digite o conteúdo da carta.';
  } else {
    generatePhrase(phrase);
  }
});

cartaGerada.addEventListener('click', (event) => {
  const span = event.target;
  if (span.tagName === 'SPAN') {
    span.className = arrayRandomClass();
  }
});
