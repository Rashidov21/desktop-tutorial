let elem = document.querySelector(".content");
console.log(elem)

console.log(elem.hasAttribute("name")) // true 
console.log(elem.hasAttribute("id")) // false 

elem.setAttribute("id","myContent")
console.log(elem.getAttribute("name")) // myContent
elem.removeAttribute("name")

// setAttribute - atrr qoshish
// getAttribute - atrr olish
// hasAttribute - atrr tekshirish
// removeAttribute - atrr ochirish