// let ul = document.querySelector("#menu")
// console.log(ul.childNodes) // >> Array : HTMLCollection
// console.log(ul.children)// Array >> bola teglari
// console.log(ul.parentElement) // object >> ota teg

// for(let k of ul.children){
//     k.children[0].style.color = "white"
// }
function modalClose(){
    document.querySelector(".close").parentElement.style.display= 'none'
}

// let li = document.querySelector(".active");
// li.nextElementSibling.children[0].style.color = 'red'// li element :about

// console.log(li.nextSibling) // text about

// let blocks = document.querySelector(".blocks")
// blocks.style.border = "1px solid red"

// let colors = ["red", "blue","green","yellow"]

// for(let element of blocks.children){
//     let rNum = Math.round(Math.random() * (colors.length -1))
//     element.style = "width: 100px;height: 100px;"
//     element.style.backgroundColor = `${colors[rNum]}`
// }


// createElement 
// let ul = document.querySelector("#menu")
// let li = document.createElement("li")
// // li.textContent = "Profile"

// li.innerHTML = `<a href="#">Profile</a>`
// // li.children[0].style.color = "red"
// ul.appendChild(li) // bola teg sifatida qoshish


// ul.firstElementChild.children[0].style.color = "red" // Home qizil
// ul.lastElementChild.children[0].style.color = "red" // Profile qizil

function equalizer(){
    let blocks = document.querySelector(".blocks")
    for(let element of blocks.children){
        let x = Math.round(Math.random()* 255)
        let y = Math.round(Math.random()* 255)
        let z = Math.round(Math.random()* 255)

        let h = Math.round(Math.random()* 250)
        element.style.height = `${h}px`
        if(h > 70){
            element.style.backgroundColor = `rgb(${x},${y},${z})`
        }else if(h > 100){
            element.style.backgroundColor = `red` 
        }
    }
}
window.onload = function(){
    setInterval(equalizer, 100)
}