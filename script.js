const cartaGerada = document.getElementById('carta-gerada');
const inputPhrase = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');
const counterElement = document.getElementById('carta-contador');

function arrayRandomClass() {
  const stylesForRandomize = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];
  const stringClassName = [];
  for (let index = 0; index < stylesForRandomize.length; index += 1) {
    const randomPosition = Math.round(Math.random() * (stylesForRandomize[index].length - 1));
    stringClassName.push(stylesForRandomize[index][randomPosition]);
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

function generateLetter() {
  const phrase = inputPhrase.value.split(' ');
  if (phrase.length === inputPhrase.value.length + 1) {
    cartaGerada.innerText = 'por favor, digite o conteúdo da carta.';
  } else {
    generatePhrase(phrase);
  }
}

function randomizeWord(event) {
  const span = event.target;
  if (span.tagName === 'SPAN') {
    span.className = arrayRandomClass();
  }
}

createLetterButton.addEventListener('click', generateLetter);
cartaGerada.addEventListener('click', randomizeWord);
