// Arrays 
// let arr = new Array(1, true, "string", undefined, null, [1, 2, 3])
// let arr = [1, true, "string", undefined, null, [1, 2, 3], 50]
// // console.log(typeof arr) // object
// console.log(arr[0]) // birinchi element 
// console.log(arr[3]) // 4- element 
// console.log(arr[arr.length - 1]) // oxirgi element

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// Ro'yhat ko'rinishida ma'lumotlarni saqlash
// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] ** 2)
// }
// console.log(typeof arr) // object
// Obyekt - uni sifatlari va hatti harakatlari mavjud 
// sifatlari - atribut (qanday ? qanaqa ?)
// harakatlari - metod (nima qiladi ?)
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.length) // bu atribut | sifat
// arr.reverse() // method | harakat
// console.log(arr)

// let arr = [1, 2, 3]
// arr.push(4) // oxiriga element qo'shish
// arr.unshift(0) // boshiga element qo'shish
// console.log(arr) // [0, 1, 2, 3, 4]
// arr.pop() // oxiridan element o'chirish
// arr.shift() // boshidan element o'chirish
// console.log(arr) //[1, 2, 3]

// task 1
// 0 dan 10 gacha bo'lgan faqat juft sonlardan iborat massiv hosil qiling 
// [0, 2, 4, 6, 8]
// let arr = []
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         arr.push(i)
//     }
// }
// console.log(arr)[0, 2, 4, 6, 8]

// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(i++)
// }
// console.log(arr) //[0, 2, 4, 6, 8]

// task 2
// users degan bo'sh massiv hosil qiling uni 3 ta userdan username so'rab ular kiritgan
// username lar orqali to'ldiring va console ga chiqaring 
// let users = []
// for (let i = 0; i < 3; i++) {
//     // let user = prompt("username ?")
//     // users.push(user)
//     users.push(prompt("username ?"))
// }
// console.log(users)

// task 3
// user kiritgan so'zlardan faqat 'b' harflarini olib alohida massivga yozing
// let arr = []
// let b = prompt("write your text here ...")
// for (let i = 0; i < b.length; i++) {
//     if (b[i].toLowerCase() == "b") {
//         arr.push(b[i])
//     }
// }
// console.log(arr)

// task 4 
// 0 dan 100 gacha bo'lgan sonlar orasidan tasodify 10 tasini yangi massivga yozing 