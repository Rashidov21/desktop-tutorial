// DOM >> Document Object Module 
// window , document
// window >> brauzer oynasini ozida aks ettiradi 
// document >> html hujjatimizni


// console.log(typeof window.alert())
// object 
// 1- atributlari >> sifatlari
// 2- metodlari >> hatti-harakatlari
// console.dir(document)
// document.onclick = function main() {
//     console.log("HTML is clicked")
// }
// console.dir(window)
// window.onkeypress = (e) => {
//     console.log(e.which)
// }
// function changeBlock() {
//     let box1 = document.getElementById("box");
//     // console.log(box1) // div#box topildi
//     box1.style.background = "red";
//     box1.style.width = "200px";
//     box1.style.height = "200px";
// }



// function randomColor() {
//     let colors = ["red", "yellow", "green", "blue", "orange"]
//     let rNum = Math.round(Math.random() * colors.length);
//     let box = document.getElementById("box");
//     box.style.background = `${colors[rNum]}`

//     document.body.style.background = `${colors[rNum]}`
// }

// function ListBg() {
//     let colors = ["red", "yellow", "green", "blue", "orange"]

//     let ul = document.getElementById("list");
//     for (let i = 0; i < ul.childNodes.length; i++) {
//         let rNum = Math.round(Math.random() * colors.length);
//         if (i % 2 === 1) {
//             ul.childNodes[i].style.background = `${colors[rNum]}`
//         }

//     }
// }
// ListBg()

// GET Element

// document.getElementById("id_name") // 1 object
// document.getElementsByTagName("tag_name") // HTMLCollection >> massiv
// document.getElementsByClassName("class_name") // HTMLCollection >> massiv

// document.querySelector("selector") // css ".box" || "#app" || "p"
// document.querySelectorAll() // HTMLCollection >> massiv

// let boxes = document.querySelectorAll(".box"); //HTMLCollection >> massiv
// for (let i = 0; i < boxes.length; i++) {
//     console.log(boxes[i])
// }
// let box = document.querySelector(".box")
// console.log(box)
// const pi = 3.14;
// let app = document.querySelector("#app")
// app.innerHTML = `<h2>Value of PI = ${pi}</h2>`


// function changeClassName() {
//     let boxes = document.querySelectorAll(".box")
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].className = "box red"
//     }
// }

// function getOldClassName() {
//     let boxes = document.querySelectorAll(".box")
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].className = "box"
//     }
// }

// div.className = "block";
// div.classList.add("test")
// div.classList.remove("anime")
// div.classList.toggle("anime")

// function color() {
//     let div = document.querySelector(".box");
//     div.classList.add("blue")
// }

// function border() {
//     let div = document.querySelector(".box");
//     div.classList.add("border")
// }

function animation() {
    let div = document.querySelector(".box");
    div.classList.add("anime")
    div.classList.remove(div.classList[0])
}