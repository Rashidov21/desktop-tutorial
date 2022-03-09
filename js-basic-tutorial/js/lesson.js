// lesson - 2

// DATA TYPES >> 1 ta ozgaruvchidagi malumot x = 1
// DATA STRUCTURE >> 1 ta ozgaruvchidagi bir nechta  malumot x = [1,2,3,4,5]

// 1 number >> NaN 
// let n = 1
// let n2 = -1
// let n3 = 1.1
// console.log(typeof n) // number

// 2- string
// let str = "Javascript"
// let str2 = 'Javascript'
// let str3 = `Javascript`

// 3- Boolean
// let t = true; 1
// let f = false; 0

// 4- undefined
// let x;
// console.log(typeof x) // undefined

// 5 - null
// console.log(null)

// 6 - object 
// let obj = {
//     name: "John"
//     age: 25
// }

// alert()
// let name = prompt("Ismizni kiriting")
// let age = +prompt("Yosh ?")
// let yesOrNo = confirm("Are you sure ?")
// console.log(yesOrNo)
// console.log(name + " " + age * 2)

// console.log("str" * 5) // NaN >> Not a number


// let num = '13';
// num = Number(num)
//     // console.log(typeof num) // string
// console.log(num * 2) // 26

// let n = 1.2
// let x = parseInt(n) // x = 1
// let z = parseFloat(x) // z = 1.0

// let x = String(prompt("Number ?"))
// console.log(x + 2)

// let x = "1"
// console.log(Boolean(x) + 1) // 2

// ARIFMETIKA
// +,-,*,/,%,**
// console.log(5 + 5) // 10
// console.log(5 - 2) // 3
// console.log(5 * 2) // 10
// console.log(9 / 3) // 3
// console.log(7 % 2) // .5
// console.log(2 ** 2) // 4
// console.log(2 ** 3) // 8

// let a = +prompt("A ni kirit")
// let p = 4 * a
// console.log("Perimatr = " + p)

// OPERATORS lesson - 3
// console.log(5 > 2) // true
// console.log(5 < 2) // false
// console.log(5 <= 5) // true
// console.log(5 >= 4) // true
// let x = 10;
// console.log(7 == '7') // true
// console.log(7 != 7) // false
// console.log(7 === '7') // false
// console.log(7 !== 7) // false

// ! >> mantiqiy inkor >> not
// console.log(!true) //not true
// console.log(!false) //not false

// || >> mantiqiy Yoki >> or

// let x = 0 || '' || 1 || false
// console.log(x)
// && >> mantiqiy VA >> and
// let y = 0 && '' && 1 && false
// console.log(y)
// console.log(false || 0 || "t" || null)
// console.log(true && false && "t" && 10)

// if >>Agar,
// else if >>Yoki,
// else >>Aks holda

// if ("t" && 0) {
//     console.log("IF")
// } else if (true && 0) {
//     console.log("ELSE IF 1")
// } else if (true && 1) {
//     console.log("ELSE IF 2")
// } else {
//     console.log("ELSE")
// }
// let a = +prompt("A = ?")
// if (a % 2 === 0) {
//     console.log("Juft")
// } else {
//     console.log("Toq")
// }
// let a = +prompt("A = ?")
// let b = +prompt("B = ?")
// if (a > 2 && b <= 3) {
//     console.log("Rost")
// } else {
//     console.log("Yolgon")
// }
// let num = String(prompt())
// console.log(num[0], num[1], num[2])
// let n = Number(num)
// console.log(typeof n)


// LOOPS
// while >> toxtovsiz sikl | while , do while
// for >> sanoqli sikl | for , for in , for of , forEach

// console.log(1)
// console.log(2)
// console.log(3)
// let i = 10;
// while (i > 0) {
//     i--
//     console.log(i)
// }


// let c = 0;
// while (c < 10) {
//     c++
//     console.log(c)
// }

// let i = 0;
// // let sum = 10;
// do {
//     i = i + 2
//     console.log(i)
//         // sum = sum / 2
// } while (i < 10)

// console.log(sum)
// let sum = 0
// for (let i = 0; i < 10; i++) {
//     sum = sum + 2
// }
// console.log(sum)
// let control = true;
// while (control) {
//     let pass = prompt("Parol ?")
//     if (pass == '123') {
//         console.log("Hush kelibsiz")
//         control = false
//     }
// }
// for (let i = 1; i < 10; i++) {
//     i = i + 1
//     console.log(i)
// }

// for (начало; условие; шаг) {
//     // ... тело цикла ...
//   }
// let i = 0;

