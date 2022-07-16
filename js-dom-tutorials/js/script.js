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
// function closeModal() {
//     let btn = document.querySelector('.close')
//     btn.parentElement.style.display = 'none'
// }
////////////////////////////////////////////////////////////////////////////////////////
// PARENT Element vs children
// let list = document.querySelector(".list") // ul
// console.dir(list)
// console.log(list.childElementCount) // tegni ichidagi elementlarni soni
// console.log(list.childNodes) // tegni bola elementlarni massiv qaytaradi
// console.log(list.children) // tegni bola teg elementlarni massiv qaytaradi

// let menu = document.querySelector("#menu");
// let currentItem = document.querySelector(".current");
// console.log(menu)
// console.log(currentItem)

// console.log(currentItem.nextSibling)
// console.log(currentItem.nextElementSibling.textContent)
// let tableBlock = document.querySelector(".table");

// let table = document.createElement("table") // <table></table>
// let tr = document.createElement("tr") // <tr></tr>
// for (let i = 0; i < 3; i++) {
//     let td = document.createElement("td") // td
//     td.innerText = `Item = ${i}` //<td>Item = {i}</td> 
//     tr.appendChild(td) // <tr><td>Item = {i}</td></tr>
// }
// table.appendChild(tr)
// table.border = "1"
// tableBlock.appendChild(table)


// let img = document.createElement("img")
// img.src = '../src/image.png'
// document.body.appendChild(img)

// let title = document.createElement("h1")
// title.innerText = "Hello world"
// title.style.color = "#555"
// document.body.appendChild(title)

// let singers = [
//     {
//         name: "Michael Jackson",
//         songs: ["Billi Jean", "I love you"]
//     },
//     {
//         name: "One Direction",
//         songs: ["Kiss you", "Drag me down"]
//     },
//     {
//         name: "Sherali Jo'rayev",
//         songs: ["Gulbadan", "O'zbegim"]
//     },
// ]

// const MY_ACCESS = "2PSLxRT6iUd99QDS13bmIMFfKlM5rxA41h96Zcl8tUs"
// let imagesBlock = document.querySelector(".images")
// imagesBlock.style.display = "flex"
// fetch(`https://api.unsplash.com/photos/?client_id=${MY_ACCESS}`)
//     .then(res => res.json())
//     .then(data => {

//         for (item of data) {
//             let link = document.createElement("a")
//             let href = item.links.download
//             link.href = href
//             link.setAttribute("download", "")
//             link.innerText = "download"
//             link.style.cssText = `
//                 color:white;
//                 padding:10px 30px;
//                 margin:10px;
//                 border-radius:10px;
//                 background-color:#554;

//             `

//             imagesBlock.appendChild(link)
//         }
//     })

// fetch("https://api.unsplash.com/photos/random?client_id=2PSLxRT6iUd99QDS13bmIMFfKlM5rxA41h96Zcl8tUs")
//     .then(res => res.json())
//     .then(data => console.log(data))

