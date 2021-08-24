let btn = document.getElementById('myBtn');
// console.dir(btn)
// console.log(btn)
let colors = ['orange','red','teal','pink','gold','blue','green','indianred']
let li = document.getElementsByClassName('collection-item')
function chg(){
    for(let i = 0; i< li.length; i++){
        let k = Math.floor(Math.random() * colors.length)
        li[i].className = `collection-item ${colors[k]}`
    }
}
// let li = document.getElementsByTagName('li')
// console.log(li)
// let box = document.querySelectorAll("li") // hamsini Array
let box = document.querySelector(".box") // 1 ta DOM js object
function blockClassName(){
    box.className = "block"
}
function boxClassName(){
    box.className = "box"
}

// const getValue = () =>{
//     let username = document.getElementById('icon_prefix');
//     let phone = document.getElementById('icon_telephone');
//     console.log(username.value)
//     console.log(phone.value)
// }