// for (i; i < 3; i++) { // используем существующую переменную
//     alert(i); // 0, 1, 2
// }
// let i = 5;
// while (i) {
//     i++
//     if (i === 99) {
//         break // siklni majburan toxtatish
//     }
//     if (i % 2 === 0) {
//         continue // siklni tashlab davom etish
//     }

//     console.log(i)
// }

// let k = 5;
// let n = 10;
// for (let i = 0; i < n; i++) {
//     console.log(k)
// }

// let a = 5;
// let b = 10;

// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }
// let a = 100;
// let b = 500;
// let c = 1000;

// if (a < b && b < c) {
//     console.log(c - a)
// }else if(b < a && a < c || c < a && a < b){

// }
// console.log(Math.max(a, b, c) - Math.min(a, b, c))


// for (let i = 1; i <= n; i++) {
//     s = s + 1 / i
// }
// console.log(s)

// MODULE MATH
// Math.random()

// let n = 1.4;
// console.log(Math.floor(n)) // pastga  qarab
// console.log(Math.ceil(n)) // tepaga qarab
// console.log(Math.round(n)) // orta holatga qarab
// console.log(Math.max(2, 8, 16)) // 16
// console.log(Math.min(2, 8, 16)) // 2
// console.log(Math.random()) //0 , 1 orasida
// console.log(Math.round(Math.random() * 5)) //0 , 5 orasida

// console.log(Math.pow(5, 2)) // darajaga olish
// console.log(Math.trunc(Math.PI)) // 3

// MODULE Date

let date = new Date()
    // console.log(date.getFullYear()) // 2022
    // console.log(date.getDate()) // xozirgi kun
    // console.log(date.getMonth()) // xozirgi kun
    // console.log(date.getHours()) // xozirgi soat
    // console.log(date.getMinutes()) // xozirgi minutlar
    // console.log(date.getSeconds()) // xozirgi minutlar

// setInterval(function() {
//     let date = new Date()
//     document.querySelector("#time").innerHTML = `
//         <span>${date.getHours()}</span>:
//         <span>${date.getMinutes()}</span>:
//         <span>${date.getSeconds()}</span>
//         <br><br>
//         <span>${date.getDate()}</span>/
//         <span>${date.getMonth()+ 1}</span>/
//         <span>${date.getFullYear()}</span>
//     `
// }, 999)


// Objects
// let x = 10;
// let obj = {
//     bir: 1,
//     ikki: 2,
//     uch: 3
// }
// console.log(obj.uch) // 3

// Object 
//  1 - Atribute - Sifat - qanday , qanaqa ?
//  2 - Method - Hatti harakati - nima qiladi ?
// key + value 
// let firstName = "John"
// let user = {
//         'firstName lastName': "John Doe", // console.log(user["firstName lastName"])
//         age: 56,
//         isAdmin: true,
//         email: "johndoe@mail.com",
//         address: {
//             city: "Andijan",
//             country: "Uzbekistan",
//             street: "Buyuk Turon 21"
//         },
//         talk: function() {
//             console.log("say")
//         }
//     }
// console.log(user.firstName + " " + user.lastName)
// console.log(user["age"])
// console.log(user["email"])

// let key = "likes birds";
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// то же самое, что и user["likes birds"] = true;
// user[key] = true;
// console.log(user["likes birds"])

// let car = new Object()
// car.name = "Tesla";
// car.model = "X"
// console.log(car.name)
// console.log(car.model)

// let obj = {}
// obj.name = prompt("Nomi ?")
// obj.price = prompt("Narxi ?")
// console.log(obj.name)
// delete obj.price // ochirish
// console.log(obj.price)
// let mycolor = "orange"
// let mycount = 123
// let obj = {
//         color: mycolor,
//         count: mycount
//     }
// console.log(obj.color)
// console.log(obj.count)
// console.log("color" in obj) // true
// console.log("price" in obj) // false

// for (let key in obj) {

//     console.log(obj[key])
// }
// console.log(typeof obj)

// task 1
// student objectini hosil qiling 
// ism , yosh , maktab, sinf

// agar yoshi 11 dan katta bosa 
// unga isBigBoy = true ni qoshing
// aks holda isBigBoy = false

// task 2 
// Ishchilarga beriladgan oyliklar 
// let personal = {
//         salary1: 1200,
//         salary2: 680,
//         salary3: 1000,
//         salary4: 1800,
//     }
// ushbu ishchilar obyektni for in orqali barcha maydonlarini hisoblang

