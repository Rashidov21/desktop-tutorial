// Event
// 1 - window + pageSize , scroll
// 2 - document + new Element
// 3 - mouse + click , dbclick
// 4 - keyboard + keypress , keyup , keydown





// event - object
// let btn = document.querySelector("button")
// let box = document.querySelector(".box")
// console.dir(btn)
// btn.onclick = function() {
//     //click 
//     console.log("Hello world")
// }

// addEventListener
// addEventListener(1 - event nomini , 2 -funksiya)
// let btn = document.querySelector("button")
// let box = document.querySelector(".box")
// btn.addEventListener("click", function(event) {
//     //     console.log(event) // PointerEvent 
//     //     console.log(event.target) // button 
//     event.stopPropagation()
//     event.target.textContent = "Clicked"
//         //     console.log("Hello world")
// })
// box.addEventListener("click", function() {
//     document.body.style.backgroundColor = "red"
// })
// event.stopPropagation() boshqa elementlarga shu event ishlamasligi 
// event.preventDefault() elementni doimiy eventini bekor qilish uchun
// let link = document.querySelector("a")
// link.addEventListener("click", (event) => {
//     event.preventDefault() // doimiy event ni bekor qilish
//     window.location.href = "https://pyblog.uz"
// })

// let btn = document.querySelector("button")

// window.addEventListener("keypress", (event) => {
//     //     console.log(event.code) // Enter
//     //     console.log(event.key) // Enter
//     //     console.log(event.which) // 13
//     if (event.code == "Enter") {
//         alert("Enter pressed")
//     }

// })
// click = chap tugma
// dbclick = chap tugma 2 marta
// scroll = yurgich ayalantirganda
// mouseover = css hover 
// mousemove = sichqoncha qimirlatilgan vaqt 
// mouseleave = css hover ni tugashi 

// keypress =yozuv tugmalari bosilgan vaqt 
// keydown = istalgan tugma bosilgan vaqt
// keyup = istalgan tugma bosib qoyvorilgan vaqt  


// let closeBtn = document.querySelector(".close");
// closeBtn.addEventListener("click", function(event) {
//     let modal = document.querySelector(".modal")
//     modal.style.display = 'none'
// })
// window.addEventListener("keyup", function(event) {
//     //     console.log(event.code)
//     if (event.code == 'Escape') {
//         let modal = document.querySelector(".modal")
//         modal.style.display = 'none'
//     }
// })

// let box = document.querySelector(".box")
// box.addEventListener("mouseover", function() {
//     box.style.backgroundColor = "red"
// })
// box.addEventListener("mouseleave", function() {
//     box.style.backgroundColor = "orange"
// })
// box.addEventListener("mousemove", function(event) {
//     //     console.log("mouse moved")
//     //     console.log(event.screenX + "X" + event.screenY)
//     //     console.log(event.pageX + "X" + event.pageY)
// })l
// let inp = document.querySelector("#text")
// inp.addEventListener("keyup", function(event) {
//     inp.value === inp.value.toLowerCase()
//     inp.value === inp.value.toUpperCase()
// })