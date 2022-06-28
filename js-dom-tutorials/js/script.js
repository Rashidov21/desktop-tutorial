// console.log(document) // html hujjat obyekti 
// console.log(window) // brauzer oyna obyekti

// let html = document
// console.log(html.body) // BODY
// html.body.className = "red"
// html.body.background = "red"
// console.log(html.body.tagName) // BODY

// Elementni qidirish va olish 

// let a = document.getElementsByTagName("a") // Elementni tag nomi olish
// console.log(a) // HTMLCollection nechta shu tag dan bolsa topib array qilib qaytaradi
// let cherry = document.getElementById("cherry") // ID boyicha olish 
// let orange = document.getElementsByClassName("orange") //CLASS boyicha olish (array)

// for (let item of document.getElementsByTagName("li")) {
//     console.log(item.innerText) // Elementni ichidagi matn 
// }
// let p = document.getElementById("text")
// p.innerText = "o'zimni shaxsiy matnim"
// console.log(p)

// querySelector - p, #text, .text 
// let ul = document.querySelector("ul") // css selectori boyicha elementni topish
// let li = document.querySelectorAll("li") // css selectori boyicha elementlarni topish

// console.log(ul)
// for (let item of li) {
//     console.log(item)
// }

// let orange = document.querySelector(".orange")
// console.log(orange)

// name boyicha olish 
// let elements = document.getElementsByName("language")
// console.log(elements.length) // 3
// console.log(elements[0])
// console.log(elements[2])

// let list = document.querySelector(".list") // ul tegi

// console.log(list.parentElement) // ota elementni qaytaradi (div.container)
// console.log(list.children) // array [li, li ....]
function closeModal() {
    let btn = document.querySelector('.close')
    btn.parentElement.style.display = 'none'
}