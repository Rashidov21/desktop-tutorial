let btn = document.querySelector("button")
let box = document.querySelector(".box")
// let w = box.style.width;
// box.style.transition = "all 0.3s"
// w = Number(w)

// btn.onclick = function(){
//   console.log("Click")
// }
// btn.addEventListener("click", e => {
//         w += 20
//         box.style.width = `${w}px`
//     })
    // btn.onclick = function() {
    //         box.className = "circle"
    //     }
    // onclick, contextmenu
    // onmousedown, onmouseup
    // onmousemove, onmouseout, onmouseover

// onkeydown, onkeyup, onkeypress

// DOMContentLoaded, onload >> window.onload

// onfocus, onblur


// let bar = document.querySelector(".sidebar");
// let openCloseBtn = document.querySelector("#openclose");
//
// function openClose() {
//     bar.classList.toggle("open")
// }
//
// openCloseBtn.addEventListener("click", openClose);
// // openCloseBtn.addEventListener("click", (evt) => {
// //     console.log(evt)
// // })
//
// window.addEventListener("keydown", function(e) {
//     // console.dir(e)
//     // console.log(e.which) // belgi kodi
//     // console.log(e.keyCode) // belgi kodi
//     // console.log(e.key) // BELGINI OZI
// });

//
// btn.addEventListener("click", function(event){
//   event.stopPropagation()
//   console.log(event.target)
// })
// btn.removeEventListener("click", true) // EVENT ni olib tashlash
let form = document.forms[0]
// let name = form[0];
// let email = form[1];
// let submit = form[2];
function getInputValues(){
  let values = [];
  for(let i = 0; i < form.elements.length; i++){
    // form.elements[i].classList.add("input")
    // form.elements[i].setAttribute("placeholder", "TEST")
    values.push(form.elements[i].value)
  }
  let height = parseInt(values[0])
  let weight = document.getElementById("weight");
  weight.innerHTML = `<b>${height - 100}</b>`
}
let sub = document.getElementById("getInput");

form.onkeyup = getInputValues


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => console.log(response))
//   .then(json => console.log(json))

// http://localhost:8000/postlar/python
// HTTP , HTTPS
  // get - olish
  // post - yozish
  // put - yangilash
  // delete - ochirish

// console.log()
// console.dir()
// console.log(typeof 1)
