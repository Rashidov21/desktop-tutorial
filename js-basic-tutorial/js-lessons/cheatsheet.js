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

// task 1
// let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quae magni, hic nisi, nihil eveniet odit laudantium nemo nulla consequuntur similique voluptate earum, dignissimos iusto mollitia commodi voluptas porro quisquam.";
// lorem = lorem.split(" ")
// console.log(lorem) // sozlardan iborat massiv 

// function sliceLorem(words_count) {
//     return lorem.slice(0, words_count)
// }
// console.log(sliceLorem(2)) // boshidan 2 ta soz

// task 2
// let a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > 5) {
//         console.log(a[i])
//     }
// }

// task 3 
// let a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// for (let i = 0; i < a.length; i++) {
//     for (let k = 0; k < b.length; k++) {
//         if (a[i] === b[k]) {
//             console.log(a[i])
//         }
//     }
// }
// task 4
// let user = prompt("Sonlar ...");
// console.log(user.split(","))

// task5 
// let a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// console.log(a[0], a[a.length - 1])

// task 6
// 1 guruch >> 8 kishi uchun
// 750 gr gosht
// 250 gr dumba 
// 1 sabzi

// task 7
// cars 25000
// trucks 50000
// bikes 10000
// workers = 50% : 10000 / 5000
// input: cars=20 , trucks=3, bikes=1
// output: total = 235000 ,  optional=xxx

// function carWash(cars, trucks, bikes) {
//     carsTotal = cars * 25000;
//     trucksTotal = trucks * 50000;
//     bikesTotal = bikes * 10000;

//     total = carsTotal + trucksTotal + bikesTotal;
//     workers = total / 2
//     return `Umumiy summa : ${total} \nIshchilar: ${workers}`
// }
// console.log(carWash(12, 2, 3))

// task 8
// 1 . . . 100
// agar son 3 ga qoldiqsiz bolinsa sonni orniga consolega "Fizz" 
// agar son 5 ga qoldiqsiz bolinsa sonni orniga consolega "Buzz"

// task 9
// diapazondagai sonlarni yigindisini hisoblang
// masalan : 2,10 >> 2,3,4,5,6,7,8,9 = sum ?
// const sum = (start, end) => {
//     let result = 0;
//     for (let i = start; i < end; i++) {
//         result += i
//     }
//     return result
// }
// console.log(sum(30, 100))



// task 10

// # input:let arr = [2,4,6,7,9]
// # output: sum max sum and min sum
// var arr = [2, 4, 6, 7, 9];
// let maxNums = arr.splice(1, 4)
// var arr = [2, 4, 6, 7, 9]
// let minNums = arr.splice(0, 4)
// console.log(Math.max(2, 4, 6, 7, 9))
// console.log(Math.min(2, 4, 6, 7, 9))

// let maxSum = 0;
// for (let i = 0; i < maxNums.length; i++) {
//     maxSum += maxNums[i]
// }
// console.log(maxSum)

// let minSum = 0;
// for (let i = 0; i < minNums.length; i++) {
//     minSum += minNums[i]
// }
// console.log(minSum)

// task 11
// user kiritgan qator ichidan raqamlarni ajratib oladigan
// function yozing

// let user = prompt("Password...");
// //console.log(user.split("")) // massiv
// user.split("").forEach((elem) => {
//     elem = Number(elem)
//     console.log(elem)
// })
// task 12
// # random belgilar ketma ketligidan user kiritgan miqdorda 
// unikal kod
// # xosil qilib uni massivda saqlaydigan getRandomCode()
//  function ni yozing
// # maslan user = 3
// # let passwords = ["dddas54f5","asfddv6c","cncnku5d52"]

// let letters = "Dja@7ng$oan03dPyt1h#oncom^:{m}uni2ty?news,n3e*wmodu4lesand_n5ew_pack7ages_a9nd_more"
// letters = letters.split("")
// console.log(letters)

// function getRandomCode(passwordsLength, passwordsCount) {
//     let passwords = []
//     for (let i = 0; i < passwordsCount; i++) {
//         let pass = "";
//         for (let i = 0; i < passwordsLength; i++) {
//             let rNum = Math.round(Math.random() * letters.length)
//             pass += letters[rNum]
//         }
//         passwords.push(pass)
//     }

//     return passwords
// }
// console.log(getRandomCode(8, 3))

// task 13
// # input: assalomu alaykum
// # ouput: asomlyk