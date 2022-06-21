// Array
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// let name = "ali"
// console.log(name)
// let arr = ["str", true, 1, undefined]
// let arr_2 = new Array();
// console.log(arr)
// console.log(arr_2)

// let arr = [1, 2, 3, 4, 5]
// arr[0] = "bir" // elementni index orqali ozgartirish
// console.log(arr)
// for (let element of arr) {
//     console.log(element)
// }
// console.log(arr.length) // 5 number

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// let arr = [1, 2, 3, [-1, -2, -3], { name: "Array", len: 6 }]


// arr[0] >> bu birinchi element
// console.log(arr[arr.length - 1]) >> bu oxirgi element
// arr[0] = 0
// arr.push("array") // array oxirigiga element qoshish
// arr.pop() // arr oxiridan elem ochirish
// arr.shift() // arr boshidan elem ochirish
// arr.unshift("arr") //arr boshiga element qoshish

// console.log(arr)

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// alert(matrix[1][1]);

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert(fruits.length); // ? = 3
// alert(shoppingCart.length); // ? = 4

// task 1
// input: arr = [1, 8, 3, 7, 2, 6, 1]
// output: barcha juft sonlarni kvadrati console ga chiqsin
// task 2
// output: tasodifiy sonlardan iborat length 10 ga teng array
// task 3
// input: arr = [2, 4, 8, 6, 3] ~ [9,3,1,8,6] ~ [3,4,6,7,5]
// output: shu massivdan eng kichik qiymatni chiqarib tashlash orqali 
// eng katta yigindini hisoblovchi dastur tuzing

// let arr = [2, 4, 8, 6, 3]
// let quti = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             quti = quti + arr[i];
//             break;
//         }
//     }
// }
// console.log(quti);

// task 4 
// random sonlardan (0, 999) iborat massiv minimum 20 ta sondan iborat
// agar son (0 , 99) orasida bosa uni kvadrati chiqadi 
// agar son(99, 399) orasida bosa kubi chiqadi
// qolgan sonlarni o'zi console ga chiqdi 


// task 5
// input: function,
//     function 3 ta arg qabul qiladi
// 1 - nechta son bolishi, 2 nechtaasi toq, nechtasi - (minusda bolishi)
// output: main(5, 2, 1) >> [2, 1, 3, 4 - 6]

// task 6
// input: user >> "bed"
// output: >> 020403
// let elem = prompt()
// let alpha = "abcdefghjklmnopqrstuvwxyz"
// let result = ""
// for(let item of elem.split("")){ // abc >> ["a","b","c"]
//     for(let letter of alpha.split("")){
//         if(item == letter){
//             let index = alpha.indexOf(item) // a index == 0
//             if(index <= 9){
//                 index = `0${index+1}`
//             }
//             result += index
//         }else{
//             console.log("No letters found")
//         }
//     }
// }
// console.log(result)

// border-radius >> borderRadius
// transform-translateY >> transformTranslateY
// s = "abc"
// console.dir(document.body)

// let arr = ["I", "go", "home"];
// console.log(arr[0])
// console.log(arr[arr.length - 1])

// delete arr[0] // elem ni index orqali ochirish
// console.log(arr)
// let arr = ["python", "cpp", "javascript", "ruby", ".net"]
// arr.splice(index[, deleteCount, elem1, elemN])
// let res = arr.splice(1,3) //['cpp', 'javascript', 'ruby']
// splice(start , deleteCount) 
// start = boshlanish index 
// deleteCount = nechta elem ochirish kerak ? 
// arr.splice(3,2, "php", "pascal")
// console.log(arr) //['python', 'cpp', 'javascript', 'php', 'pascal']

// let nums = [1,2,3,4,5,6,7,8]
// console.log(nums.splice(3,4)) //4, 5, 6, 7]

// let arr = ["python", "cpp", "javascript", "ruby", ".net"]
// console.log(arr.slice(2, 5))
// slice(start, end)
// start = qaysi indexdan boshlab olishi 
// end = qaysi idexgacha elem olishi 
// let a = [1,2,3]
// let b = [4,5,6]
// console.log(a + b) //1,2,34,5,6
// console.log(a.concat(b)) //[1, 2, 3, 4, 5, 6]

// function plusTen(num){
//     return num + 10
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// let result = []
// arr.forEach(function(elem){
//     result.push(plusTen(elem))
// })
// console.log(result)
// [11, 12, 13, 14, 15, 16, 17, 18, 19]
// forEach = bu massivni for ga solib har bir takrorlanishda 
// har bir elementi uchun siz korsatgan function ni qollaydi
// let str = "assalomu alaykum"
// let count = 0
// str.split("").forEach(function(elem){
//     if(elem == 'a'){
//         count++
//     }
// })
// console.log(count) //4

// let arr = ["abdullo", "oybek", "muhammadqodir", "sarvar"]
// let res = arr.map(item => item.length)
// // map siz korsatgan function ni har bir array elem uchun qollaydi va yangi array 
// // xosil qiladi  
// console.log(res) // yangi array = [7, 5, 13, 6]
// res.sort((a, b) => a - b) // sonlarni osishi boyicha saralash
// res.sort((a, b) => b - a) //// sonlarni kamayishi boyicha saralash
// console.log(res) //[13, 5, 6, 7]
// // arr.reverse(); massivni teskari qilish
// console.log(res.reverse())//[7, 6, 5, 13]
// task 1 
// let arr = [0,1,2,3,4,5,6,7,8,9]
// 1-forEach orqali faqat juft sonlarni kvadratlaridan iborat
// massiv hosil qiling
// 2- map orqali faqat toq sonlarni kvadratlaridan iborat
// massiv hosil qiling
// let r = arr.map(elem => elem ** 2)
// console.log(r)

// task 2
// let arr = [[1,5,6],[5,8,1], [9,7,9],[1,2,8]]
// let newArray = []
// // arr.sort() dan foydalanib >>> let newArray = [25,14,12,11] ni xosil qiling
// arr.forEach(function(elem){
//     let summa = 0
//     for(let num of elem){
//         summa += num
//     }
//     newArray.push(summa)
// })
// newArray.sort((a,b) => b - a)
// console.log(newArray) //25, 14, 12, 11]

// task 3
let arr = [1,6,58,65,6,6,1,8,6,4,56,96,9,74,52,3,6,64,56,6]
// map orqali 50 dan kichik sonlardan iborat massiv hosil qiling 
let r = [undefined , 1, 3].map(n => n > 2 ? n : null)
console.log(r)