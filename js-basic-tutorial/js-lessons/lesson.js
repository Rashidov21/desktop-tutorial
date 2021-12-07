// ************LESSON 1************
//this is alert window 
// alert("Hello world")
/* lorem   
       ipsum
 dolor */

//  var , let , const 
// var num = 10;
// alert(num)

// Dastur - bu shunchaki kod matn algoritm
// 1.Dastur malumotlarni qabul qiladi
// 2.Ularni qayta ishlaydi 
// 3.Natijani qaytaradi 

//  O'zgaruvchilar - var , let , const

// yacheyka manzili - <0bc10zf012>  >> num
// ip adress - 192.168.1.1 >> robocode.uz
// var myNumber = 10; // 10 qiymatini xotiraga yozyapman myNumber sozi ostida
// alert(myNumber) // xuddi shu qiymatni myNumber soziga murojaat orqali olyapman

// var >> EcmaScipt 2009 |  ES5
// let , const >>  EcmaScipt 2015 |  ES6
// var x = 10;
// var x = 15;
// alert(x) // 15

// let y = 5;
// let y = 6; // SyntaxError

// const z = 10;
// z = 15; // TypeError
// const pi = 3.14;

// let myVar = "sumka";
// alert(myVar) // sumka

// let a, b, c;
// a = 10;
// b = 20;
// c = 30;
// alert(a)
// alert(b)
// alert(c)

// alert("Go")
// confirm("Python Kuchlimi ?")
// let name = prompt("Ismingizni kiriting ...")
// alert(name)
// oddiy prompt userdan qatorlarni qabul qiladi
// let x = +prompt("1-son") // +prompt son oladi
// let y = +prompt("2-son")

// console.log("Natija = ", x + y)
// let user1;
// let userFullName;

// 1.Dastur malumotlarni qabul qiladi
// Data Types | Malumot turlari 
// Raqamlar - number 
// let n = 10; // 10.2,-89,1265455646522
// let num = -5;
// console.log(typeof num) // number
// alert(1 / 0) // Infinity

// Qatorlar - string
// let myName = "Abdullo"
// let mySurname = 'Aliev'
// let myPatronimic = `Abdullaevich`
// console.log(myName + mySurname + myPatronimic)
// console.log(typeof myName) // string
// const pi = 3.14;
// console.log(`PI ning qiymati=${pi}`) // `` ichida js ozgaruvchilarini berib ketish mumkin
// alert(`${20+20}`)// 40

// *******LESSON 2 **********
// 8-xil qiymat turi [Number, String, Boolean, null, undefined, Object ]
// Boolean >> true , false : 1,0 >> Ha , yoq
// let value = false;
// console.log(typeof value)

// null , mavjud emas
// let n = null; //0

// undefined , Topilmadi , yoki qiymat topilmadi
// let m;
// console.log(typeof m)
// let test = confirm("Oq yaxshimi ?") // boolean qiymatini qabul qiladi
// console.log(test)

// let height = prompt("Boyizni kiriting ...")
// console.log(`Siz uchun optimal vazn = ${height - 100}kg`)

// let str = "10"; // string
// str = Number(str) // to Number
// console.log(str + 10) // 20
//     // str = number 10 
// str = String(str) // "10" + 10 == 1010
// console.log(str + 10)

// console.log("salom" * 2) // NaN >> Not a Number son emas

// console.log(Boolean(null))

// ***Arifmetika****
// console.log(10 + 10) // 20 
// console.log(10 - 5) // 5 
// console.log(10 * 2) // 20 
// console.log(10 / 2) // 5 
// console.log(7 % 3) // 1 
// console.log(2 ** 2) // 4

// console.log(10 + 2 / (2 * 5))
// task 1
// let a = +prompt("Kv tomonini kiriting>>")
// alert(`Kv perimetri = ${4*a}`)

// *******LESSON 3 **********

// console.log(10 > 5) // true 
// console.log(10 < 5) // false
// console.log(10 <= 10) // true
// console.log(10 >= 9) // false

// console.log(10 == 10) // true
// console.log(10 != 10) // false

