// document >> html
//console.log(typeof document) // object
// console.dir(document) // struktura html javascript object sifatida


let btn = document.getElementById('btn')
btn.onclick = function() {
    let body = document.body;
   body.className = 'change'
}
console.dir(btn)

let list = document.getElementById('myList')
for(let k of list.childNodes){
        console.log(k)
}