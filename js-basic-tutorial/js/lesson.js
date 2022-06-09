// Object
// let username = "pablo10"
// let userage = 23
// let password = "qwerty"

// let user = {
//     username: "pablo10",
//     userage: 23,
//     password: "qwerty",
//     changePassword: function(newPassword) {
//         this.password = newPassword
//             // this.username == user.username
//     }
// }
// console.log(user.username) // pablo10
// user.changePassword("12345")
// console.log(user) // Object

// let obj = {
//     name: "object name",
//     age: 12
// }

// let car = {
//         model: "Shevrolet",
//         price: 14000,
//         name: "Gentra",
//         color: "delfin",
//         drive: function(x) {
//             console.log(`${this.model + " " + this.name} is drive`)

//         }
//     }
// car.drive(10)
// car["color"] = 'white' // color maydonini qiymatini o'zgartirish
// car.count = 23 // object ga yangi maydon qoshish
// car["count"] = 23 // object ga yangi maydon qoshish 2 - usul
// console.log(car)
// console.log("Hello")
// console.debug()
// console.error("Hello")
// car.drive()
// console.log(car.name)
// console.log(car.model)

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age
//             // ...другие свойства
//     };
// }
// task 1
// input: function yozing, robot obyektini xosil qilsin
// output: robot, name, model, battery, year, programg, color, talk, walk

// function makeDroid(name, age, talk) {
//     return {
//         name: name,
//         age: age,
//         talk: talk
//     }
// }
// let robotName = "r2d2"
// let age = 1

// function robotTalk() {
//     console.log("Im talking!")
// }
// // makeDroid(robotName, age, robotTalk).talk() //"Im talking!"
// // makeDroid("Ctripo", 20, () => { alert("404") }).talk() //"Im talking!"
// console.log(makeDroid("r3", 2, function() { console.log("Talking!") }).name)
// console.log(makeDroid("r3", 2, function() { console.log("Talking!") }).age)
// makeDroid("r3", 2, function() { console.log("Talking!") }).talk()
// Task 2

// 1. Bo'sh user nomli foydalanuvchi ob'ekti yarating.
// 2. Jon qiymatiga ega bo'lgan name xususiyatini qo'shing.
// 3. Smit qiymatiga ega bo'lgan surname xususiyatini qo'shing.
// 4. name xususiyatining qiymatini Petga o'zgartiring.
// 5. Ob'ektdan name xususiyatini olib tashlang.
// let obj = {
//     name: "john"
// }

// delete obj.name
// console.log(obj)
let obj = {
    name: "john",
    age: 23,
    country: "USA",
    address: "Texas , LA",
    skills: {
        programming: "Javascript",
        sport: {
            case1: "Ping Pong",
            case2: "PS5",
            case3: "Tennis"
        }
    }
}

// console.log(obj.skills.sport.case3) // Tennis

// for in  obyektlarni iteratsiya (takrorlash) uchun kerak
for (let key in obj) {
    // console.log(key) // hamma key lari
    console.log(obj[key])
    if (typeof obj[key] == "object") {
        for (let i in obj[key]) {
            if (typeof obj[key] == "object") {
                for (let k in obj[key][i]) {
                    console.log(obj[key][i][k])
                }
            }
            console.log(obj[key][i])
        }
    }
}

// console.log("age" in obj) // true
// console.log("money" in obj) // false
