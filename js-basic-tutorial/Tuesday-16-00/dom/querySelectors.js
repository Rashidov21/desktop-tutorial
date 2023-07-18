// document.body.style.background = "red";

// console.log(document)
// console.dir(document)

// DOM - document object model 

// let html = {
//     title:"HTML 5 Web page"
// }
// html.title = "HTML 6 WEB page"
// console.log(html)

// get element 
// Elementni ID orqali olish 
// let mainTag = document.getElementById("main-content")
// mainTag.style.padding = "50px 100px"
// mainTag.style.border = "solid 5px red"
// console.log(mainTag)

// Elementni class orqali olish 
// let container = document.getElementsByClassName("container")
// console.log(container)

// querySelector , querySelectorAll
// let ul = document.querySelector(".list")
// console.log(ul)
// let main = document.querySelector("#main-content")
// console.log(main)
// let btn = document.querySelector("button")
// console.log(btn)

// let cont = document.querySelectorAll(".container")
// console.log(cont)
// let liElems = document.querySelectorAll(".list-item")
// console.log(liElems.length) // 6

// function setRandomLiBgColor(){
//     for(let elem of liElems){
//         elem.style.backgroundColor = "transparent"
//     }
//     let n = Math.round(Math.random() * liElems.length-1)
//     let red = Math.round(Math.random() * 255);
//     let green = Math.round(Math.random() * 255);
//     let blue = Math.round(Math.random() * 255);
//     liElems[n].style.backgroundColor = `rgb(${red},${green},${blue})`
// }


// for(let elem of liElems){
//     console.log(elem)
// }


// let li = document.querySelector(".list-item")
// console.log(li)
// let btn = document.querySelector("button")
// console.log(btn.matches("button[class]")) // true
// console.log(btn.matches("button[id]")) // false