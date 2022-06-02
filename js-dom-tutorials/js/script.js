let form = document.forms[0] // form teglari

// form.addEventListener("change", function(event) {
//     let list = document.querySelector("#person_info")
//     let name = form.elements[0].value
//     let weight = form.elements[1].value
//     let height = form.elements[2].value
//     let age = form.elements[3].value
//     list.children[0].innerHTML = name
//     list.children[1].innerHTML = weight
//     list.children[2].innerHTML = height
//     list.children[3].innerHTML = age

// })


// form.autofocus = true
// console.log(form.elements) // formani barcha maydonlari = array
// console.log(form.attributes) // formani barcha attributlari = object
// console.dir(form) // formani barcha attr + method lari

// form.onchange = (event) => { // qachonki input value ozgargan vaqt
//     console.log(event)
// }
// form.elements[0].onfocus = (event) => { // qachonki inputga focus bogan vaqt
//     console.log("Focused")
// }
// form.elements[0].onblur = (event) => { // qachonki inputga focus yoqolgan vaqt
//     console.log("Blured")
// }
// form.reset() // form maydonlarini tozalash
// form.submit() //toldirilgan maydondagi narsalarni server ga yuborish