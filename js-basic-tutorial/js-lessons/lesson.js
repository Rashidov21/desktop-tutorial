// let arr = new Array()
// let arr = [1, 2, 3, 4, 5]
// console.log(typeof arr) // object

// console.log(arr[3]) //4

// let test_arr = [1, -1, true, "son", { name: "Array" },
//     [0, 1, 2]
// ]

// for (let i = 0; i < test_arr.length; i++) {
//     console.log(test_arr[i])
// }

// let arr = []
// for (let i = 1; i < 11; i++) {
//     arr.push(i)
// }
// console.log(arr)

// METHODS 
// let arr = [1, 2, 3, 4];
// arr.push(5) // oxiriga elem qoshish
// console.log(arr) // [1, 2, 3, 4, 5]

// arr.pop() // oxiridan elem ochirish
// console.log(arr) // [1, 2, 3, 4]

// arr.shift(0) // boshiga elem qoshish
// console.log(arr) // [0,1, 2, 3, 4]

// arr.unshift(0) // boshidan elem ochirish
// console.log(arr) // [1, 2, 3, 4]

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// let arr = [12, 56, 89, 11, "test", true, { name: "Array" }]
//     // проходит по значениям
// for (let fruit of fruits) {
//     alert(fruit);
// }
// for (let item of arr) {
//     console.log(item)
// }
// task 1 
// numbers >> 1,10 , for of >>  squares of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let squares = []

// for (let num of numbers) {
//     squares.push(num ** 2)
// }
// console.log(squares)

// task 2
// let n = 10;
// let res = [];
// for (let i = 0; i < n; i++) {
//     if (i % 2 === 1) {
//         res.push(i)
//     }
// }
// console.log(res);

// let fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// for (let i = fibo.length; i > 0; i--) {
//     console.log(fibo[i])
// }