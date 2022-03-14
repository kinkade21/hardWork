"use strict";

// Задание 1
const DomElement = function (selector = '', style = {}) {

  this.selector = selector || '';

  // обязательные по условию свойства стилей
  if (!('height' in style)) { style.height = "0px"; }
  if (!('width' in style)) { style.width = "0px"; }
  if (!('bg' in style || 'background' in style)) { style.bg = "rgba(0, 0, 0, 0)"; }
  if (!('fontSize' in style)) { style.fontSize = "1rem"; }

  for (let key in style) {
    this[(key === 'background') ? 'bg' : key] = style[key];
  }
};

// добавление элемента класса DomElement на страницу
DomElement.prototype.addInPage = function () {
  const idTag = (this.selector + '').trim()[0];
  const nameAttr = (this.selector + '').trim().slice(1);
  const dictonary = {
    '.': { tag: 'div', attr: 'class' },
    '#': { tag: 'p', attr: 'id' },
  };
  let element = null;

  if (idTag in dictonary) {
    // приведение названия стиля JS в соответствие CSS
    const toCSSstyle = (s) => (s.replace(/[A-Z]/g, '-' + '$&').toLowerCase());

    let cssText = '';

    element = document.createElement(dictonary[idTag].tag);
    element.setAttribute(dictonary[idTag].attr, nameAttr);

    Object.keys(this).filter(key => key !== 'selector').forEach((key) => {
      cssText += `${toCSSstyle(key === 'bg' ? 'background' : key)}: ${this[key]}; `;
    });
    element.style.cssText = cssText;

    // подключать когда весь HTML был полностью загружен и пройден парсером
    document.addEventListener('DOMContentLoaded', function (event) {
      document.querySelector('body').append(element);
    });
  }
  return element;
};

const myP = new DomElement('#myP', { height: '12px', width: '150px', bg: 'yellow', fontSize: '10px' });
const myDiv = new DomElement('.myDiv', { height: '12px', width: '150px', bg: 'yellow', fontSize: '10px' });

myP.addInPage().textContent = 'Это параграф';
myDiv.addInPage().textContent = 'А это дивный блок';

// Задание 2
const square = new DomElement('.square',
  {
    height: '100px', width: '100px', background: 'rgba(175,238,238,0.8)', position: 'absolute', color: 'blue',
    top: '0px', left: '0px', border: '1px solid red', boxSizing: 'border-box'
  });
const elSquare = square.addInPage();

document.addEventListener('keydown', (event) => {
  const step = 10;
  let x = parseInt(elSquare.style.left), width = parseInt(elSquare.style.width),
    y = parseInt(elSquare.style.top), height = parseInt(elSquare.style.height);

  switch (event.key) {

    case 'ArrowRight':
      x = (x + width + step) > window.innerWidth ? window.innerWidth - width : x + step;
      break;
    case 'ArrowLeft':
      x = x < step ? 0 : x - step;

      break;
    case 'ArrowDown':
      y = (y + height + step) > window.innerHeight ? window.innerHeight - height : y + step;
      break;
    case 'ArrowUp':
      y = y < step ? 0 : y - step;
      break;
  }
  elSquare.style.left = x + 'px';
  elSquare.style.top = y + 'px';

});

