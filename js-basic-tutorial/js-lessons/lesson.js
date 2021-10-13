// Data Type
// Data Structure

// let num = 10;
// num = 20;
// let nums = [10,20,30,50];

// let
// const

// const x = 10;
// x = 20;

// const pi = 3.14;
// let r = 10;
// console.log(2 * r * pi)

// let appleInfo = "Apple COM inc";
// let getUserFullName; // Camel Case >> Javascript
// let get_user_full_name; // Kebab case >> Python
// let getuserfullname; //

// Data Type

//1 number 
// let x = 5.2;
// console.log(x)
// console.log(typeof x) // number

// 2 NaN  Not a Number
// alert(1 * "olma") // NaN

// 3 string
// let str1 = "Apple";
// let str2 = 'Apple';
// let str3 = `Apple`;

// console.log(str1 + str2 + str3) //AppleAppleApple

// let s = "123456"
// console.log(typeof s) // string

// console.log("Qalesan " + " 'ÿaxshimisan' !")

// let age = 15;
// let name = "Abdulloh";
// console.log("Foydalanuvchini ismi :" + name)
// console.log("Foydalanuvchini yoshi :" + age)
// console.log(`Foydalanuvchini ismi : ${name}`)
// console.log(`Foydalanuvchini yoshi : ${age}`)
// let str = "Samsung\nApple\n\tXiaomi";
// console.log(str);

// function changeColor() {
//     let box = document.getElementById("box");
//     box.style.backgroundColor = "red";
//     box.style.width = `${width}px`;
// }

// 4 boolean

// true , false >> 1,0 >> Ha , Yo'q, 

// let b = true;
// let b2 = false;
// console.log(typeof b) // boolean

// let n = 0;
// console.log(Boolean(n))
// console.log(10 < 5)


// 10 < 5 // false
// 10 > 5 // true

// 5 null

// hech qaysi qiymat turiga tegishli emas

// 6 undefined 
// let x;
// console.log(x)

// alert("hello world")

// let age = prompt("Yoshingizni kiriting.. ") // userdan input kutadi
// console.log(age)

// let test = confirm("Python or Javascript ") // true yoki false
// console.log(test)

// lesson 2

let value = 10;
// value = String(value) // to string
// console.log(typeof value)

// value = "10"; // string
// value = Number(value) // to number
// console.log(typeof value) // number

// ! >>  not  >> emas , (agar true bolsa , <<!>> true emas)
// console.log(Boolean(!value))

// value = Boolean(value) // true
// console.log(typeof value)

// let user1 = prompt("1-Sonni kiriting..."); // user dan string qiymatlarni qabil qilish
// let user2 = prompt("2-Sonni kiriting..."); // user dan string qiymatlarni qabil qilish
// user1 = Number(user1) // to number
// user2 = Number(user2) // to number
// alert(`Yigindi = ${user1 + user2}`)

// let x = Number(prompt("1-son"))
// let y = Number(prompt("2-son"))
// alert(`Result = ${x + y}`)


// Arifmetika
// console.log(10 + 10) // qoshish
// console.log(10 - 5) // ayirish
// console.log(10 * 5) // kopaytirish
// console.log(10 / 2) // bo'lish
// console.log(7 % 3) // bo'lganda qoldiqni olish
// console.log(10 ** 2) // darajaga kotarish

// let hieght = Number(prompt("Boyizni kirit"))
// alert(`Siz uchun idel vazn = ${hieght - 100}kg`)

// console.log((15 * 12) * 365)
// console.log(100 / (3 + 10) * 5)

// task 1 
// let userValue = Number(prompt("KV tomoni..."))
// alert(`Kvadratni perimetri = ${4 * userValue}sm`)
// task 2 
// let userValue = Number(prompt("KV tomoni..."))
// alert(`Kvadratni yuzasi  = ${userValue ** 2}sm`)

// task 5
// let a = parseInt(prompt("kubni Tomoni"))
// alert(`Hajmi = ${a**3}, Sirti = ${6* a **2}`)

//
// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 >= 5) // true
// console.log(10 <= 5) // false

// console.log(10 == 10) // true
// console.log(10 === 10) // true
// console.log(10 != 10) // false

// console.log("A" === "A")

// console.log(!true) // true

// if conditions 

// if (10 > 20) {
//     console.log("Block if")
// } else if (10 > 11) {
//     console.log("Block else if")
// } else {
//     console.log("Block else")
// }

// let age = Number(prompt("Your age ?"));
// // if(age > 18)alert("Welcome");
// if (age > 18) {
//     alert("Welcome")
// } else {
//     alert("False")
// }

// let num = Number(prompt("Your number ?"))

// if (num % 2 === 0) {
//     console.log(num ** 2)
// } else {
//     console.log(num / 2)
// }
// let accessAllowed = (age > 18) ? true : false;

// ? >> if(){}
// : >> else{}
// let letter = prompt()
// if(letter === "a")console.log("A")
// if(letter === "b")console.log("B")
// if(letter === "c")console.log("C")

// if (letter === "a") {
//     console.log("A")
// } else if (letter === "b") {
//     console.log("B")
// } else if (letter === "c") {
//     console.log("C")
// } else {
//     console.log("Harf emas")
// }

// if ("0") {
//     alert('Привет');
// }

// let user = prompt()
// if (user === "ES6") {
//     console.log("togri")
// } else {
//     console.log("notori")
// }

// task 1 
// input : login >> string
// output: login="gandi123" else if login="gandi986"  > alert("Welcome")
// else   > alert("Error!")