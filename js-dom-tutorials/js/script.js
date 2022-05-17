let box = document.querySelector(".box")
let p = document.createElement("p")
p.innerText = "lorem"
// box.insertAdjacentElement("beforebegin", p) // teg boshlanishidan oldin
// box.insertAdjacentElement("afterbegin", p) // teg boshlanishidan keyin
// box.insertAdjacentElement("beforeend", p) // teg tugashidan oldin
// box.insertAdjacentElement("afterend", p) // teg tugashidan keyin

let menu = document.querySelector("#menu");
// console.log(menu.children)//li
// menu.insertBefore(p,menu.children[2]) // siz korsatgan elem ni siz korsatgan elemdan oldin qoshadi
// menu.replaceChild(p, menu.children[2])// elem almashtirish
// menu.removeChild(menu.children[2]) // elem ochirish

// let menuClone = menu.cloneNode(true); // DEEP = TRUE ichidagi hamma narsa klonlashadi
// let menuClone2 = menu.cloneNode(false); // DEEP = FALSE faqat tegni ozi klonlashadi
// console.log(menuClone)
// console.log(menuClone2)

// document.querySelector("nav").appendChild(menuClone)
/* <button onclick="main('afterend')">After</button> */
// function main(position){
//     let box = document.querySelector(".box")
//     let p = document.createElement("p")
//     p.innerText = "lorem";
//     if(position == "afterend"){
//         box.insertAdjacentElement(position, p)
//     }
// }
/* 
<input type="text"  id="color">
<input type="number"  id="pos">

<button onclick="main()">Ok</button>
<ol id="colorList">
    <li>Red</li>
    <li>Blue</li>
    <li>Yellow</li>
    <li>Pink</li> 
</ol>*/
function main(){
    let color = document.querySelector("#color").value
    let position = document.querySelector("#pos").value    
    let li = document.createElement("li")
    let colorList = document.querySelector("#colorList")
    li.innerText = color

    if(position > colorList.children.length){
        alert("NOT")
        return console.error("position out of list index")
    }
    for(let item of colorList.children){
          
        if(item.textContent.toLowerCase() == color.toLowerCase()){
            alert("NOT")
            return false
        }else{
            colorList.insertBefore(li, colorList.children[position - 1])
        }
    }    
}