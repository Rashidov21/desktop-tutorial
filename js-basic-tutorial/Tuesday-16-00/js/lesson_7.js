// Array 

// let arr = new Array()
// let arr = [1,true,"one"]

// let n = 20
// console.log(n) // 20

// let arr = [1,2,3,4,5]
// console.log(arr[1]) // 2
// console.log(arr.length) // 5

// let arr = ["kiwi","melon","watermelon","banana"]

// arr[2] = "cherry"

// console.log(arr) //['kiwi', 'melon', 'cherry', 'banana']

// push - oxiriga yozadi 
// pop - oxiridan ochiradi 
// shift - boshidan ochiradi 
// unshift - boshiga yozadi
// let arr = [1,2,3]
// arr.push(4)
// console.log(arr) //[1, 2, 3, 4]
// arr.pop()
// console.log(arr) //[1, 2, 3]
// arr.shift()
// console.log(arr) //[2, 3]
// arr.unshift(1)
// console.log(arr) // [1, 2, 3]

// let arr = [1,2,3,4,5]
// for(let item of arr){
//     console.log(item * 2)
// }

// Array methods 
// function toUpperName(name){
//     return name.toUpperCase()
// }

// let fruits = ['kiwi', 'melon', 'cherry', 'banana']

// fruits.forEach(
//     function(item){console.log(item.toUpperCase())}
// )

// let nums = [1,3,4,6,8,9,6,4,6,20,4,6,34,6,6,47,96,2,256,5,63,2]

// let upFifty = []
// nums.forEach(function(num){
//     if(num > 50){
//         upFifty.push(num)
//     }
// })
// console.log(upFifty) //[96, 256, 63]

// let peoples = ['john','mike', 'sara']

// forEach - bu korsatilgan function ni massiv elementlarining har biriga qo'llash

// concat - bu massivni massiv bilan kengaytirish
// console.log(fruits.concat(peoples)); //['kiwi', 'melon', 'cherry', 'banana', 'john', 'mike', 'sara']


// splice - nechanchi indeksdan nechta element qirqishni belgilaydi 
// let fruits = ['kiwi', 'melon', 'cherry', 'banana']
// console.log(fruits.splice(1,2)) //['melon', 'cherry']
// console.log(fruits)


// arr.slice([start], [end])
// slice - korsatilgan indeksdan korsatilgan indeksgacha  nusxa olish
// console.log(fruits.slice(1,3)) //['melon', 'cherry']
// console.log(fruits)

// task 1
// let text = "lorem ipsum dolor amet sit" 
// text ni massiv qilib  uni qirqish orqali 'dolor amet sit' ga o'zgardiring


// let peoples = ['john','mike', 'sara']

// // includes - bu qiymatni massiv ichida mavjudligiga tekshirish
// console.log(peoples.includes("john")) // true
// console.log(peoples.includes("david")) // false

// // indexOf - elementni indexini qaytaradi
// console.log(peoples.indexOf("john")) // 0
// console.log(peoples.indexOf("david")) // -1

// task 2
// userdan matn qabul qiling agar matndagi sozlarda 'a' ,'A' harflari ishtirok etgan bo'lsa ular sonini va ularni indexlaridan iborat massivni hosil qiling 
// input : "Assalomu alaykum"
// output : 4 , [0,3,9,11]