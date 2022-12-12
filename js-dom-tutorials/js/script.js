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
// let text = document.querySelector(".text")

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
// setInterval(changeElem, 2000)

// console.log(Math.floor(12.8)) // 12
// console.log(Math.ceil(12.1)) // 13
// console.log(Math.round(12.5)) // 13

// console.log(Math.round(Math.random() * 10))

// console.log(Math.round(Math.random() * 25) + 25)

// lesson 3
// createElement
// let ul = document.querySelector(".list")
// let li = document.createElement("li")
// li.className = 'item'
// li.textContent = "apple"
// li.style.cssText = "color:green; padding:10px; list-style:none;"
// ul.prepend(li) // element boshiga qoshiladi
// ul.append(li) // element oxiriga qoshiladi
// ul.before(li) // ul elementidan avval qoshish
// ul.after(li) // ul elementidan keyin qoshish
// li.remove() //  elementni o'chirish
// let orange = document.querySelector('.orange')
// orange.replaceWith(li) // korsatilgan element o'rniga qoshish
// console.log(li)
// let names = ["john", "mike", "sara"]
// for (let name of names) {
//     let li = document.createElement("li")
//     li.textContent = name
//     ul.append(li)
// }
// task 1
// let numbersBlock = document.querySelector(".numbers")
// let iterationCount = Math.round(Math.random() * 7) + 1
// for (let i = 0; i < iterationCount; i++) {
//     let randomNumbers = Math.round(Math.random() * 50) + 1
//     let block = document.createElement('div')
//     block.className = "block"
//     block.textContent = randomNumbers
//     block.setAttribute("onclick", "showNumber(this)")
//     numbersBlock.append(block)
// }
// function showNumber(element) {
//     let numberBlock = document.querySelector(".number")
//     numberBlock.textContent = element.textContent
// }
// let main = document.querySelector(".main")

// // main.className = 'block'
// main.classList = "main block box"
// main.classList.

// function theme(elem) {
//     document.body.classList.toggle("dark")

//     if (elem.children[0].classList.contains("bxs-sun")) {
//         elem.children[0].classList.remove("bxs-sun")
//         elem.children[0].classList.add("bxs-moon")
//     } else {
//         elem.children[0].classList.remove("bxs-moon")
//         elem.children[0].classList.add("bxs-sun")

//     }
// }

// lesson 4
// cssText
let mystyle = `
    background-color: rgb(35, 188, 35);
    color: aliceblue;
    text-align: center;
    font-size: 1.3em;
    padding: 5px;
    cursor: pointer;
`
// let p = document.querySelector("p")
// p.style.cssText = mystyle

// p.style.display = "none"
// p.style.position = "fixed"
// p.style.overflow = "scroll"
// console.log(p.style)
// let colors = ["red", 'green', "yellow"]
// setInterval(() => { p.style.backgroundColor = colors[Math.round(Math.random() * colors.length)] }, 1000)
// function minScroll() {
//     window.scrollTo(0, 0)
// }
// function maxScroll() {
//     let s = window.scrollY
//     console.log(s)
//     window.scrollTo(0, window.scrollY += 500)
// }

// console.log(Event)
// click ,contextmenu ,  keypress , keyup, keydown
// element.addEventListener(event, handler, [options]);
// let elem = document.querySelector('.main')
// elem.addEventListener("contextmenu", () => { console.log("Mouse event.") })

document.body.addEventListener("click", function () {
    console.log("Mouse event.")
})
window.addEventListener('keydown', function (e) {
    console.log(this.event) // joriy hodisa obyekti
    console.log(this.event.key) // joriy hodisa obyekti
    console.log(e.target) // hodisa ro'y bergan element
})
window.addEventListener("keyup", function () {
    if (this.event.key === 'q' && this.event.ctrlKey) {
        window.open("https://google.com")
    }
})