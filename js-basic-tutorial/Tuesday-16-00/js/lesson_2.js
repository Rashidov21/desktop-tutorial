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

// const x = 10;
// const y = 5.3;
// const z = 2;
// console.log(x*(y+z)) //73.0

// parseInt() - butun songa aylantirish 
// parseFloat() - qoldiq songa aylantirish
// console.log(parseInt(1.6) * 7) //7
// console.log(parseFloat(10.3) * 5) //51.5
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
// console.log(4*4)
// console.log(4+4)
// console.log(4/2)
// console.log(4-2)
// console.log(2**2) // daraja
// console.log(2**3) // kubi
// console.log(7 % 2 ) // bolganda qoldiq olish
// let count = 0;
// count = count + 1
// console.log(++count)
// count = count - 1
// console.log(--count)
// let integer = 10
// console.log(integer + '2') // 102 - string
// console.log(integer * '2') // 20
// console.log(integer / "a") // NaN
// console.log(integer / 2) // 5
// let one = "1";
// let two = "2";
// console.log(one + two) // 12 - concat , qaatorlarni bir biriga ulash
// console.log(Number(one) + Number(two)) // 3

// let age = Number(prompt("Yoshingiz ?"));
// console.log(typeof age)
// console.log(age / 2) //
// let a = +prompt("A=?")
// console.log(typeof a)

// console.log(Number("text")) // NaN
// Boolean
// console.log(typeof true) //boolean
// console.log(typeof false)//boolean

// console.log(Boolean('java')) // true
// console.log(Boolean(1)) // true
// console.log(Boolean(0)) // false


// task 1

let a = +prompt("A ?")
console.log("Perimetr = ",4*a) 