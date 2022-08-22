// object 
// obyekt
// attribute - sifat , qanday qanaqa ?
// method - nima qiladi ? - harakatlari 
// let a = 1
// let b = "string"
// let arr = [1, "string", true]
// console.log(arr[2]) // true

// let obj = {
//     name: "John",
//     surname: "Doe",
//     age: 23
// }
// key + value 
// let car = {
//     model: "Chevrolet",
//     price_hour: 1000,
//     in: "21:00",
//     out: "22:30",
//     start: function () {
//         console.log("Car is start")
//     },
//     stop: function () {
//         console.log("Car is stop")
//     },
// }

// console.log(car.model) // Chevrolet
// console.log(car["model"]) // Chevrolet
// console.log(car.start())
// console.log(car.stop())
// console.log(car.price_hour) // 1000
// console.log(car.in) // "21:00"

// task 1 
// computer nomli Object hosil qiling 
// unga cpu , gpu , hdd , ssd , ram kabi sifatlar qo'shing
// on va off methodlari kompyuter yondi va ochdi deyishi kerak 

// let person = {
//     name: "John",
//     position: "staff",
//     salary: 12000,
//     getSalary(month) {
//         return month * this.salary
//     }
// }
// console.log(person.name) // John
// console.log(person.getSalary(2)) // 24000
// console.log("name" in person) // true
// console.log("gender" in person) // false
// for (let key in person) {
//     console.log(key) // keys
//     console.log(person[key]) // values
// }

// let product = {
//     name: 'Mackbook AIR',
//     price: 850,
//     colors: ["space", "gray", "white"],
//     model: {
//         name: "Laptops",
//         model_items: 32,
//     },
//     description: "Lorem ...",
//     image: "../img/air.png",
//     rating: 3.5,
//     instock: true,
//     count: 12
// }
// console.log(product.name) // Mackbook AIR
// console.log(product.colors[1]) // gray
// console.log(product.model.model_items) // 32
// console.log(product.instock) // true

// ARRAY LOOPS
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let item of arr) {
//     console.log(item)
// }
// arr.forEach((elem, index) => {
//     return console.log(`elem = ${elem} index = ${index}`)
// })

// arr.forEach(function (item) {
//     return console.log(item + 5)
// })

// arr.forEach((element) => {
//     console.log(element ** 2)
// });

// task 2 
// Bo'sh user nomli foydalanuvchi ob'ekti yarating.
// Jon qiymatiga ega bo'lgan name xususiyatini qo'shing.
// Smit qiymatiga ega bo'lgan surname xususiyatini qo'shing.
// name xususiyatining qiymatini Petga o'zgartiring.
// Ob'ektdan name xususiyatini olib tashlang.
// Ob'ektni  console ga chiqaring 
// let obj = {
//     name: "jjjj"
// }
// delete obj["name"]
// console.log(obj)