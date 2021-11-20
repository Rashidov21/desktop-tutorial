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


for (var i = 0; i < 10; i++) {
    console.log(i++);
}