// console.log("A" === "a") // false
// console.log("a" === "a") // true
// console.log("a" === "а") // false

// if(){} // agar
// else if(){} // yoki
// else{} // aks holda
// let age = +prompt("Yoshingiz ?")
// console.log(age > 18 ? "True" : "False")
// if (age > 18) {
//     alert("Hush kelibsiz !")
// } else if (age === 18) {
//     alert("Hush kelibsiz !")
// } else {
//     alert("Notogri !")
// }

// if (0) {
//     alert("Ishlamedi")
// }

// let pass = prompt("Parol ?")
// || birinchi true qiymatni oladi bomasa oxirgi false qiymatni qaytaradi
// if (pass === "ketmon" || pass === "lopatka") {
//     alert("|| qiymat qaytardi")
// } else {
//     alert("|| qiymat qaytarmadi")
// }
// && birinchi false qiymatni oladi bomasa oxirgi true qiymatni qaytaradi
// let num = +prompt("Son..") // 15 bilan 20 orasida son bilan ishlaydi
// if (num > 15 && num < 20) {
//     alert("&& qiymat qaytardi ")
// } else {
//     alert("&& qiymat qaytarmadi")
// }
// true || false >> ishlaydi
// false || true >> ishlaydi
// false && false >> ishlamedi
// true && false >> ishlaydi
// true && true >> ishlaydi

// let num = +prompt()
// if (num % 2 === 0) {
//     console.log("Juft")
// } else {
//     console.log("Toq")
// }

// *******LESSON 4 **********

// let control = true;
// let count = 0;
// while (control) {
//     count++
//     if (count === 10) {
//         control = false
//     }
//     console.log(count, control)
// }
// let x = true;
// while (x) {
//     let user = prompt("Nmadur yozing")
//     console.log(user)
//     if (user === "stop") {
//         x = false
//     }
// }
// let i = 3;
// do {
//     i = i - 1
//     console.log("i = " + i)
// } while (i > 0)
// let x = 5;
// console.log(++x) // increment qiymatni 1 ga ortirish
// console.log(--x) //decrement qiymatni 1 ga kamaytirish

// for (let i = 1; i < 11; i++) {
//     console.log(i)
// }

// for (let i = 0; i < 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }
// task 1
// for (let i = 1; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(i ** 2)
//     } else {
//         console.log(i / 2)
//     }
// }

// let i = 0;
// while (true) {
//     i++
//     if (i % 2 === 1) {
//         continue // aynan shu siklni tashlab otib ketish
//     }
//     if (i === 50) {
//         break // sikl dan chiqish
//     }
//     console.log(i)
// }

// for (let i = 0; i < 3; i++) {
//     for (let k = 0; k < 3; k++) { 
//         console.log(k)
//     }
//     console.log(i)
// }
// let count = 0;
// let names = ["John", "David", "Sara"]
// for (let i = 0; i < names.length; i++) {
//     for (let k = 0; k < names[i].length; k++) {
//         if (names[i][k] === "a") {
//             count++
//         }
//     }
// }
// console.log("Soni", count)

// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert('Маловато');
//         break;
//     case 4:
//         alert('В точку!');
//         break;
//     case 5:
//         alert('Перебор');
//         break;
//     default:
//         alert("Нет таких значений");
// }
// if (a === 3) {
//     alert('Маловато');

// } else if (a === 4) {
//     alert('В точку!');

// } else {
//     alert("Нет таких значений");
// }

// let user = prompt("Parol ?")
// switch (user) {
//     case "gandi":
//         console.log("Hush kelibsiz !")
//         break;
//     case "GANDI":
//         console.log("Hush kelibsiz !")
//         break
//     case "Gandi":
//         console.log("Hush kelibsiz !")
//         break;
//     default:
//         console.log("Qaytadan urnib koring")
// }


// function plus(a, b) {
//     console.log(`a =`, a)
//     console.log(`b =`, b)

//     return a + b
// }
// let test = plus(10, 20)
// console.log(test)

// console.log(plus(5, 5))

