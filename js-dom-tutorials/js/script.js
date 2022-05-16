// let menu = document.querySelector("#menu") // ul
// insertBefore()
// let li = document.createElement("li")
// li.innerHTML = `<a href="#">Projects</a>` 

// menu.replaceChild(li, menu.children[2]) // element almashtirish 
// menu.removeChild(menu.children[3]) // element ochirish

// let menuClone = menu.cloneNode(true) // deep = true , hammaa elementlari bilan clone qilinadi
// let menuClone2 = menu.cloneNode(false)//deep = false , faqat elementni ozi clone qilinadi
// console.log(menuClone); // ul>li>a
// console.log(menuClone2); // tegni ozi : ul
// let nav = document.querySelector("nav")

// nav.appendChild(menuClone)

// menu.insertBefore(li,menu.children[2] )  // element joylash

// insertAdjecentHTML 
// let box = document.querySelector('.box');
// box.insertAdjacentHTML("afterbegin", `<h2>Javascript</h2>`)

// let list = document.querySelector("#language")
// function showLetters(){
//     let value = document.querySelector("#letter").value
//     let li = document.createElement("li");
//     li.innerHTML = value[value.length - 1]
//     list.appendChild(li)
// }