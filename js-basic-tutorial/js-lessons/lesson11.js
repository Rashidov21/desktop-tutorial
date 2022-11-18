// filter & map 
// let objs = [1, 2, 3]

// console.log(objs.filter(
//     function (item, index, arr) {
//         console.log("item = " + item)
//         console.log("index = " + index)
//         console.log("Array = " + arr)
//     }
// )
// )
// Array.filter(arrow function)

// let arr = [1, 2, 5, 6, 4, 9, 8, 6, 23, 6, 8, 4, 32, 98, 9]
// filtered = arr.filter(item => item >= 10)
// console.log(filtered)

// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" },
//     { id: 4, name: "Вася" }
// ];

// console.log(users.filter(element => element.name == 'Вася'))

// let nums = []
// for (let i = 0; i < 3; i++) {
//     let n = +prompt("Son kirit")
//     nums.push(n)
// }
// let evens = nums.filter(num => num % 2 === 0)
// console.log(evens)

// task 1
// Userdan meva nomlarini qabul qiling, (kamida 3 ta ) ular orasida "A" yoki "B"
// harflari ishtirok etgan mevalarni filter qilib alohida chiqaring

// let fruits = ["anor", "gilos", "olma", "behi"]
// // variant 1
// a_or_b_letter_fruits = fruits.filter(function (fruit) {
//     fruit = fruit.toLowerCase()
//     if (fruit.includes("a") || fruit.includes("b")) {
//         return fruit
//     }
// })
// console.log(a_or_b_letter_fruits)
// // variant 2
// console.log(
//     fruits.filter(fruit => fruit.toLowerCase().includes("a"))
//         .concat(fruits.filter(fruit => fruit.toLowerCase().includes("b")))
// )


// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6

// let arr = [1, 2, 3, 4, 5].map(num => num ** 2)
// // console.log(typeof arr)
// console.log(arr)

let arr = [1, 4, 6, 9, 7, 8, 3, 0, 2, 5].sort()
// let sorted_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]