// lesson 1
// DOM - document Object module
// document , window
// document >> html file , js object
// window >> browser window , js object

// console.log("LOG")
// console.error("ERROR")
// console.debug("DEBUG")
// let obj = {
//     name: "ES6",
//     viewLog() {
//         console.log(this.name)
//     }
// }

// console.log(document)
// console.log(window)
// console.log(window.location.href)
// window.location.href = "kun.uz"

// let ul = document.getElementById("list")
// console.log(ul)
// let main = document.getElementsByName("main")
// console.log(main[0]
// let ul = document.getElementsByClassName()
// let li  = document.getElementsByTagName("li")
// console.log(li)

// ES6
// let ul = document.querySelector("ul")
// console.log(ul)
// let ul_s = document.querySelectorAll("ul")
// console.log(ul_s)

// let ul = document.querySelector("#list")
// console.log(ul.childNodes)
// console.log(ul.children.sort((a, b) => a - b))
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// for (let li of ul.children) {
//     console.log(li)
//     console.log(li.textContent)
// }

// let list = document.querySelector("#list-2")
// console.log(list.previousSibling) //#list-1
// console.log(list.nextSibling) //#list-3

// console.log(list.parentElement) // div.container.lists
// console.log(list.parentElement.parentElement) // main


// function checkAnswers(element, text) {
//     if (text.toLowerCase() == 'dog') {
//         element.style.backgroundColor = "lightblue"
//         console.log("Right")
//         for (let elem of element.parentElement.children) {
//             if (elem !== element) {
//                 elem.style.backgroundColor = 'red'
//             }
//         }
//     } else {
//         for (let elem of element.parentElement.children) {
//             if (elem.textContent.toLowerCase() == 'dog') {
//                 elem.style.backgroundColor = 'lightblue'
//             } else {
//                 elem.style.backgroundColor = 'red'
//             }
//         }
//         console.log("Wrong")

//     }
// }

// lesson 2
// tagName , innerHTML , outerHTML, textContent
let text = document.querySelector(".text")

// console.log(text.tagName) // teg nomi
// console.log(text.textContent) // matnli kontentni
// text.innerHTML = "lorem ipsum dolor" // tagni ichiga html kod joylash <p>***</p>
// text.outerHTML = "<span>lorem ipsum dolor</span>" // tagni ichiga html kod joylash *<span>***</span>*
// text.hidden = true // elementni korinmas qilish
// console.log(text.hidden)
// setInterval(() => text.hidden = !text.hidden, 5000);
// document.createElement(tag nomi) // html element hosil qilish

// task 1
// let names = ["john", "mike", "miguel", "stive"]

// let nameList = document.querySelector("#names")
// for (let i = 0; i < nameList.children.length; i++) {
//     nameList.children[i].textContent = names[i]
// }

// // task 2
// let nums = [1, 9, 4, 3, 7]
// elem = html element
// name = atribut nomi
// elem.hasAttribute(name) – atribut mavjudligini tekshirish.
// elem.getAttribute(name) – atribut qiymatini olish.
// elem.setAttribute(name, value) – artibut nomi va uni qiymatini biriktirish.
// elem.removeAttribute(name) – atributni o'chirish.

// function changeElem() {
//     let box = document.querySelector(".box")
//     let square = document.querySelector(".square")
//     if (box.hasAttribute("name")) {
//         box.removeAttribute("name")
//     } else {
//         box.setAttribute("name", "circle")
//     }
//     let red = Math.round(Math.random() * 255)
//     let green = Math.round(Math.random() * 255)
//     let blue = Math.round(Math.random() * 255)

//     let randomColor = `background-color:rgb(${red},${green},${blue});`
//     square.setAttribute("style", randomColor)

// }

// console.log(Math.floor(12.8)) // 12
// console.log(Math.ceil(12.1)) // 13
// console.log(Math.round(12.5)) // 13

// console.log(Math.round(Math.random() * 10))

// console.log(Math.round(Math.random() * 25) + 25)