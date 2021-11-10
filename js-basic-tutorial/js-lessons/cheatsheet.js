// Data Type 
// let value = 10 // number
// value = "Hello" // str "" , '', `` 
// value = `2 + 2 = ${2+2}` // 2 + 2 =4

// value = true // or false

// value = null // hech qaysi qiymatga tegishli emas
// value = undefined // qiymati topilmagan

// value = { a: 10, b: 11 } // object 


// Vars 
// let , var , const 
// let varName = "test" // Camel Case
// var var_name = "test2" // Snake Case


// Conditions
// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 <= 5) // false
// console.log(10 >= 5) // true
// console.log(10 == 10) // true
// console.log(10 === 10) // true
// console.log(10 !== 10) // false

// if else conditions
// if (10 > 5) {
//     alert("is working..")
// } else if (20 > 21) {
//     alert("not working...")
// } else {
//     alert("baribir")
// }

// || >> or >> yoki
// console.log(5 > 3 || 2 < 3) // true

// && >> and >> va 
// console.log(5 > 3 && 2 > 3) //false

// if (10 > 5 && 5 < 3) {
//     alert("Ishledimi 1 ?") // bu ishlamedi
// }
// if (10 > 5 || 5 < 3) {
//     alert("Ishledimi 2 ?") // bu ishledi
// }
// while(){} // 
// do{}while()

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function funcName(){}
// function myFunc(name, age) {
//     alert(`ism=${name}  yosh=${age}`)
// }
// myFunc("John", 20)

// const myFunc = function(name, age) {
//     alert(`ism=${name}  yosh=${age}`)
// }
// myFunc("John", 20)

// const myFunc = (name, age) => {
//     alert(`ism=${name}  yosh=${age}`)
// }
// myFunc("John", 20)

// window.onload = function() {
//     alert("Page is loaded")
// }

// Objects

// let obj = {
//     model: "Nike",
//     price: 25,
//     isBlue: false
// }
// obj.color = true;
// alert(obj.price) // 25
// alert(obj["isBlue"]) // false

// for (items in obj) {
//     alert(obj[items])
// }
// Objects
// Object 
// 1. Atribut >> sifati >> qanday,qanaqa
// 2.Metod >> harakati >> nima qiladi 
// let obj = {
//         name: "Samsung",
//         method: "automatic",
//         price: 560,
//         getInfo: function() {
//             console.log(this.name)
//         },
//         plus: function(x, y) {
//                 alert(x + y)
//             }
//             // getInfo() {
//             //     console.log(this.key)
//             // }
//     }
//console.log(obj.name) // Samsung
// obj.getInfo() // Samsung
// obj.plus(5, 5) // 10

// let obj = {
//     name: "John",
//     age: 10
// }
// for (let i = 0; i < 5; i++) {
//     for (let name in obj) {
//         console.log(obj[name])
//     }
// }
// task 1
// let num = String(prompt()) // 123 [1,2,3] >> 0/1/2 >>> 2/1/0
// let result = num.split("").reverse().join('');

// console.log() // 321
// // task 2
// let num = prompt() // 1234
// console.log() // 10

// let n = prompt("Son")
// n = String(n)
// let sum = 0;
// for (let i = 0; i < n.length; i++) {
//     sum += Number(n[i])
// }
// console.log(sum)