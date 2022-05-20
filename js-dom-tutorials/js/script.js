// Event
// 1- window event , DOMContentLoaded + onload 
// 2- mouse event 
        // mousedown
        // mouseup
        // mousemove
        // mouseleave
        // click
        // dblclick
// 3- keyboard event 
    // keydown
    // keypress
    // keyup
// 4- document size or scroll events 


// function eventFunc(e){
//     console.log(event); //PointerEvent
// }
// let form = document.querySelector("#form")
// form.addEventListener("submit", (e)=>{
//     e.preventDefault()// doimiy eventi bekor qilish
// })
// let link = document.querySelector("#link")
// link.addEventListener("click", (e)=>{
//     e.preventDefault() // doimiy event bekor qilish
// })
// let btn = document.querySelector("#btn")
// btn.addEventListener("click", (e)=>{
//     console.log("btn");
//     // e.preventDefault();
//     // e.stopPropagation() // faqat shu element uchun event ishlaydi
//     // console.dir(e.target) // event bolayotgan element
// }) // 1-param = event nomi, 2-param = function
// let body = document.body 
// function mouseListener(event){
//     // event.stopPropagation()
//     // event.preventDefault()
//     // console.log(event.type); // click
//     console.log("body")
// }

// body.addEventListener("click",mouseListener)

// let btn = document.querySelector('#btn');

// // add the event listener
// let showAlert = function() {
//     alert('Clicked!');
// };
// btn.addEventListener('click', showAlert);

// // remove the event listener
// btn.removeEventListener('click', showAlert);


window.addEventListener("DOMContentLoaded", fnction(e){
    // DOMContentLoaded >> sahifada HTML va DOM ni tayyorlagan event
    console.log("DOM loaded");
})
// window.addEventListener("load", function(){
//     // load  >> sahifa butunlay yuklangan vaqt , rasm, css, html hamasi bilan 
//     console.log("Page loaded")
// })
// console.dir(window)
// window.onload = (event) => {
//     console.log('The page has fully loaded');
// };

// let btn = document.querySelector('#btn');
// btn.addEventListener("click", function(e){
//     console.log(e.clientX )
//     console.log(e.clientY )
// })
// document.body.addEventListener("mousemove", function(e){
//     console.log(e.screenX+"x"+e.screenY) // sichqoncha X VA y oqida oynada turgan joyi
//     // console.log(e.screenY)// sichqoncha y oqida oynada turgan joyi
// })

// btn.addEventListener("mousemove", (e)=>{
//     console.log("mousemove")
// })
// btn.addEventListener("mouseleave", (e)=>{
//     console.log("mouseleave")
// })
// btn.addEventListener("mouseup", (e)=>{
//     console.log("mouseup")
// })
// btn.addEventListener("mousedown", (e)=>{
//     console.log("mousedown")
// })
// btn.addEventListener("click", (e)=>{
//     console.log("click")
// })

// keydown = tugma bosilgan vaqt 
// keyup = tugma bosib qoyvorilgan  vaqt 
// keypress = tugma bosib qoyvorilgan  vaqt 
// window.addEventListener("keypress", (e)=>{
    
//     // e.ctrlKey
//     // e.altKey
//     if(e.key == "Enter" && e.shiftKey == true){
//         console.log("Enter")
//     }
//     console.log(e) // tugmani ozi 
//     // console.log(e.keyCode) // tugmani tartib kodi  
//     // console.log(e.which) // tugmani tartib kodi  
// })

// window.onscroll = function(e){
//     // window.pageXOffset = oynani X oqidagi masofasi
//     // window.pageYOffset = oynani Y oqidagi masofasi
//      console.log(window.pageYOffset);
// }
// for(let i = 0; i< 10; i++){
//     let div = document.createElement("div")
//     div.style.width = `${Math.round(Math.random() * 10 + 30)}px`
//     div.style.height = `${Math.round(Math.random() * 10 + 30)}px`
//     div.style.margin = "25px"
//     div.style.borderRadius = `${Math.round(Math.random() * 10 + 50)}%`
//     div.style.background = "orange"
//     document.querySelector("#bbb").appendChild(div)
// }
// window.addEventListener('scroll', function(e){
//     let section = this.document.querySelector("#bbb")
//     for(let item of section.children){
//         item.style.left = `${Math.round(Math.random() * 100 + 300)}px`
//         item.style.right = `${Math.round(Math.random() * 100 + 300)}px`
//     }
// })