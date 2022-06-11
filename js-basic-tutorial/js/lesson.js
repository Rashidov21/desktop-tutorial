// O'zgaruvchilar
// var , let , const

// ES5 = 2009, var  
// *
// ES6 = 2015, let , const
// let num = 10
// num = 1
// console.log(num)
// const x = 5
// x = 10 // Error
// let a, b, c;

// c = 30
// b = 10
// a = 1
// console.log(c + b + a) //41

// let personAgeDiffirent = 13 // Camel Case
// let USER = "pablo";
// console.log(USER)


// Types
// Number, String, Boolean, NaN, null, undefined, Object, BigInt
// Number
// let x = 1
// let y = -1
// let z = 1.2
// console.log(typeof z) // number
// String
// let a = "str"
// let b = 'str'
// let c = `str${a}` // ES6 ${} // strstr
// console.log(c)
// console.log(typeof c) // String

// let str = "Python"
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.length) // 6
// console.log(str.startsWith("P")) // true
// console.log(str.endsWith("n")) // true 
// console.log(str.includes("o")) // true
// console.log(str[2]) //t

// Boolean
// let x = true // 1
// let y = false // 0
// NaN
// console.log("apple" - 10) // NaN
// console.log("apple" / 10) // NaN
// console.log("apple" * 10) // NaN
// console.log("apple" + 10) // apple10
// let a;
// console.log(a) // undefined
// console.log(null) // js da yoq qiymatlarni hammasi null 0

// let obj = {
//     name: 'john',
//     age: 10
// }

// let a = () => {
//     return 0
// }
// console.log(typeof a) // function object

// OPERATORLAR
// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 <= 5) //false 
// console.log(10 >= 5) // true
// console.log(10 != 5) // true
// console.log(10 == 5) // false 
// console.log(10 === 5) // false
// console.log("1" == 1) //true
// console.log("1" === 1) //false
// console.log(7 > 5 && 3 < 6) //true
// console.log(7 > 5 || 7 < 6 && 8 < 9 || 4 > 6) //true
// console.log(!true) //false
// console.log(!false) //true
// console.log(!10 > 5) //false

// IF ELSE IF ELSE
// if (0 > 5 || 7 > 9) {
//     console.log("if")
// } else if (1 > 5) {
//     console.log("else if 1")
// } else if (7 > 5) {
//     console.log("else if 2")
// } else {
//     console.log("else")
// }
// let age = +prompt() // 18
// if (age > 18) console.log(age)
// else console.log("Siz hali yoshsiz!")
// console.log(age > 18 ? age : "Siz hali yoshsiz !")
// ? = if , : = else
// SWITCH CASE 
// let num = +prompt()
// switch (num) {
//     case 2:
//         console.log("num = 2")
//         break
//     case 3:
//         console.log("num = 3")
//         break
//     case 4:
//         console.log("num = 4")
//         break
//     default:
//         console.log("Please write number 2,3 or 4 ")
// }
// LOOPS
// while , for
// js : while , do while, for , for in , for of , forEach


// while (true) {
//     let pass = prompt("write your password ")
//     if (pass == "1234") {
//         break // sikldan chiqish
//     }
// }
// let i = 0
// do {
//     i++
//     console.log(i)
// } while (i < 10)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// let obj = {
//     color: "red",
//     price: 120,
//     model: "Apple",
//     type: "watch"
// }
// for (let key in obj) {
//     console.log(obj[key])
// }
// Declaration, Arrow, Expression,CallBack | anonim
// function main(x) {
//     return x * x
// }
// let func = x => { return x * x }

// let f = function(x) {
//     return x * x
// }
// function call(f1, f2) {
//     if (true) {
//         return f1()
//     } else {
//         return f2()
//     }
// }

// Object
let user = {
    name: "john",
    age: 12,
    getInfo() {
        console.log(this.name + " " + this.age)
    }
}
console.log(user.name)
console.log(user["age"])
user.getInfo()
