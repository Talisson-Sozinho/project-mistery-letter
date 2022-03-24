const cartaGerada = document.getElementById('carta-gerada');
const inputPhrase = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');

const stylesForRandomizer = {
  groupStyle: ['newspaper', 'magazine1', 'magazine2'],
  groupHeight: ['medium', 'big', 'reallybig'],
  groupRotate: ['rotateleft', 'rotateright'],
  groupIncline: ['skewleft', 'skewright'],
};

createLetterButton.addEventListener('click', () => {
  const phrase = inputPhrase.value.split(' ');
  if (phrase.length === inputPhrase.value.length + 1) {
    cartaGerada.innerText = 'por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.innerHTML = null;
    for (let index = 0; index < phrase.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = phrase[index];
      span.classList.add(stylesForRandomizer.groupStyle[Math.round(Math.random() * (stylesForRandomizer.groupStyle.length - 1))]);
      span.classList.add(stylesForRandomizer.groupHeight[Math.round(Math.random() * (stylesForRandomizer.groupHeight.length - 1))]);
      span.classList.add(stylesForRandomizer.groupRotate[Math.round(Math.random() * (stylesForRandomizer.groupRotate.length - 1))]);
      span.classList.add(stylesForRandomizer.groupIncline[Math.round(Math.random() * (stylesForRandomizer.groupIncline.length - 1))]);
      cartaGerada.appendChild(span);
    }
  }
});
