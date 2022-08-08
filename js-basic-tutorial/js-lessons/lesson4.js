// Math and String methods 

// console.log(Math.PI) // 3.141592653589793

// let n = 14.5
// console.log(Math.floor(n)) // 14
// console.log(Math.ceil(n)) // 15
// console.log(Math.round(n)) // 15
// console.log(Math.max(1, 2, 3)) // 3
// console.log(Math.min(1, 2, 3)) // 1

// console.log(Math.round(Math.random() * 10) + 20)

// let num = 12.340;
// console.log(typeof num.toFixed(1)); // "string"
// console.log(num.toFixed(1)); // "12.3"
// let strNum = "12.3"
// let n = parseInt(strNum) // sonni butun qilish
// let n2 = parseFloat(strNum) // sonni qoldiqli qilish

// console.log(n) // int number
// console.log(n2) // float number

// let n = parseInt(prompt())
// console.log(typeof n)

// let s1 = "javascript"
// let s2 = 'python'
// let s3 = `cpp`

// // console.log(s1[0]) // j
// // console.log(s1[1]) // a
// // console.log(s1[2]) // v
// // console.log(s1.length) // 10
// // console.log(s1.length - 5) // 5
// // console.log(s1[s1.length - 1]) // t

// for (let i = 0; i < s1.length; i++) {
//     console.log(s1[i])
// }
// let n = "John"
// let a = 23
// let d = "23.3.2000"
// let s = 25

// let str = `
//      * name = ${n}
//      * age = ${a} 
//      * date = ${d}
//      * salary = ${s * 100}
// `
// console.log(str)

// let user = "Mahatma Gandi"
// console.log(user.toLowerCase())
// console.log(user.toUpperCase())
// console.log(user.includes("andi"))
// console.log(user.indexOf("a"))

// task 1
// let s = "javascript is better" // >> JaVaScRiPt...
// let r = ''
// for (let i = 0; i < s.length; i++) {
//     if (i % 2 == 0) {
//         r += s[i].toUpperCase()
//     } else {
//         r += s[i].toLowerCase()
//     }
// }
// console.log(r) // JaVaScRiPt iS BeTtEr

// task 2
// let text = `Asslomu alaykum Vaalaykum assalom`
// text da nechta a harfi bor ekanini toping 

// task 3 
// 10 bilan 100 ni orasida bitta tasodify son hosil qiling 
// agar son 50 dan katta bo'lsa uni kubini agar kichik bo'lsa uni kvadratini chiqaring
// let n = Math.round(Math.random() * 100)

// task 4 
// let text = "lorem ipsum dolor amet sit"
// text dan tasodify bitta harfni oling agar harf unli bo'lsa uni 2 marta console ga 
// chiqaring agar undosh bolsa shunchaki o'zini console ga chiqaring

// let n = Math.round(Math.random() * text.length)
// console.log(text[n])
// if (text[n] == 'a' || text[n] == 'i' || text[n] == 'e' || text[n] == 'u') {
//     console.log(text[n] + text[n])
// } else {
//     console.log(text[n])
// }
// task 5
// foydalanuvchi son kiritadi agar son qoldiqli bolsa va  10 dan katta bolsa  uni tepaga 
// qarab yaxlitlansin agar son qoldiqli va  10 dan kichik bolsa pastga qarab yaxlitlansin 
// input : 12.3 >> ceil >> 13 ; 9.8 >> floor >> 9
// console.log(Math.floor(12.3)) // 12
// console.log(Math.ceil(12.3)) // 13

// task 6
// let n = 4
// console.log(((n > 2) + (10 > 2) + 2) - (n % 3) * 2 - (!true + 2)) // n ? 
// // console.log(7 % 4)