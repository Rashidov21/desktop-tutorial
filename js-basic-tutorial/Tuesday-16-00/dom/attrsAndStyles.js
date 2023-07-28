// let elem = document.querySelector(".content");
// console.log(elem)

// console.log(elem.hasAttribute("name")) // true 
// console.log(elem.hasAttribute("id")) // false 

// elem.setAttribute("id","myContent")
// console.log(elem.getAttribute("name")) // myContent
// elem.removeAttribute("name")

// setAttribute - atrr qoshish
// getAttribute - atrr olish
// hasAttribute - atrr tekshirish
// removeAttribute - atrr ochirish

// let elem = document.querySelector(".element");

// elem.style.width = "300px";
// elem.style.height = "300px";
// elem.style.border = "solid 1px gray";
// elem.style.borderRadius = "16px";
// elem.style.margin = "20px";


// console.dir(elem.style)

// let div = document.createElement("div")
// div.textContent = "lorem ipsum dolor amet sit"
// div.style.cssText = "padding:10px;margin:15px; font-size:20px;"
// elem.append(div)

// function onClickElement(clickableElement){
//     // clickableElement.classList.add("box")
//     clickableElement.classList.toggle("box") // bolsa ochirish bolmasa qoshish
// }

// classList : 
//     add - qoshish 
//     remove - ochirish
//     toggle - bosa ochirish bomasa qoshish
//     contains - borligiga tekshirsh

// let elem = document.querySelector(".element") // <div class="element box red blue"></div>
// console.log(elem.classList.contains("red")) // true
// console.log(elem.classList.add("green")) // green klasi qoshildi
// console.log(elem.classList.remove("red")) // red klasi ochirildi

// Dark and  Light mode 
// function setTheme(elem){
//     if(elem.textContent == "Night"){
//         elem.textContent = "Day"
//     }else{
//         elem.textContent = "Night"
//     }
//     document.body.classList.toggle("dark")
// }
