// Mantiqiy operatorlar 
// AND , OR , NOT >> && , || , !
// Tenlash operatorlari 
// > , < , >=, <= , ==, ===, != , !==

// Natijasi Boolean = True , False 
// console.log(10 > 5) // true : katta
// console.log(10 < 5) // false : kichik
// console.log(10 <= 5) // false : katta yoki teng
// console.log(10 >= 10) // true : kichik yoki teng
// console.log(10 == 10) // true : teng 
// console.log(10 != 10) // false : teng emas 
// console.log(10 === 10) // true : qatiy teng 
// console.log(10 !== 10) // false : qatiy teng emas


// console.log("5" == 5) // true
// console.log("5" === 5) // false

// console.log("MATN" == 20) // false

// console.log(11.1 > 11) // true
// console.log(-11.1 > 11) // false

// console.log("A" == "a") // false    
// console.log("A" === "a") // false  

// let password = "qwerty"

// console.log("Qwerty" == password) // false
// console.log("qwerty" == password) // true

// console.log(10 > 5 && 5 > 3)

// // && - VA 
// // birinchi uchragan false qiymatni oladi 
// let state1 = true && 0 && 1 && "str"
// console.log(state1)

// // || - YOKI 
// // birinichi uchragan true qiymatni oladi 
// let state2 = 0 || 1 || "" || null
// console.log(state2)

// // ! - EMAS 
// console.log(!true) // false 
// console.log(!false) // true

// if - agar 
// else if - agar yoki
// else - aks holda  
// if(shart){harakat}
// else if (shart){harakat}
// else{harakat}

// let water = 150

// if (water < 800 && water > 450) {
//     console.log("Suv hajmi yetarlik " + water + "ml")
// } else if (water < 450 && water > 200) {
//     console.log("Suv hajmi ozroq " + water + "ml")
// } else {
//     console.log("Suv oz qoldi " + water + "ml dan kam!")
// }

// let pass = prompt("Your password ? :")
// if (pass == "abc") {
//     alert("ABC")
// } else if (pass == "BBC") {
//     alert("BBC")
// } else if (pass == 'qwerty') {
//     alert("Welcome !")
// } else {
//     alert("Write your password !")
// }
// let control = false
// if ("") {
//     alert("Empty string")
// } else if (0) {
//     alert("null")
// } else if ("0") {
//     alert("Zero")
// } else if (!control) {
//     alert("Control A")
// } else if (control) {
//     alert("Control B")
// }
// else {
//     alert("Now working !")
// }   


// task 1
// To'rtburchak va ayalana bor siz aylana kvadarat ichiga sig'adimi yo'qmi topishingiz kerak

// task 2
// ikki xil tortburchak bor birinchisiga ikkinchisi sig'adimi yo'qmi toping

// task 1 
// let l = +prompt("Santimetr :")
// console.log(`metr = ${l / 100}`)

// task  2
// let kg = +prompt("kg :")
// console.log(`t = ${kg / 1000}`)

// task  3
// let byte = +prompt("bytes :")
// console.log(`kb = ${byte / 1024}`)

// task 6 , 7
let num = prompt("Son :")
// "65" = 1 - elementi [0], 2-elementi [1]
if (num.length >= 2) {
    // console.log(num[0]) // '6'
    // console.log(num[1])// '5'
    // 7
    console.log(Number(num[0]) + Number(num[1])) // 11
    // 8
    let reversedNum = num[1] + num[0]
    console.log(reversedNum)

}