// function myfunc(name, surname) {
//     alert(name)
//     alert(surname)
// }
// myfunc("Ali", "Vali")

// let kazol = ["A", "Ms", "Mz", "Xk", "S", "Xb", "G", "Mv", "Ab", "My"]

// function getKazyolName(list) {
//     let randomNumber = Math.round(Math.random() * list.length)
//     console.log(kazol[randomNumber])
// }
// for (let i = 0; i < 3; i++) {
//     getKazyolName(kazol)
// }
// console.log(Math.floor(12.99)) // 12
// console.log(Math.ceil(12.1)) // 13
// console.log(Math.round(12.4)) // 12
// console.log(Math.round(12.6)) // 13
// let arr = [1, 2, 3, 4, 5, 6]
// let half = arr.length / 2
// let rNum = Math.ceil(Math.random() * half)
// console.log(arr.slice(0, rNum))
// console.log(Math.round(Math.random() * 10))

// console.log(Math.max(1, 2, 3, 4, 5)) // 5
// console.log(Math.min(1, 2, 3, 4, 5)) // 1
// console.log(Math.sqrt(9)) // 3
// console.log(Math.abs(-122)) // 122

// let date = new Date();
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
//     // console.log(date.getTime())
// console.log(date.toLocaleDateString()) // 30.11.2021
// console.log(date.toLocaleTimeString()) // 30.11.2021
// let year = date.getFullYear()

// var timerVar = setInterval(countTimer, 1000);
// var totalSeconds = 0;

// function countTimer() {
//     ++totalSeconds;
//     var hour = Math.floor(totalSeconds / 3600);
//     var minute = Math.floor((totalSeconds - hour * 3600) / 60);
//     var seconds = totalSeconds - (hour * 3600 + minute * 60);
//     if (hour < 10)
//         hour = "0" + hour;
//     if (minute < 10)
//         minute = "0" + minute;
//     if (seconds < 10)
//         seconds = "0" + seconds;
//     document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
// }
// declariton
// function myFun() {

// }
// expression
// const myfunc = function() {

//     }
// arrow
// const arrowfunc = () => {

// }
// anonim
// function() {

// }
// window.onload = function() {
//     console.log("page is loaded")
// }

// function hello() {
//     alert("Hello")
// }

// function bye() {
//     alert("Bye-Bye")
// }

// function system(user, hi, bye) {
//     if (user) {
//         hi()
//     } else {
//         bye()
//     }
// }
// system(confirm("Yes or No ?"), hello, bye)



// const myfunc = function(number) {
//     console.log(number ** 2)
// }
// myfunc(2) // 4

// let mathPow = (num, level) => {
//     console.log(num ** level)
// }
// mathPow(2, 10) // 1024

// let fam = "Rashidov";
// console.log(fam[fam.length - 1])
// let men = 0;
// let women = 0;

// function peoples(surname) {
//     if (surname[surname.length - 1] === "v") {
//         men++
//     } else {
//         women++
//     }

// }
// for (let i = 0; i < 5; i++) {
//     let surname = prompt("Familyangizni kiriting..")
//     peoples(surname)
// }
// console.log(`Erkaklar = ${men}`)
// console.log(`Ayollar = ${women}`)

// Data Structure | Malumotlar tuzilishi

// let arr = [1, "str", true, undefined, [1, 2, 3]]
// console.log(arr[0])
// console.log(arr[arr.length - 1])
// let fruits = ["Яблоко", "Апельсин", "Слива"];

// alert(fruits[0]); // Яблоко
// alert(fruits[1]); // Апельсин
// alert(fruits[2]); // Слива

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.length) // 5
//arr.push(6) // oxiriga element qoshish
//arr.pop() // oxiridan 1 element ochirish
// arr.unshift(0) // boshiga 1 element qoshish
//arr.shift() // boshidn 1 element ochirish

// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }
// let arr = [1, 2, 'str', true, 'str2', 5, 9, 8]

// arr.push("for")
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift("for")
// console.log(arr)
// arr.shift()
// console.log(arr)
// delete arr[2]

