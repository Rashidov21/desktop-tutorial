// window 
// document
// location


// BOM - Browser Object Model 
// DOM - Document Object Model

// document = html >> object >> sifat + method


// let obj = {
//     name: "object",
//     move: function() {
//         return "move object"
//     }
// }

// console.log(window)

// console.error("XAtolik")

// document.body.style.background = "orange"

// console.log(document)
// Teg nomi boyicha html ni ichidan teg ni olish
// let list = document.getElementsByTagName("li") // array
//     // Class nomi boyicha html ni ichidan teg ni olish
// let ul = document.getElementsByClassName("mylist") // array
// console.log(list)
// console.log(ul)
// Id nomi boyicha html ni ichidan teg ni olish
// let elem = document.getElementById("app") // object
// console.log(elem)


// let elements = document.querySelectorAll("li")
// let li = document.querySelectorAll("#app")
// console.log(elements)
// console.log(li)

// let body = document.querySelector("body")
// console.log(body)
// let items = document.querySelectorAll(".item")
// console.log(items)

// let list = document.querySelector(".mylist");
// let colors = ["red", "blue", "orange", "pink"]

// for (let i = 0; i < list.children.length; i++) {
//     let rNum = Math.round(Math.random() * colors.length)
//     list.children[i].style = `padding:10px; background:${colors[rNum]};`
// }
// let app = document.querySelector("#app")
// app.className = "box"
// app.classList.add("red")
// app.parentElement.style.background = '#232328'
// console.dir()
// app.onclick = function() {
//     console.log("APP is clicked")
// }

// console.log(location.href)
// console.log(location.host)
// console.log(location.port)
// console.log(location.protocol)
// console.log(location.pathname)
// let box = document.querySelector(".box");
// box.onclick = () => {
//         location.pathname = "/contact.html"
//             // window.open("https://kun.uz", true)
//     }
// let link = document.querySelector("#link")
// link.href = "https://t.me/pybloguz"

// let obj = {
//     href: ""
// }
// console.log(obj.href)
// obj.href = "blavla"
// console.log(obj.href)