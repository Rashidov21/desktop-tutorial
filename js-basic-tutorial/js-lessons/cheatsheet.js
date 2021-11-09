// Data Type 
// let value = 10 // number
// value = "Hello" // str "" , '', `` 
// value = `2 + 2 = ${2+2}` // 2 + 2 =4

// value = true // or false

// value = null // hech qaysi qiymatga tegishli emas
// value = undefined // qiymati topilmagan

// value = { a: 10, b: 11 } // object 


// Vars 
// let , var , const 
// let varName = "test" // Camel Case
// var var_name = "test2" // Snake Case


// Conditions
// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 <= 5) // false
// console.log(10 >= 5) // true
// console.log(10 == 10) // true
// console.log(10 === 10) // true
// console.log(10 !== 10) // false

// if else conditions
// if (10 > 5) {
//     alert("is working..")
// } else if (20 > 21) {
//     alert("not working...")
// } else {
//     alert("baribir")
// }

// || >> or >> yoki
// console.log(5 > 3 || 2 < 3) // true

// && >> and >> va 
// console.log(5 > 3 && 2 > 3) //false

// if (10 > 5 && 5 < 3) {
//     alert("Ishledimi 1 ?") // bu ishlamedi
// }
// if (10 > 5 || 5 < 3) {
//     alert("Ishledimi 2 ?") // bu ishledi
// }
// while(){} // 
// do{}while()

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function funcName(){}
// function myFunc(name, age) {
//     alert(`ism=${name}  yosh=${age}`)
// }
// myFunc("John", 20)

// const myFunc = function(name, age) {
//     alert(`ism=${name}  yosh=${age}`)
// }
// myFunc("John", 20)

// const myFunc = (name, age) => {
//     alert(`ism=${name}  yosh=${age}`)
// }
// myFunc("John", 20)

// window.onload = function() {
//     alert("Page is loaded")
// }

// Objects

// let obj = {
//     model: "Nike",
//     price: 25,
//     isBlue: false
// }
// obj.color = true;
// alert(obj.price) // 25
// alert(obj["isBlue"]) // false

// for (items in obj) {
//     alert(obj[items])
// }
// Objects
// Object 
// 1. Atribut >> sifati >> qanday,qanaqa
// 2.Metod >> harakati >> nima qiladi 
// let obj = {
//         name: "Samsung",
//         method: "automatic",
//         price: 560,
//         getInfo: function() {
//             console.log(this.name)
//         },
//         plus: function(x, y) {
//                 alert(x + y)
//             }
//             // getInfo() {
//             //     console.log(this.key)
//             // }
//     }
//console.log(obj.name) // Samsung
// obj.getInfo() // Samsung
// obj.plus(5, 5) // 10

// Arrays
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [true, null, undefined, "salom", 10]
// console.log(arr[6]) // index = position >> joylashuvi =  7

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// alert(fruits[0]); // Яблоко
// alert(fruits[1]); // Апельсин
// alert(fruits[2]); // Слива
//fruits[1] = "Banana" // index >> change value
// alert(fruits.length) // 3    
// console.log(fruits)
// let arr = [
//         { name: "Abdulloh", age: 15 },
//         { name: "Otabek" },
//         { name: "Umar" },
//     ]
// console.log(arr.length) // 3
// alert(arr[2].name)
// alert(arr[0].age)
// alert(arr[5]) // undefined

// let nums = [1, 2, 3]
// nums.push(4) // oxiriga element qoshish
// console.log(nums) // [1, 2, 3, 4]


// nums.pop() // oxiridan 1 ta elem ochirish
// console.log(nums) // [1, 2, 3]

// nums.shift(0) // boshiga elem qoshish
// console.log(nums) // [0,1, 2, 3]

// nums.unshift() // boshidan 1 ta elem ochirish
// console.log(nums) // [1, 2, 3]

// let nums = []
// for (let i = 1; i < 10; i++) {
//     nums.push(i)
// }
// console.log(nums)

// Object >>  {}
// Array >> []
// Date >> 05.11.2021

// Math >>

// console.log(Math.random()) // 0.123549885 | 0 .... 1
// alert(Math.random() * 10) // 0 .... 10
// let number = Math.random() * 10;
// alert(Math.floor(number)) // 0 .. 10 yaxlitlangan
// let n = 12.4;
// alert(Math.floor(n)) // pastga qarab n = 12
// alert(Math.ceil(n)) // tepaga    qarab n = 13
// alert(Math.round(n)) // 12.9 >> 13
// alert(Math.round(n)) // 12.4 >> 12
// alert(Math.pow(2, 2)) // 4
// alert(Math.pow(10, 2)) // 100


// function getRandomArray() {
//     let randomNumber = Math.random() * 25;
//     let arr = []
//     for (let i = 0; i < randomNumber; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// let result = getRandomArray()
// console.log(result)
Array Methods
let names = ["John", "Mike", "David", "Sara", "Anna", "Alex"]
delete names[0]; // ochirib yuborish
console.log(names)
names[0] = "Phill"
console.log(names)
let removed = names.splice(0, 2);
names.splice(4, 4) // elementlarni indexi orqali qirqish

let c = names.slice(0, 2) // elementlarni nusxasini olish
console.log(c)
console.log(names)

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]
console.log(arr1.concat(arr2, arr3)) // massivni boshqa massiv bilan kengaytirish

names.forEach(alert)
names.forEach((index, item) => {
    console.log(`names: index=${item} \t item=${index}`)
})
names.forEach(function(elem) {
    console.log(`${elem}` + "baaa")
})

let arr = [1, 2, 3, 4, 5]
arr.forEach(function(elem) {
    alert(elem ** 2)
})

let arr = [1, 2, 3, 4, 5]
let str = arr.join("*") // siz korsatgan belgi boyicha massivni str qiladi
console.log(str)
alert(arr.reverse()) // massivni teskari qilish
let fruits = "Apple , Banana, Kiwi";
let x = fruits.split(",") // siz korsatgan belgi boyicha str ni massiv qiladi
console.log(x)
let arr = [1, 2, 3, 4, 5]
let str = arr.join("*") // siz korsatgan belgi boyicha massivni str qiladi
console.log(str)
let text = "An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition"

let words = text.split(" ")

const findWord = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === "apple") {
            counter++
        }
    }
    return counter
}
alert(findWord(words))



let male = [];
let female = [];
for (let i = 0; i < 10; i++) {
    let surname = prompt("Familyani kiriting..")
    let n = surname.length;
    if (surname[n - 1] === "v") {
        alert("Male")
        male.push(surname)

    } else {
        alert("Female")
        female.push(surname)
    }
}
console.log(male)
console.log(female)