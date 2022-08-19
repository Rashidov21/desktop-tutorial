// Function - kod bo'lagi , uni kodni istalgan joyida istalgam marta ishga 
// tushirish mumkin





// Javascript da function lar 4 xil
// 1- declaration
// 2- expression
// 3- arrow
// 4 - callback
// function plus(num1, num2) {
//     return num1 + num2
// }

// console.log(plus(2, 2)) //4

// function main(name, surname) {
//     console.log(name + " " + surname)
//     return name + " " + surname
// }
// let result = main("John", "Doe")
// console.log(result)

// let arr = [1, 2, 3, 4, 5]
// function getKv(n) {
//     return n ** 2
// }
// for (let i = 0; i <= arr.length; i++) {
//     console.log(getKv(i))
// }

// let numbers = [1, 2, 3, 4, 5]

// function getKv(arr) {
//     let summa = 0
//     for (let i = 0; i < arr.length; i++) {
//         summa += arr[i]
//     }
//     return summa
// }
// console.log(getKv(numbers))

// expression - ifoda funktsiyalar
// let m;
// console.log(m)
// main(10, 10)
// let main = function (x, y) {
//     return x + y
// };
// console.log(main(2, 2))


// arrow - strelka funktsiyalar
// let main = a => { return a ** 2 }
// console.log(main(2)) // 4
// let main = (x, y, z) => { return x + y + z }
// console.log(main(1, 2, 3)) // 6


// callback - qachonki biror func boshqa bir func ni qiymatini qaytarsa 
// // console.log(yes(1))
// function yes(question) {
//     if (question) {
//         console.log("yes")
//     }
// }
// console.log(yes(1))
// console.log(yes(0))
// console.log(yes(1))
// function no(question) {
//     if (!question) {
//         console.log("no")
//     }
// }

// function question(question, yes, no) {
//     if (question) {
//         return yes(question)
//     } else {
//         return no(question)
//     }
// }
// question(false, yes, no)

// window.onload = function () {
//     console.log("Page is loaded")
// }
// console.log("alla".startsWith("a")) // true 
// console.log("alla".startsWith("b")) // false
//<input type="text" id="number" onkeydown="checkInput()">
// function checkInput() {
//     if (document.querySelector("#number").value.startsWith("+")) {
//         document.querySelector("#number").value = "";
//     }
// }

// task 1
// foydalanuvchini ismi , yoshi va maktabini sorab alohida massivga yozadigan 
// function yozing 

// task 2
// 10 marta takrorlanuvchi kod hosil qiling va  har bir takrorlanishda bittadan tasodify
// son olib uni massivga kvadratini yozing , tasodify son qaytaruvchi function alohida
// yoziladi 