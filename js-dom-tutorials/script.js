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

// function animation() {
//     let div = document.querySelector(".box");
//     div.classList.add("anime")
//     div.classList.remove(div.classList[0])
// }

// window.onscroll = function() {
//         let userScrollY = window.scrollY
//         if (userScrollY > 1000) {
//             document.body.style.backgroundColor = "#232328"
//         } else {
//             document.body.style.backgroundColor = ""
//         }
//         console.log(userScrollY)
//     }
// window.onclick = function() {
//     console.log("Click")
// }
// window.onload = function() {
//     console.log("Loaded")
// }
window.onload = function() {
    document.body.style.transition = "all 0.5s"
}

function day() {
    document.body.style.backgroundColor = "#fff2df"
    document.body.style.color = "#000"
}

function night() {
    document.body.style.backgroundColor = "#261b0c"
    document.body.style.color = "#fff"
}



function setRandomPosition() {
    let colors = ["#ffa6000", "#e46155", "#643d5e", "#232328"]
    let boxes = document.querySelectorAll(".box") // massiv
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.borderRadius = `${Math.round(Math.random() * 50)}%`;
        boxes[i].style.backgroundColor = `${colors[Math.round(Math.random() * colors.length)]}`;
        boxes[i].style.top = `${Math.round(Math.random() * 500)}px`;
        boxes[i].style.left = `${Math.round(Math.random() * 500)}px`;
        boxes[i].style.transition = `all 0.5s`;
        // boxes[i].style.width = `${Math.round(Math.random() * 50)}px`;
        // boxes[i].style.height = `${Math.round(Math.random() * 50)}px`;


    }

}