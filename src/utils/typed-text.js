const defOptions = { delay: 1000, speed: 100, cursorEnd: true };
const typedText = (container, arrayWords, options = defOptions) => {
  setTimeout(() => {
    addTextToContainer(arrayWords, container, options );
  }, options.delay || 2000);
};

async function addTextToContainer(array, container, options) {
  let i = 0;
  container.innerHTML = '';
  while (i < array.length) {
    const div = document.createElement(array[i]['el'] || 'div');
    if (array[i]?.style) {
      for (const s in array[i]?.style) {
        div.style[s] = array[i].style[s];
      }
    }
    container.appendChild(div);
    const lastElement = i === array.length - 1 ? true : false;
    await typedLetters(array[i].text, div, lastElement, options);
    i++;
  }
}

async function typedLetters(line, element, lastElement, options) {
  const arrayLetters = line.split('');
  let str = '|';
  for (let i = 0; i < arrayLetters.length; i++) {
    await sleep(options.speed || 1000);
    str = str.substring(0, str.length - 1);
    str += arrayLetters[i];
    str += '|';
    element.innerText = str;
  }
  str = str.substring(0, str.length - 1);
  element.innerText = str;
  if (lastElement) {
    if (!options.cursorEnd) {
      return;
    }
    animateCarriage(element);
  }
}

async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const animateCarriage = (element) => {
  const span = document.createElement('span');
  span.innerText = '|';
  element.appendChild(span);

  setInterval(() => {
    if (span.style.color === 'transparent') {
      span.style.color = 'inherit';
    } else {
      span.style.color = 'transparent';
    }
  }, 500);
};

export default typedText;
