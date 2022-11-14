// str methods and arrays 
// let str = "stringify";



// // slice - bu indexlar orqali korsatilgan qatorni nusxalaydi
// console.log(str.slice(0, 5)) //strin
// let str2 = str.slice(3, 5)
// // slice(start, stop)
// console.log(str2) // in

// let arr = new Array()
// let arr = [];
// console.log(typeof arr) // object

// let arr = [1, "string", true, [1, 2, 3], { name: "john", age: 23 }]
// console.log(arr[0]) // 1
// console.log(arr[1]) // 1
// console.log(arr[arr.length - 1]) // { name: "john", age: 23 }
// console.log(arr.length) // 5
// let arr = [1, 2, 3, 4, 5]
// arr.push(6) // oxiriga element qoshish
// arr.pop() // oxiridan element ochirish
// arr.shift() // boshidan element ochirish
// arr.unshift(0) // boshiga element qoshish
// console.log(arr)
// console.log(arr[0] * 2)
// console.log(arr[1] * 2)
// console.log(arr[3] * 2)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2)
// }

// task 1
// let a = [5, 600, 4, 96, 9, 120, 23, 2, 4, 65, 698, , 1, 500, 54, 2]
// let b = []
// a massividan barcha 100 dan kichik sonlarni b nomli massivga yozing 
// for (let i = 0; i < a.length; i++) {
//     if (a[i] <= 100) {
//         b.push(a[i])
//     }
// }
// console.log(b)
// task 2
// let n = +prompt()
// let arr = []

// for (let i = 0; i <= n; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i)
//     }
// }
// console.log(arr)