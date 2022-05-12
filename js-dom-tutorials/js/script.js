// window 
// document
// location


// BOM - Browser Object Model 
// DOM - Document Object Model

// document = html >> object >> sifat + method
// let obj = {
//     name: "John",
//     age:12,
//     friends:["mike", "david"]
// }
// getElement >> 1-object , 2-HTMLAllCollection (1-object. 2-Array)
// getElement >> object
// getElements >> HTMLAllCollection >> Array
// console.dir(obj)
// let box = document.getElementById("box") // ID boyicha topish
// let box = document.getElementsByClassName("box")// CLASS boyicha topish
// let box = document.getElementsByTagName("div")// TAG boyicha topish
// let box = document.querySelector("#box") // object
// let li = document.querySelectorAll("li") // NodeList >> ARRAY
// li.forEach((item)=>{
//     console.log(item.textContent)
// })

// let blocks = document.querySelectorAll(".block");// NodeList >> ARRAY
// function setRandomColor(elements){
//     let colors = ["red", "yellow", "blue", "pink", "orange", "tomato"]
//     elements.forEach(element => {
//         let randomNum = Math.round(Math.random()* elements.length)
//         element.style.backgroundColor = `${colors[randomNum]}`
//     });
// }
// setRandomColor(blocks)
// let con = document.querySelector('.container')
// console.dir(con) // object
// console.log(con.childNodes); //Array Elements + content
// console.log(con.children);// child Elements
// console.log(con.parentElement); // main

// let ul = document.querySelector(".texts"); // ul
// console.log(ul.children) // array >> li
// ul.children.forEach(element => {
//     element.style.fontSize = `${Math.round(Math.random() * 25)}px`
// });
// for(let i = 0; i < ul.children.length; i++){
//     ul.children[i].style.fontSize = `${Math.round(Math.random() * 25)}px`
// }

function openCloseMenu(){
    let sidebar = document.querySelector(".mobile");
    sidebar.classList.toggle("active")
}