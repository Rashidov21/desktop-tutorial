// while , for in
// while >> toxtovsiz takrorlanish

// let  i = 10;
// while(i > 0){
//     console.log(i)
//     i -= 1;
// }
// let i = 10;
// do{
//     console.log(i)
//     i -= 1;
// }while(i > 0);
// while(shart beriladi){
//     har bir takorlanishda
//     qilinishi kerak bolgan ishlar
// }

// while(condition){ ES5 >> 2009
//     actions
// }

// do{ ES6 >> 2015
//     actions
// }while(condition)
// let str = "Hello world";
// let i = 0;
// do{
//     console.log(str[i])
//     i += 1;
// }while(i < str.length);

// for(ozgaruvchini elon qilish; shart; harakat){
//     //     har bir takorlanishda
// //     qilinishi kerak bolgan ishlar
// }
// let str = "Hello world";
// console.log(str[i])
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])
// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// let i = 10;
// for(;i > 0;i--){
//     console.log(i)
// }
// for (;;) {
//     // будет выполняться вечно
// }

// let sum = 0;
// while (true) {
//     let value = prompt("Введите число", '');
//     console.log(typeof value)
//     if (value === "stop") break; // (*)
//     sum += parseInt(value);
// }
// alert( 'Сумма: ' + sum );
// for (let i = 0; i < 10; i++) {
//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 === 0) continue;
//
//     alert(i); // 1, затем 3, 5, 7, 9
// }
// let names = "abdulloh omadbek olimjon"
// for(let i = 0; i < names.length; i++){
//     if(names[i] === "o"){
//         continue
//     }else{
//         console.log(names[i])
//     }
// }

// task 1
// 1 dan 55 gacha tasodifiy sonlarni 10 tasini console ga
// chiqarish uchun kod yozing
// rondomNum = Math.round(Math.random() * 55)

// task 2
// 10 gacha bo’lgan sonlarni kvadratlarini consolega chiqaring

// task 3
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
// Ushbu for ni while ga ozgartirin

// task 4
// For orqali 1 dan 90 gacha bo’lgan sonlar ichida 5 ga qoldiqsiz
// bo’linadganlarini console ga chiqari

// task 5
// for orqali user kiritgan sozni iteratsiya qiling
// agar sozda i,o harfi uchrasa i va o harfini 5 martadan chiqaring


// let user = prompt();
// for(let i = 0; i < user.length; i++){
//     if(user[i] === "i" || user[i] === "o"){
//         for(let k = 0; k < 5; k++){
//             console.log(user[i])
//         }
//     }
// }

// let sum = 0;
// for(let i = 1; i < 10;i++){
//     sum += 1 / i;
// }
// console.log(sum)

// Data Type
// Data Structure >> tuzilishi , malumotlarizni qanday
// usulda saqlanishiga aytiladi

// object , array
// let arr = new Array();
// let fruits = ["Яблоко", "Апельсин", "Слива", true, 1,undefined, null];
// console.log(fruits)
// console.log(typeof fruits[1]) // string
// console.log(typeof fruits[4]) // number
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }
let fruits = ["Яблоко", "Апельсин", "Слива"]
// fruits.unshift("banana")// boshiga element qoshish
// fruits.shift() // boshidan 1 ta element ochirish
// fruits.push("Mango") // oxiriga element qoshish
// fruits.pop() // oxiridan  1 ta element ochiradi

// проходит по значениям
// for (let x of fruits) {
//     console.log( x );
// }

// let str = "Hello world"
// for(let letter of str){
//     console.log(letter.toUpperCase()) // barcha belgilar yuqori registrda
//     console.log(letter.toLowerCase())// barcha belgilar pastki registrda
// }
// console.log(fruits)
// let res = [];
// for(let i = 0; i < 20;i++){
//     if(i % 2 !== 0){
//         res.push(i)
//     }
// }
// console.log(res)
// let phone = [9,9,8,9,3,9,1,1,3,1,2,3];
// let matrix = [0,1, 2, 3,4, 5, 6,7, 8, 9];
// let index = 0;
// for(let i = 0; i < phone.length; i++){
//     for(let item of matrix){
//         if(item === phone[index]){
//             res.push(item)
//             index += 1;
//         }
//     }
// }
// console.log(res)

// let arr = ["I", "go" , "Home"];
// delete arr[2];
// console.log(arr)
// let str = "Python is better";
// let s = str.slice(0,6) // slice index boyicha elementlarni nusxasini oladi
// console.log(s)
// console.log(str)
//
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.splice(0,3) // 0 indexdan  3 indexgacha elementlar ochirladi
// console.log(arr)

// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(2,1);
// console.log(arr)
// arr.push("Python")
// console.log(arr)

// let arr = ["Я", "изучаю", "JavaScript"];
// // console.log(arr + arr2)
// let a = arr.concat(["Я", "изучаю", "Python"])
// console.log(a)
// let a = 2 + 2;
// switch (a) {
//     case 3: //if(a === 3) true
//         alert( 'Маловато' );
//         break;
//     case 4:
//         alert( 'В точку!' );
//         break;
//     case 5:
//         alert( 'Перебор' );
//         break;
//     default:
//         alert( "Нет таких значений" );
// }

// function showMessage() {
//     alert( 'Всем привет!' );
// }
// showMessage();


// let x = 25; // global ozgaruvchi

// function getNumbers(start, end){
//     console.log(start, end)
// }
// getNumbers(start=10,end=50);
// let param;
// console.log(param)
// let n = prompt()
// function sayHi(name){
//     console.log("Hello "+name)
// }
//
// sayHi("abdullo");
// sayHi(n)
// sayHi(true)
// function plus(x,y){
//     return console.log(x + y)
// }
// let num1 = parseInt(prompt("Num 1"))
// let num2 = parseInt(prompt("Num 2"))
//
// let operand = prompt("Qaysi amal ? +,-,*,/")
// if(operand === "+"){
//     plus(num1, num2)
// }

// task 1
// input: [1,2,3,4,5,6]
// output: sum numbers of array
// let nums = [1,2,3,4,5,6];
// function sum(arr){
//     let summa = 0;
//     for(num of arr){
//         summa += num
//     }
//     return console.log(summa)
// }
// sum(nums)
// task 2
// function getOddnumbers()
// input : user int 5
// output : [1,3,5]

