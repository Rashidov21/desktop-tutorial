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
// matn >> m = 0,a = 1 , t = 2, n = 3
// task 6 , 7
// let num = prompt("Son :") // 65
// // "65" = 1 - elementi [0], 2-elementi [1]
// if (num.length >= 2) {
//     // console.log(num[0]) // '6'
//     // console.log(num[1])// '5'
//     // 7
//     console.log(Number(num[0]) + Number(num[1])) // 11
//     // 8
//     let reversedNum = num[1] + num[0]
//     console.log(reversedNum)
// }
// task 13
// let n = prompt() // 745 >> 457
// console.log(n[1] + n[2] + n[0]) // 457

// task 19 
// let n = +prompt("Sekundlar :")
// console.log(n / 60)



// if task 1 
// let n = +prompt()
// if (n > 0) {
//     n = n + 1
//     console.log(n)
// } else {
//     console.log(n)
// }

// let x = -1
// let y = 2
// let z = 0
// let counter = 0
// if (x >= 0) {
//     counter = counter + 1
// }
// if (y >= 0) {
//     counter = counter + 1
// }
// if (z >= 0) {
//     counter = counter + 1
// }
// console.log(counter)
// let n = 23
// if (n >= 50) {
//     console.log(n ** 2)
// } else {
//     console.log(n ** 3)
// }

// let n = 23
// if (n > 10) {
//     console.log(Number(`-${n}`))
// } else {
//     console.log(n)
// }
// let a = 56
// let b = 102
// let c = 99
// if (a < b && b < c) {
//     console.log("O'sish tartibida ")
// } else {
//     console.log("Xatolik")
// }
// let n = +prompt()
// let t = n
// let o = t * 2
// let b = o / 3

// if (b <= 3) {
//     console.log("Botir hafa")
// } else {
//     console.log("Botir OK")
// }
// let n = +prompt()
// if (n % 2 == 0) {
//     alert("Juft")
// } else {
//     alert("toq")
// }


// let m = +prompt()
// let ft = +prompt()
// let ft_m = ft * 0.3048
// console.log(ft_m)
// if (m > ft_m) {
//     alert("metr katta")
// } else {
//     alert("fut katta")
// }
// let c = +prompt()
// let f = c * 1.8000 + 32
// console.log(f)

// task 
// input : User son kiritadi agar son 1 ga teng bolsa "Windows" so'zi chiqadi 
// agar 2 bolsa "linux" agar 3 bolsa  "MacOs" lekin boshqa  son kiritgan bo'lsa 
// "bunday tizim yo'q" chiqadi 
// output : 1 , "windows" 

// task 
// input : sinfdagi o'quvchilar soni va ularning yoshlari kiritiladi 
// output: sinfdagi o'quvchilarning o'rtacha yosh darajasini chiqaring 

// task 
// input: qoldiqli son qabul qilinadi va qoldigini butuniga qo'shiladi
// output: 3.2 >> 3 + 2 = 5

// let n = prompt() // 3.2
// console.log(Number(n[0]) + 1) // 4
// console.log(n[1]) // .
// console.log(n[2])// 2

// task 
// input : foydalanuvchidan yosh sorang  agar  yoshi 10 bilan 18 ni orasida bolsa "ruxsat yo'q"
// chiqadi agar 18 bilan 25 ni orasida bolsa "ruxsat bor" chiqadi agar 25 bilan 50 ni orasida 
// bolsa "Boshqa safar" chiqadi 50 dan katta bolsa "Yoshingiz katta" chiqsin

// task 
// input: ikki xonalik son qabul qiling va o'ng tomondagi son kattami yoki chap tomondagi aniqlang
// output: 32 >> o'ng tomondagi katta 68 >> chap tomondagi katta
// let n = String(32)
// console.log(n[0]) // 3
// console.log(n[1]) // 2
// console.log(Number(n[0]) > Number(n[1])) // true
// let n = +prompt()
// if (n > 10 && n <= 99) {
//     n = String(n)
//     let r = Number(n[0])
//     let l = Number(n[1])
//     if (r < l) {
//         console.log("Chap katta")
//     } else {
//         console.log("O'ng katta")
//     }
// }

// task 
// input: ikki xonalik son berilgan siz son palindrom ekanini topuvchi dastur tuzing
// output: 22 >> palindrom 23 >> palindrom emas 