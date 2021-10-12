function Open(){
    let menu = document.getElementById("side-menu");
    menu.style.left = "0px"
}
function Close(){
    let menu = document.getElementById("side-menu");
    menu.style.left = "-255px"
}
// img.src = "img/foo.jpg"
// img.src = img[1]
// правильно
// button.onclick = sayThanks;
//
// // неправильно
// button.onclick = sayThanks();


// let obj = {
//     name:"name",
//     age:30,
//     getInfo(){
//         console.log(this.name)
//     }
// }
// let i = document.getElementsByTagName("input")
// console.dir(i)

// element.addEventListener(event, handler[, options]);

let btn = document.getElementById("button");
let div = document.getElementById("test");
div.innerHTML = "click me !"
// div.outerHTML = "click "
// btn.addEventListener("mousemove",Open, false)
// btn.removeEventListener("mousemove",Open)
// btn.addEventListener("click", (event)=>{
//     // console.dir(event)
//     console.dir(event.target)
//
// })
// window.addEventListener("keypress", (e)=>{
//     // console.log(e.which)
//     // console.log(e.key)
//     // console.log(e.type)
//     // console.log(e.currentTarget)
//     console.log(e.clientX)
//     if(e.which === 13){
//         Open()
//     }
//     if(e.which === 32){
//         Close()
//     }
// })