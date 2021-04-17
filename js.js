/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable prefer-const */
/* eslint-disable prefer-arrow-callback   */
/* eslint-disable no-undef    */
/* eslint-disable consistent-return  */
/* eslint-disable no-return-assign */
/* eslint-disable no-multi-assign   */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars   */
/* eslint-disable no-extra-semi */
// eslint-disable-next-line no-unused-vars

// document.querySelector('.text-inp').onkeydown = func;
// clickText.onclick = func;
// function func(event) {
//   let ru = {
//     а: 'a',
//   };
//   let k = event.key;
//   if (ru[k] != undefined) {
//     text3Box.textContent += ru[k];
//     text2Box.textContent += k;
//   };
// };
// window.onload = () => {
//   document.querySelector('.click-text').onclick = function func2() {
//     let textInp = document.querySelector('.text-inp').value;
//     console.log(textInp.value);
    
//     let text2Box = document.getElementById('text2-box');
//     let text3Box = document.querySelector('.text3-box');
//     text2Box.classList.add('tex2tbox');
//     text2Box.textContent = textInp;
//     document.body.appendChild(text2Box);
//   };
// };

let text2Box = document.querySelector('.text2-box');
let text3Box = document.querySelector('.text3-box');

function func(word) {
  let arr = [];
  let splnt = word.split('');
  let russ = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ъ: '',
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'yu',
    я: 'ya',
    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'YO',
    Ж: 'ZH',
    З: 'Z',
    И: 'I',
    Й: 'Y',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'C',
    Ч: 'CH',
    Ш: 'SH',
    Щ: 'SHCH',
    Ъ: '',
    Ы: 'Y',
    Ь: '',
    Э: 'E',
    Ю: 'YU',
    Я: 'YA',
    ' ': ' ',
  };
  
  for (let i = 0; i < splnt.length; i++) {
    if (russ[splnt[i]] === undefined) {
      arr.push(splnt[i]);
    } else {
      arr.push(russ[splnt[i]]);
    };
  };
  return arr.join('');
};

window.onload = () => {
  document.querySelector('.click-text').onclick = function func2() {
    let textInp = document.querySelector('.text-inp');
   
    console.log(textInp.value);
   
    let div = document.createElement('div');
    let div2 = document.createElement('div');

    div.textContent = textInp.value;
    div2.textContent = func(textInp.value);

    if (div.textContent !== '') {  
      text2Box.append(div);
      text3Box.append(div2);
    };
    textInp.value = null;
  };
};
