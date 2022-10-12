// Data Types - Malumot turlari



// 1-String : oddiy matn , begilar >> '',"",``
// 2-Number : -1,1,1.3
// 3-Boolean : true/false
// 4-null : mavjud bolmagan qiymat
// 5-undefined : qiymati mavjud bo'lmagan malumotlar
// 6-object : obyekt
// 7-BigInt : katta butun sonlar
// 8-Infinity : cheksiz sonlar

// STRING

// let str = 'matn'
// let str2 = "text"
// // ES6 - `` >>> ${o'zgaruvchi nomi}
// let main = `variable 1 = ${str}` // variable 1 = matn
// // console.log(typeof str2) // string
// console.log(main) // variable 1 = matn

// NUMBER
// let x = 5
// let y = -3
// let z = 2.3
// console.log(typeof x) // number
// console.log(typeof y) // number
// console.log(typeof z) // number

// Boolean
// let t = true
// let f = false
// console.log(typeof t) // boolean

// null
// let n = null
// console.log(typeof n) // object

// undefined
// let myVar;
// console.log(myVar) // undefined

// BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// Infinity
// console.log(1 / 0) // Infinity

// // object
// let obj = {}
// let arr = []
// console.log(typeof obj, typeof arr) // object object


// alert , prompt , confirm
// alert("O't ketdi !") // ogohlantarivchu oyna
// prompt("Son kiriting .") // malumot qabul qilish
// confirm("Ha yoki Yo'q") // tasdiqlash oynasi

// let userNumber = prompt("Son kiriting")
// console.log(userNumber)

// let userAnswer = confirm("Ha yoki Yo'q")
// console.log(userAnswer)

// let user1 = +prompt("Son kiriting")
// let user2 = Number(prompt("Son kiriting"))
// console.log(user1 * 2) // if str value = NaN
// console.log(user2 * 2) // if str value = NaN
// console.log(typeof user)

// let y = "10"
// console.log(typeof y) // string
// console.log(typeof Number(y)) // number
// let x = 10
// console.log(typeof String(x)) // string 

let b1 = 1 // number
let b2 = 0 // number
let b3 = "text"
let b4 = undefined
console.log(Boolean(b1)) // true
console.log(Boolean(b2)) // false 
console.log(Boolean(b3)) // true 
console.log(Boolean(b4)) // false

// let a = "12" // string
// let b = 11
// let x = "abc"
// let c = x * 2
// console.log(c) // 