// let btn = document.querySelector("button");
// btn.setAttribute("name","myBtn") // attr biriktirish
// console.log(btn.hasAttribute("name")) // attr bor yokli bilish true/false
// console.log(btn.getAttribute("name")) // attr value olish
// btn.removeAttribute("name") // attr ni ochirish


// let form = document.querySelector("form")
// // for(let attr of form.attributes){
// //     console.log(attr.value)
// // }
// if(form.hasAttribute("id")){
//     console.log("bor")
// }else{
//     form.setAttribute("id","myForm")
// }

// Element.style
// document.body.style.background = 'khaki';
// let box = document.querySelector(".box")
// box.className = 'block' // 1 ta class nomi qoshish
// box.classList = 'box block red' // bir nechta class nomi qoshish

// box.classList.add() // yangi class qoshadi
// box.classList.remove() // ochiradi
// box.classList.contains() // tekshiradi true/false
// box.classList.toggle() // bosa ochiradi bomasa qoshadi
// for(let name of box.classList){
//     console.log(name)
// }
// let size = box.classList[1]; // is-size-5
// let lastElem = size.split("")
// lastElem[lastElem.length - 1] = 4
// console.log(lastElem.join(""));// is-size-4
// console.log(size[size.length - 1]);


// Dark Theme
// document.getElementById('light').style.display= 'none'
// function mode(state ){
//     let light = document.getElementById('light')
//     let dark = document.getElementById('dark')
//     if(state == "dark"){
//         document.body.style = `
//         background-color:#232328;
//         color:white;
//         `
//         dark.style.display= 'none'
//         light.style.display= 'block'
//     }else if(state == 'light'){
//         document.body.style = `
//         background-color:khaki;
//         color:black;
//         `
//         light.style.display= 'none'
//         dark.style.display= 'block'
//     }
// }
document.getElementById('light').style.display= 'none'
function modeV2(state){
    let light = document.getElementById('light')
    let dark = document.getElementById('dark')
    if(state == "light"){
        document.body.className = "light"
        light.style.display= 'none'
        dark.style.display= 'block'
    }else if(state == "dark"){
        document.body.className = "dark"
        dark.style.display= 'none'
        light.style.display= 'block'
        
    }
}

function changeCubePosition(position){
    console.log("work");
    let row = document.getElementById("con");
   if(position == 1){
        row.classList = "row pos-1"
   }else if(position == 2){
        row.classList = "row pos-2"
   }else if(position == 3){
    row.classList = "row pos-3"
}
}