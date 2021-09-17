let d = new Date();
console.log(d.toLocaleString())
let itemsBlock = document.getElementById("items");
let desc = document.getElementById("desc");

let balance = 0;
let inputValue = document.getElementById("inputValue");
let divBalance = document.getElementById('balance');

function Add(){
    let li = document.createElement("li");
    li.innerHTML = `<h2>${desc.value} -  <b>$ ${inputValue.value}</b></h2>`;
    itemsBlock.appendChild(li)
    balance += Number(inputValue.value);
    divBalance.innerText = `$ ${balance}`
    localStorage.setItem("balance",balance)
}
function Remove(){
    let li = document.createElement("li");
    li.className = "red"
    li.innerHTML = `<h2>${desc.value} -  <b>$ ${inputValue.value}</b></h2>`;
    itemsBlock.appendChild(li)
    balance -= inputValue.value;
    divBalance.innerText = `$ ${balance}`
}
window.onload = function (){
    let defaultTheme = localStorage.getItem("theme");
    document.body.className = defaultTheme;
    divBalance.innerText = localStorage.getItem("balance");

}
// function addElement() {
//     // Создаём новый элемент div
//     // и добавляем в него немного контента
//     var newDiv = document.createElement("div");
//     newDiv.innerHTML = "<h1>Привет!</h1>";
//     // Добавляем только что созданный элемент в дерево DOM
//
//     my_div = document.getElementById("org_div1");
//     document.body.insertBefore(newDiv, my_div);
// }
// Storage() >> 1-localStorage , 2- sessionStorage

// * localStorage >> qurilma xotirasida (key,value) shaklida info saqlash
//     doimiy usulda , yani saqlangan malumot ochirilmagunigacha qoladi

// * sessionStorage >> user sessiyasida (key,value) shaklida info saqlash,
//     user to brauzer oynasini yopmagunga qadar

// let myStorage = window.localStorage;
// myStorage.setItem("cat","Tom"); // setItem >> yozish
// console.log(myStorage.getItem("cat")) // getItem >> olish
// myStorage.removeItem("cat")
// myStorage.setItem("apple","Stiv Jobs")
// let value = myStorage.getItem("apple")
// console.log(value)
// myStorage.clear() // xotirani tozalaydi
// console.log(myStorage.getItem("apple"))

// localStorage.setItem("new","new js code");
// sessionStorage.setItem("name", "Abdullo");
// let val = sessionStorage.getItem("name");
// sessionStorage.removeItem("name")
// console.log(val)
// sessionStorage.clear()


function lightTheme(){
    document.body.className = "light";
    localStorage.setItem("theme", 'light');
}
function darkTheme(){
    document.body.className = "dark";
    localStorage.setItem("theme", 'dark');
}
