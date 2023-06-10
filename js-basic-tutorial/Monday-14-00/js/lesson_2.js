// Data Types and Data Structures

// 1-Number - son , butun son, musbat , manfiy son 
// 2-NaN - Not a number , son emas qiymati 
// 3-Boolean - true yoki false mantiqiy qiymati
// 4-String - qator , belgilar matn qiymati 
// 5-Array - Massiv , malumotlar tuzilmasi 
// 6-Object - Obyekt , malumotlar tuzilmasi 
// 7-null - mavjud emas qiymat
// 8-undefined - qiymati topilmagan ozgaruvchilar
// 9-BigInt - katta butun son qiymati 
// 10-Infinity - cheksiz qoldiqli qiymat


// Data type - Ma'lumot turi 
// Data structure - Ma'lumotlar tuzilmasi , ma'lumotlarni ma'lum bir usulda saqlash 

// Number - Son qiymati 
// int - butun son 
// float - qoldiqli son
// let integer = 10;
// let notInteger = 10.2;

// typeof - ozgaruvchini malumot turini olish
// console.log(typeof integer) //number
// console.log(typeof notInteger) //number
// 10.0 * 11 = 110.0
// console.log(notInteger * 11)

// parseInt() - butun songa aylantirish 
// parseFloat() - qoldiq songa aylantirish
// console.log(parseInt(notInteger) * 11) //110
// console.log(parseInt(notInteger))
// 10.0 * 10.1 = 101
// console.log(parseFloat(integer) * 10.1)//101
// console.log(parseFloat(integer))
// console.log(typeof 0)
// console.log(typeof -2)
// console.log(typeof 1)
// console.log(typeof 1n) // bigint
// let integer = 10;
// console.log(integer * 10) // 100
// console.log(integer - 2) // 8
// console.log(integer + 2) // 12
// // '10' + '2' = '102'
// console.log(integer + '2') // 102 - string
// console.log(integer / "a") // NaN
// console.log(integer / 2) // 5
// let one = "1";
// let two = "2";
// console.log(one + two) // 12 - concat , qaatorlarni bir biriga ulash
// console.log(Number(one) + Number(two)) // 3

// console.log(Number("text")) // NaN
// Boolean
// console.log(typeof true) //boolean
// console.log(typeof false)//boolean

// console.log(Boolean('java')) // true
// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false



// function setColor(){
    // window.location.href = "https://pyblog.uz"
    // let red = Math.round(Math.random()*255);
    // let green = Math.round(Math.random()*255);
    // let blue = Math.round(Math.random()*255);
    // document.body.style.background = `rgb(${red},${green},${blue})`
// }
// setInterval(setColor, 500)


// String 
console.log(String(1) + String(2)) // 12
let s1 = 'lorem ipsum'
let s2 = "lorem ipsum"
let s3 = `lorem ipsum`
// console.log(typeof s1) //string
// console.log(typeof s2) // string
// console.log(typeof s3) // string
let weight = 48
let age = 12

let str = `Abdulloh ${weight}kg , uni yoshi ${age}da`
console.log(str)

console.log(`ES${3+3}`)