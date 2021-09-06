// click,scroll, mouseover, mouseleave,
// keydown, keypress, keyup >> (e) => {e.which}, (e) => {e.keyCode}
// task 1
// c = circle, t = triangle , enter = oval
// task 2
// 3 ta block stopPropagation()

let btn = document.querySelector('button');
let box = document.querySelector('.box');
let body = document.body;

// box.addEventListener('mouseover', ()=>{
//     console.log("Mouse over")
// })
// box.addEventListener('mouseleave', ()=>{
//     console.log("Mouse out")
// })
// let listener = function (event){
//     console.log(event.target)
// }
// btn.addEventListener('click', listener, false) // event qoshish
// btn.removeEventListener('click', listener, false); // event ochirish
// btn.addEventListener('click',(e)=>{
//     console.log(e)
//     e.preventDefault(); // doimiy tarzda ihslashini taminledi
//     e.stopPropagation(); // boshqa eventlarni ishlamasligini taminledi
//     console.log('Button is clicked!')
// })