// task 3 
// 0 dan User kiritgan songa qadar har hil key ostida numbers = {} objectiga 
// 1 dan 1000 ni orasidagi tasodifiy sonlarni yozing
// masalan:
// user = 5
// numbers = {
//     num1:56,
//     num2:966,
//     num3:10,
//     num4:572,
//     num5:129
// }
// task 4


// FUNCTIONS 

// Declaration 
// function showMessage() {
//     console.log('Всем привет!');
// }
// let test = showMessage

// for (let i = 0; i < 10; i++) {
//     test()
// }

// let myVar = 10; // global;

// if (true) {
//     console.log(myVar)
//     if (true) {
//         console.log(myVar)
//     }
// }

// function myFunc() {
//     let myVar = "test text" // local
//     console.log(myVar)
// }
// console.log(myVar) // Error
// let from;

// function myFunc(from, to) {
//     console.log(from)
//     console.log(to)
// }
// from = "Tashkent"
// myFunc("Tashkent", "Andijan")

// Dastur :
// qabul qilish 
// qayta ishlash
// saqlash
// natijani qaytarish
// function plus(x, y) {
//     let res = x + y
//     return res
// }

// let result = plus("John", "Doe")
// console.log(result)

// function calc(num1, num2, operand = "+") {
//     if (operand === "+") {
//         return num1 + num2
//     } else if (operand === "-") {
//         return num1 - num2
//     } else if (operand === "*") {
//         return num1 * num2
//     } else if (operand === "/") {
//         return num1 / num2
//     } else {
//         alert("Notogri shart!")
//     }
// }
// let test1 = calc(10, 20, "/")
// console.log(test1)
// let test2 = calc(10, 20, "*")
// console.log(test2)
// let test3 = calc(10, 20, )
// console.log(test3)


// Expression
// let sayHi = function() {
//     alert("Привет");
// };
// sayHi()

// Anonim 
// window.onload = function() {
//     alert("Привет");
// };
// let obj = {
//     name: "John",
//     talk: function(name) {
//         console.log("Im Talking !" + " " + name);
//     }
// }
// obj.talk("Stive ")

// Arrow 
// let arrowFunc = x => { return x ** 2 }
// let arrowFunc = (x, y) => { return x ** y }
// console.log(arrowFunc(5, 2))

// Callback Function

// Func qachonki boshqa bir func ni parametr sifatida qabul qilsa
// u Callback Function deyiladi

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert("Вы согласны.");
// }

// function showCancel() {
//     alert("Вы отменили выполнение.");
// }

// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);


// Task 1
// function powerA(num) {
//     return num ** 3
// }
// let a = powerA(3)
// console.log(a)
// console.log(powerA(prompt()))

// STRING Methods

// let s = "Javascript2"
// let a = [1, 2, 3, 4, 5]
// console.log(s.length)
// console.log(s[0])
// console.log(Math.round(s.length / 2))
// console.log(s[Math.round(s.length / 2)])

// let str = "hello"
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str.indexOf("l")) // belgini indexini qaytaradi
// let str = "Harry Potter"
// let test = str.slice(3) // siz korsatgan indexdan boshlab siz korsatgan index ga qadar qirqadi
// console.log(test)

// let str = "Harry Potter"
// console.log(str.includes("Ronald")) // false
// console.log(str.startsWith("Ha")) // true
// console.log(str.endsWith("er")) // true
// console.log(str.replace("Potter", "Maguire"))
// let str = "Harry Potter";
// // console.log(str.replace("tt", "ll"))
// let iString = "alla apelsin amma anna";
// // console.log(iString.replace("a", "i"))
// let s = ""
// for (let i = 0; i < iString.length; i++) {
//     let t = iString[i]
//     if (iString[i] === "a") {
//         t = "i"
//     }
//     s = s + t
// }
// console.log(s)

// let str = "Harry Potter";
// let t = ""
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == "a" || str[i] == "i" || str[i] == "u" || str[i] == "e" || str[i] == "o") {
//         continue
//     }
//     t = t + str[i]
// }
// console.log(t)
// let m = "main"
// let i = m.indexOf("i")
// let l = m.slice(0, i)
// let r = m.slice(i + 1)
// console.log(l + r)

// let obj = {
//     price: 1500,
//     description: "lorem ipsum",
//     categories: {
//         mans: true,
//         womens: false,
//         kids: true
//     },
//     getInfo: function() {
//         console.log("Price :", obj.price)
//         console.log("Desc :", this.description)
//         console.log("Categories :", this.categories.mans)
//     }
// }
// obj.getInfo()