// task 3
// let arr = [1,5,9,3,4,56,72,96,14,26]
// // num = 2 ** 2
// // num = 3 * num + 1 index
// output: 2 array , 1- = arr[nums**2], 2- = arr[num*num]
// let x = [];
// let y = [];
// function twoArrays(arr){
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 === 0){
//         x.push(arr[i]**2)
//       }else{
//           y.push(arr[i] * arr[i+1])
//       }
//   }
// }
// twoArrays(arr)
// console.log("Kvadratlari = ",x)
// console.log("Kopaytma = ",y)



// task 4
// let letters = ['1','2','3','4','5', "q","w","e","r",
//                 "t","y", "@","#","_","&","$"]
// // input: user int = 8;
// // output: "56@tr8&$"
//
// function getRandomLetters(){
//     let count = parseInt(prompt("Nechta belgi ?"))
//     let result = "";
//     for(let i = 0; i < count; i++){
//         let rLetter = letters[Math.round(Math.random() * letters.length)];
//         result += rLetter;
//     }
//     return console.log(result)
// }
// getRandomLetters()

// Funksiyalar >>>

// 1-Declarition:

// function FuncName(x,y,z=10){
//     // actions
// }
// 2-Expression:
// let f = function Myfunc(){
//     console.log("MyFunc")
// }
// f()
// function Myfunc(){
//     console.log("MyFunc")
// }
// let test = Myfunc; // () >> funksiyani chaqirish
// test() // funksiya murojat


// 3-Callback
// function a(){
//     console.log("func A")
// }
// function b(){
//     console.log("func B")
// }
//
// function c(f1,f2){
//     if(f1){
//         f1()
//     }
//     if(f2){
//         f2()
//     }
// }
// c(a,b)
// let x = confirm() // true or false
// console.log(x)
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// //
// function showOk() {
//     alert( "Ok" );
// }
// //
// function showCancel() {
//     alert( "Cancel" );
// }
// //
// // // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);

// 4- Arrow

// let arrowfunc = (x,y) => {
//     return x * y
// }
// console.log(arrowfunc(10,2))

// let test = response => {
//     if(response){
//         console.log(response)
//     }else{
//         console.log("False response")
//     }
// }
// console.log(test(1))
//
// let test2 = () => {
//     console.log("Test 2 arrow func")
// }
// test2()
// let x = (param1, param2) => param2 ** param1;
// console.log(x(5,2)) // 32
// function CallBackFunc(){
//     let call = () => {
//         console.log("Call back is working...")
//     };
//     return call()
//
// }
// CallBackFunc()

// 5- Anonim
// let anonim = function (){
//     console.log("this is anonim func")
// }
// anonim()

// function declarition(){
//
// }
// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// arr.forEach((item, index, array) => {
//     console.log(`${item} имеет позицию ${index} в ${array}`);
// });
let arr = [1,2,3,4,5];
// arr.forEach((item) =>{
//     console.log(item**2)
// })
// arr.forEach((item,) => {
//     if(item % 2 === 0){
//         console.log(typeof item)
//         alert(`Juft son =  ${item}`)
//     }else{
//         alert(`Toq son = ${item}`)
//     }
// })

// task 1
// input: arr = [1,2,3,4,5]; , item , index, item = 1, index = 3
// output: arr = [2,3,4,1,5]

// Objects
// let obj = new Object();
// let obj = {};

// let person = {name:"John",surname:"Doe"}
// // console.log(person.name)
// // console.log(person["name"])
// person.name = "Mike" // key ga murojaat orqali value ni ozgartirish
// console.log(person.name)

// let programmer = {
//     name:"Guido",
//     surname:"Van Rossum",
//     age:64,
//     sklills:['C++', "C",".NET", "html"],
//     inwork:true,
//     location:undefined,
//     family:{
//         son:"Mike"
//     }
// }
// console.log(programmer.sklills[0]) // C++
// console.log(programmer.family.son,programmer.inwork) // Mike, true
//
// programmer["work"] = "Dropbox";
// console.log(programmer.work) // Dropbox


// let car = {
//     model:"BMW",
//     price:1500,
//     start:function (){
//         console.log("Driving...")
//     },
//     stop:() =>{
//         console.log("Stopped...")
//     }
// }
// console.log(car.start())
// console.log(car.stop())

// let btn = document.getElementById("btn");
// console.log(typeof btn)
// btn["onclick"] = function (){
//     console.log("box is clicked ..")
// }

// let obj = {
//     name:"object name",
//     metod:function (){
//         console.log("Bu shunchaki metod")
//     }
// }
// obj["newKey"] = "New Value";
// let name = obj.name;
//
// console.log(name)
// console.log(obj)
// console.log(obj.metod())
// let x = 10;
// function X(){
//     let y = 10;
// }
//
// let person = {
//     name:"John",
//     surname:"Doe",
//     age:35,
//     salary:15000,
//     info:function (){
//         console.log(this.name + " ismli odam haqida ma'lumotlar")
//         console.log(`Familya : ${this.surname}`)
//         console.log(`Yoshi : ${this.age}`)
//         console.log(`Oyligi : ${this.salary}`)
//     },
//     sayHi(){
//         console.log("HI")
//     }
// }
// person.info()
// person.sayHi()
// // let z = this.name;
// // console.log(typeof z) // bosh qiymat

// function test(){
//     console.log(this)
// }
// test()

// let myWindow = window;
// console.dir(myWindow)
// console.dir(document)
// let myUrl = document.URL
// console.log(myUrl)
//
// let value = document.all
// console.log(value) // hama html teglar
// document.bgColor = "red"

// let body = document.body
// let head = document.head
// console.dir(head)
// console.log(body)

// JS DOM
// window , document
// console.dir(document)

// let btn = document.getElementById("btn");

// let b = {
//     className:"myClass"
// }
// console.log(b.className)
// console.log(btn.className)
// let box = document.getElementsByClassName("box");
// console.log(box) // array HtmlCollection
// let div = document.getElementsByTagName("div");
// console.log(div) // array HtmlCollection

// let div = document.getElementById("div");
// console.log(div) // 1 object

function changeColor(){
    let box = document.getElementById("div");
    box.className = "box red-box"
}

// let btn = document.getElementById("btn");
// btn.onclick = changeColor();

// let test = document.getElementById() // id nomi beriladi
// let test = document.getElementsByClassName() // class nomi beriladi
// let test = document.getElementsByTagName() // tag nomi beriladi
// let test = document.getElementsByName() // name atributidagi nom beriladi nomi beriladi

// let test = document.querySelector(".home") // css selector
// // test = li tegi
// console.log(test)
let test = document.querySelectorAll("li")
// console.log(test)
// function setRandomColor(tags){
//     let colors = ["red","orange","blue", "yellow", "green"]
//     for(let i = 0; i < tags.length; i++){
//         let rNum = Math.round(Math.random() * colors.length)
//         tags[i].className = colors[rNum]
//         // tags[i].className = "box red"
//     }
// }
// let n = 0;
// function changeIndex(){
//     let p = document.querySelectorAll("p");
//     // let nextColor = p[n].className
//     p[n].className = "red";
//     n += 1;
//     if(n >= p.length){
//         n = 0;
//     }
// }