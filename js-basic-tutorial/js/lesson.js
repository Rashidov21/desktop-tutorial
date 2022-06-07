// function - alohida nom bilan ajratilgan kod bo'lagi , uni kodni istalgan joyida
// istalgan marta ishga tushirish mumkin 


// function showMessage() { // bu function declaration
//     console.log('Всем привет!');
// }

// for (let i = 0; i < 10; i++) {
//     showMessage() // 10 marta showMessage ishga tushadi
// }

//  ***1- declaration >> elon qilingan function***
// 2 - arrow function >> strelka function
//  3 - function expression >> ifoda function
// 4 - callback function >> callback , biror bir functionni natija qilib qaytaradgan function

// function funksiyaNomi(params) {
//     // function body 

//     // return qayatarilishi kerak bolgan natija

// }
// function plus(number1, number2) {
//     // console.log(typeof number1)
//     // console.log(typeof number2)
//     console.log(number1 + number2)
// }

// plus(2 * 2, 5) // plus functionni chaqirish

// let x, y, z;

// x = 10;
// y = 20;
// z = 30
// console.log(x + y + z)
// function plus(x, y) {
//     return x + y // natijani qaytarish
// }
// console.log(plus(5, 5))
// let z = plus(5, 5)
// console.log(z) // 10

// task 1
// ayirish , bo'lish , kopaytirish amallari uchun function yozing

// function division(a, b) {
//     if (a < b) {
//         return "A soni kichik"
//     } else {
//         return a / b
//     }
// }
// console.log(division(5, 7)) //"A soni kichik"
// console.log(division(10, 2)) // 5

// function searchLetter(text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i].toLowerCase() == "a") {
//             count++
//         }
//     }
//     return `A harfi matnda ${count} marta ishtirok etgan`
// }
// console.log(searchLetter("Assalomu alaykum"))

// task 2
// input : 5 , text
// output: text * 5

// let arrowFunc = (x, y, z) => { return (x + y) * z }
// console.log(arrowFunc(2, 2, 5)) // 20

// let func = x => { return x ** 2 }
// console.log(func(2)) // 4
// Function Expression 
// let func = function() {
//     console.log("Hello")
// }
// func()
// let plus = function(x, y) {
//     console.log(x + y)
// }
// plus(10, 20)
// Anonim Function  
// function() {
//     console.log("Hello")
// }
// window.addEventListener("click", function() {
//     console.log("Hello")
// })

// CallBack function

// function sayHi() {
//     console.log("Hi !")
// }

// function sayBye() {
//     console.log("Bye Bye !")
// }

// function meet(ask, func1, func2) {
//     if (ask) {
//         return func1()
//     } else {
//         return func2()
//     }
// }
// meet(confirm("Hello ? "), sayHi, sayBye) // callback func

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//     () => alert('Привет!') :
//     () => alert("Здравствуйте!");

// welcome();
// Ternar operatorlar 
// let value = 1 > 0 ? 10 : 0 // ? = if , : - else 
// console.log(value)
// let age = +prompt("Age of player ?")
// let playerName = age > 22 ? "Player on" : "Player off"
// console.log(playerName)
// false = 0
// true = 1

// Javascript function
// 1 - declaration 
// function funcName(x) {
//     return x * 2
// }
// 2- arrow function
// let func = x => { return x * 2 }
// 3 - function expression
// let func2 = function(x) {
//         return x * 2
//     }
// 4 - callback function

// function call(value, f1, f2) {
//     if (value) return f1()
//     else return f2()
// }
// call(true, () => { alert("F1 is work") }, function() { alert("F2 is work") })

// task 1
// input : user dan 5 ta ism qabul qilinsin
// output : nechtasi "ab" harflari bilan boshlanishini qaytarilsin
// function checkNames() {
//     let count = 0
//     for (let i = 0; i < 5; i++) {
//         let name = prompt("Name >>> ?")
//         if (name.toLocaleLowerCase().startsWith("ab")) {
//             count++
//         }
//     }
//     return count
// }
// task 2
// input: sinfdagi oquvchilar soni va vinetkaga yigiladigan summa(har bir oquvchi uchun)
// output: umumiy summa

// task 3 
// input: oquvchilar soni va yoshlari minimum 3 kishi 
// output : oquvchilarni umumiy yosh darajasi

// function summAge(ages) {
//     let a = 0;
//     for (let i = 0; i < ages; i++) {
//         let age = +prompt("Age ?")
//         a += age
//     }
//     return `Ortacha yosh = ${a / ages}`
// }
// console.log(summAge(3))

// function getSummAge(studentCount) {
//     let summa = 0;
//     for (let i = 1; i <= studentCount; i++) {
//         let age = +prompt(`Age of student ${i}`)
//         summa += age
//             // i = 0
//             // i = i + 1 // 1
//             // i = i * 5 // 
//     }
//     return summa
// }
// let students = +prompt("Students count ? ")
// console.log(getSummAge(students) / students)
// let num = 2;
// for (let i = 0; i < 3; i++) {
//     // console.log(num *= 2)
//     // console.log(num += 2)
//     // console.log(num -= 2)
// }