// let arr = [1, 2, 'str', true, 'str2', 5, 9, 8]
// arr.splice(2, 3) // splice(index, nechta elem ochirilishi kerak soni)
// arr.splice(3, 1)
// let arr2 = arr.slice(3, 4)
// console.log(arr2)
// console.log(arr)
// let nums = [1, 2, 3]
// let nums2 = [4, 5, 6]
// let nums3 = [7, 8, 9]
// nums = nums.concat(nums2, nums3)
// console.log(nums)

// let arr = [];
// for (let i = 1; i < 11; i++) {
//     arr.push(i)
// }
// arr.forEach((elem) => {
//     console.log(elem ** 2)
// });

// arr.forEach(function(item, index) {
//     console.log("Element= " + item)
//     console.log("Indexi= " + index)
// })
// console.log(arr.indexOf(7)) // siz korsatgan elemni indexini qaytaradi
// console.log(arr.lastIndexOf(7)) // siz korsatgan elemni indexini qaytaradi
// let words = ["olma", "behi", "anor", "uzum"]
// console.log(words.includes("uzum", 0))
// let word = "Assalom alaykum"
// console.log(word.includes("s", 5)) // false
// let arr = [2, 8, 6, 4, 9]
// arr.sort()
// console.log(arr)
// arr.reverse()
// console.log(arr)
// let str = "Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Veniam ,id illum quod officia alias! Debitis suscipit odit provident minus aspernatur vitae animi, temporibus et rem! Fugiat vel recusandae quo iusto?0"
// let arr = str.split(',')
// arr.forEach((word) => {
//     console.log(word)
// })
// let arr = ["A", "B", "C"]
// console.log(arr.join(""))
// let colors = ["red", "blue", "green", "yellow", "black", "gray"]
// let list = document.querySelectorAll("li");
// list.forEach(function(li) {
//     //     li.style.color = colors[Math.round(Math.random() * colors.length)]
//     li.style.background = `rgb(${Math.round(Math.random() * 250)},${Math.round(Math.random() * 250)},${Math.round(Math.random() * 250)})`
// })

// let obj = {
//         name: "Apple",
//         color: "green",
//         count: 20,
//         weight: "2kg",
//         isBanana: false,
//         type: ["uzbekistan", "tashkent", "asia"],
//         childObj: {
//             name: "olma",
//             color: "darkgreen",
//         }
//     }
// console.log(obj.name) // Apple
// console.log(obj.color) // greem
// console.log(obj["isBanana"])
// obj.name = "Golden"
// console.log(obj["name"])
// console.log(obj["type"][0])
// console.log(obj.childObj.name)
// let laptops = [];
// for (let i = 0; i < 3; i++) {
//     let laptop = {
//         name: prompt("Nomini kirit"),
//         cpu: prompt("Toshini kirit"),
//         price: prompt("Narxini kirit")
//     }
//     laptops.push(laptop)
// }
// console.log(laptops)

// let person = {
//     firstName: "Abdulloh",
//     lastName: "Valiev",
//     age: 23,
//     height: 167,
//     getWeight() {
//         console.log(this.height - 100 + "kg ideal ves")
//     },
//     sayHello: function() {
//         console.log(`Hello my name is ${this.firstName}`)
//     }
// }
// person.sayHello()
// person.getWeight()
// let persons = [
//     { name: "John", age: 15 },
//     { name: "Mike", age: 10 },
//     { name: "David", age: 12 },
//     { name: "Tom", age: 18 },
// ]
// for (item of persons) {
//     console.log(item["name"])
//     console.log(item["age"])
// }
// let person = {
//     firstName: "Abdulloh",
//     lastName: "Valiev",
//     age: 23,
// }
// for (key in person) {
//     console.log(person[key])
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// nums.forEach((item) => {
//     // console.log(item)
//     if (item % 2 === 1) {
//         nums.splice(nums.indexOf(item), 1)
//     }
// })
// console.log(nums)
// let index = +prompt("Index ?")
// nums.splice(index, 1)
// console.log(nums)