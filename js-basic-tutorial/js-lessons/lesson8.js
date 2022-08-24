// let , var , const 
// let , const - ES6 - 2015
// let main = "some text"
// let userProfilePhoto = './img/'
// const x = 10;
// x = 20

// String  - "" , '' ,``
// Number - 1 , 1.2, -2
// Boolean - true / false 
// BigInt- katta butun son 
// Infinity - cheksiz son 
// undefined - topilmadi
// null - mavjud bolmagan qiymatlar
// object - obyektlar + massiv

// Arifmetika 
// + , - , * , / , % , **
// > , < , >=, <= , ==, ===, !=, !==,
// && - and , || - or  , ! - not 

// if (10 > 5 && 1 > false) {
//     console.log("IF BLOCK")
// } else if (1 > 2) {
//     console.log("ELSE IF BLOCK")
// }
// else {
//     console.log("ERROR")
// }
// LOOPS 
// for , for in , for of , forEach 
// while , do while 
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// let arr = [1, 2, 3, "str", true, null]
// let summa = 0
// for (let item of arr) {
//     if (typeof item == 'number') {
//         summa += item
//     } else {
//         continue
//     }
// }
// console.log(summa)
// let obj = {

//     name: "John",
//     age: 20
// }
// for (let key in obj) {
//     console.log(obj[key])
// }
// for (let i of arr) {
//     console.log(i ** 2)
// }
// arr.forEach((item) => {
//     console.log(item ** 2)
// })
// let i = 0
// while (i < 10) {
//     i++
//     if (i == 5) {
//         continue
//     }
//     if (i == 7) {
//         break
//     }
//     console.log(i)
// }
// let o = 0
// do {
//     o++
//     if (o == 7) {
//         break
//     }
//     console.log(o)
// } while (o < 10)

// let arr = new Array()
// let arr = [2, 5, 9, 7, 8, 5, 10, 3, 6]
// console.log(arr.length) // 9
// arr.sort((a, b) => { return a - b })
// arr.reverse()
// arr.push(11)
// arr.pop(8)
// arr.shift()
// arr.unshift(2)
// arr.concat([2, 3, 4, 5])
// let a = arr.slice(1, 3)
// console.log(a)
// arr.splice(1, 3, 0, 0)

// console.log(arr.join())

// let str = "javascript/python"
// console.log(str.replace("java", "type"))
// console.log(str.split("/"))
// console.log(str.includes("py"))
// console.log(str.indexOf("p"))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.endsWith("on"))
// console.log(str.startsWith("java"))

// let obj = new Object()
// let obj = {
//     name: 'john',
//     info() {
//         console.log(this.name)
//     }
// }
// console.log(obj.name)
// console.log(obj.info())

// function main(x, y) { return x + y }
// let m = function () { }
// let n = a => { }

// console.log(Math.floor(12.3))
// console.log(Math.ceil(12.3))
// console.log(Math.max(12, 13))
// console.log(Math.min(12, 13))
// console.log(Math.round(Math.random() * 5))
// console.log(Math.PI)