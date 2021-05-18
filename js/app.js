// console.log(document)
// document = html > *
// document.body = body > *
let btn = document.querySelector('.btn');
let box = document.querySelector('.box');
console.dir(window)
console.dir(document)
console.dir(box)
function Scroll(){
  document.querySelector('.box').innerHTML = '<h1>Hello</h1>'
}
// btn.onclick = function(){
//   console.log('Click')
//     // let box = document.querySelector('.box');
//     // box.classList.add('hide')
// }
function x(){
  box.classList.remove('jump');
}
function myFunc(){
  document.querySelector('.box').classList.add('jump');
   
}


  


// let myFunc2 = function(){
//   console.log('Click 2')
// }
// btn.addEventListener('click', myFunc);
// btn.addEventListener('click', myFunc2);

function Show(){
  document.querySelector('.box').classList.add('show');
  document.querySelector('.box').classList.remove('hide')
};
function Hide(){
  document.querySelector('.box').classList.add('hide')
  document.querySelector('.box').classList.remove('show')
};
// btn.setAttribute('name', 'Men');
// btn.setAttribute('id', 'myID');
// console.log(btn)



// box.setAttribute('id', 'myBox');
// console.log(box);
// box.removeAttribute('id');
// console.log(box)
// box.removeChild(box.childNodes[0])

