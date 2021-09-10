// Data Types
// string , number, boolean , undefined, null , object , array
// true, false
// let x = "hhs" >> true
// let r = "" >> false
// 0 = false
// -1 , 25 = true
// null = false
// undefined = false
// true = 1
// false = 0
// console.log(true + 1) // 2
// console.log(true + true + false) // 2
/////////////////////////
// String(), Number(),Boolean()
// let str = "12";
// // str = parseInt(str) // integer qiymatga ogiriladi
// // str = Number(str)
// let x = Number("123")
// console.log(10 - x) // -113
///////////////////////
// let x = 10;
// x = String(x)
// console.log(typeof x)
///////////////////////////
// console.log(Boolean("kill")) // true
// console.log(Boolean("")) //false
// console.log(Boolean(12)) //true
// console.log(Boolean(0)) //false

// Математика
// Поддерживаются следующие математические операторы:
//
//     Сложение +,
//     Вычитание -,
//     Умножение *,
//     Деление /,
//         Взятие остатка от деления %,
//     Возведение в степень **.
// console.log(7 % 3) // qoldigini olish
// console.log(7 ** 2) //  49 darajaga olish
// let s = "hello";
// let s2 = "world"
// console.log(s + s2)
// let x = 10;
// console.log(++x) // 10 + 1
// console.log(--x) // 10 - 1
// x = x + 1
// x = x - 1

// let apple = "olma"; // qiymat biriktirish operatori
// console.log(10 == 10) // tenglash operatori
// console.log(10 === 10) //qatiy tenglash operatori
// console.log("a" === "A") // false
// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 <= 5) // false
// console.log(10 >= 5) // true
// console.log(10 !== 5) // true
// console.log(10 !== 10) // false
// ! >> agar true bosa false qiladi yoki aksi
// let x = true;
// console.log(!x) // false
// let x = false;
// console.log(!x) // true

// let c = 123;
// c = toString(c) // string ga ogirish
// console.log(typeof c)

// let perm = Number(prompt("Perimetr:"))
// console.log(`Result = ${4*perm}`)

// Math
// let x = 12.6
// console.log(Math.floor(x)) // pastga qarab >>  butun son 12
// console.log(Math.ceil(x)) // yuqorib qarab >>  butun son 13
// console.log(Math.round(x)) // yuqorib qarab >>  butun son 13
// let z = -12;
// let y = 2;
// console.log(Math.abs(z)) // absolut qiymat
// console.log(Math.pow(y , 10)) // 1-sonizi 2-sondagi darajasini qaytaradi pow(2,2) >> 4
// let r = Math.random() * 100
// console.log(Math.floor(r)) // 0 dan 100 gacha tasodifiy bitta son
// let x = 9;
// console.log(Math.sqrt(x)) // sonni ildizini olish
// Math.max(1,2,3)
// 3
// Math.min(1,2,3)
// 2
// let list = [1,5,3,9,4,7,6,2,0,8];

// if(10 < 5){ // agar
//     alert(true)
// }else if(5 > 1){ // yoki
//     alert(true)
// }else{ // aks holda
//     alert(false)
// }

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false
//  || >> yoki mantiqiy oper : Python or
//  && >> va mantiqiy oper : Python and
// let x = 0 || null || true // berilgan qiymatlardan true qiymatni oladi
// console.log(x)
// let z = 1 && 0 && 1 // berilgan qiymatlardan false ni oladi
// console.log(z)
let x = 10;
let y = 2;
if(x > y){
    console.log(true)
}
