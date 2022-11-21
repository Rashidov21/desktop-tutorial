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


function checkAnswers(element, text) {
    if (text.toLowerCase() == 'dog') {
        element.style.backgroundColor = "lightblue"
        console.log("Right")
        for (let elem of element.parentElement.children) {
            if (elem !== element) {
                elem.style.backgroundColor = 'red'
            }
        }
    } else {
        for (let elem of element.parentElement.children) {
            if (elem.textContent.toLowerCase() == 'dog') {
                elem.style.backgroundColor = 'lightblue'
            } else {
                elem.style.backgroundColor = 'red'
            }
        }
        console.log("Wrong")

    }
}