// Array - RAM'da malumotlarni yonma yon kataklarda saqlash

// Data Types - String, Number, null, undefined, Boolean
// Data Structure - Array , Object 

// let arr = [];
// let a = Array();

// let arr = [1,2,3,4,5];
// console.log(typeof arr) // object
// console.log(arr[2]) // 3

// index - joylashuvga korsatish 

// let s = "Java" // constant value - o'zgarmas qiymat
// let arr = ['J','a', 'v', 'a']

// s[0] = "Y"
// console.log(s) // Java

// arr[0] = "Y"
// console.log(arr) // ['Y', 'a', 'v', 'a']

// let arr = [true, 1, "number",null, [1,2,3], undefined]

// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i]) // element
// }

// for(let item of arr){
//     console.log(item) // element
// }

// let arr = [1,2,3,4,5]
// console.log(arr[0]) // 1
// console.log(arr[arr.length - 1])


// method - usul , harakat 
// push , pop , shift , unshift 

// push - itarmoq , pull - tortmoq  

// let arr = []
// arr.push(1)
// arr.push("one")
// arr.push(true)
// console.log(arr) // [1,'one',true]
// let arr = []
// for(let i = 0; i < 5 ; i++){
//     arr.push(Math.round(Math.random()*20))
// }

// console.log(arr.length) // 5
// arr.pop() // oxirgi elementini ochirish
// console.log(arr) // 4
 
// let numArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let item of numArr){
//     // console.log(item)
//     for(let num of item){
//         console.log(num)
//     }
// }

// unshift - boshiga qoshish 

// let arr = [1,2,3]
// arr.unshift(0)
// console.log(arr) //[0, 1, 2, 3]

// // shift - boshidan ochirish 
// arr.shift()
// console.log(arr) //[1, 2, 3]

// task 1 
// while oraqali user sonlar kiritadi , agar son 0 dan kichik bolsa array boshiga 
// katta bolsa oxiriga qoshiladi user stop deb yozsa son kiritish toxtab array ekaranga chiqarilsin