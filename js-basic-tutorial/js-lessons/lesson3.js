// for and while , do while loops 

// while , for 

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(10)

// for (let i = 1; i <= 10; i++) 
// {
//     console.log(i)
// }

// let x = 0
// console.log(x++) // 1  increment ( 1 qo'shish)
// console.log(x--) // 0 decrement ( 1 ayirish)

// for(sanoq bo'shi; shart; qadam){
//     takrorlanishi kerak bo'lgan kod
// }
// for (let i = 7; i > 0; i--) {
//     console.log(i) // 7 marta ishga tushadi
// }
// let summa = 0;
// for (let i = 0; i < 3; i++) {
//     let n = +prompt("sonni kiriting")
//     if (n > 0) {
//         summa += n
//         // summa = summa + n
//     }
// }
// console.log(summa)

// i , k ,j 
// iteration - takrorlanish
// let counter = 0;
// for (let k = 0; k < 56; k++) {
//     if (k % 5 == 0) {
//         counter += 1
//     }
// }
// console.log(counter)

// for , while + do while 
// let i = 0
// while (i < 3) {
//     i++
//     console.log(i)
// }
// while (true) {
//     console.log("WHILE")
//     break // siklni toxtatish
// }
// let i = 0;
// do {
//     i++
//     console.log(i)
// } while (false)

// let x = 10;
// while (x > 0) {
//     x--
//     if (x == 7 || x == 5) {
//         continue //keyingi takrorlanishga o'tish
//     }
//     console.log(x) // 
//     if (x == 3) {
//         break // takrorlanishdan chiqish
//     }

// }

// task 1
// let k = 5
// let n = 7
// for (let i = 0; i < n; i++) {
//     console.log(k)
// }
// task 2
// let a = 4
// let b = 9
// console.log(b - a)
// for (let i = a; a <= b; a++) {
//     console.log(a)
// }

// let a = 7;
// let b = 24;
// for (a; a <= b; a++) {
//     console.log(a)
// }

// let a = 7;
// let b = 24;
// for (a; a <= b; a++) {
//     if (a % 2 == 0) {
//         console.log(a)
//     }
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(i++)
// }

// task 1 
// 1 dan 99 gacha sanaydigan for hosil qiling , faqat 5,25,55,75 sonlarini chiqaring
// for (let i = 0; i < 99; i++) {
//     if (i == 5 || i == 25 || i == 75) {
//         console.log(i)
//     }
// }
// task 2
// 5 qavatli uyda 20 ta kvartira bor . foydalanuvchi kvartira raqamini kiritsa siz uni qaysi etajda ekanini chiqarishingiz kerak , kvartira raqamlari birinchi etajdan boshlanadi 

// task 3
// 9 qavatli uyda  3 ta podyezd  bor har bir etajda 6 tadan kvartira bor .foydalanuvchi kvartira raqamini kiritsa siz uni qaysi qavatda ekanini va qaysi podyezdda ekanini chiqarishingiz kerak  

// task 4
// bankga omonat qoymoqchi bolgan odam bank taklifini eshitib chalgib qoldi  bank taklifi : agar siz bizga  1000 som omonat qoysangiz biz uni har oyda 2.5% ga oshirmaiz va 3 yil davomida har 12-oyda 3% ga oshiramiz. 3 yildan to 5 yilgacha 3.5% ga oshirib 5 yildan ko'proq muddatga omonat qo'ysangiz 4% dan oshiriladi omonatni summasini va qo'ymoqchi bo'lgan oylar sonini kiritilsa hisoblab beruvchi dastur tuzing

// task 5
// n soni  berilgan  (30 > n > 0) agar n toq son bolsa undan keyin bitta probel agar juft bo'lsa undan keyin uchta probel bilan 0 dan n gacha bo'lgan sonlarni barchasini bitta qatorda chiqaring :0   1 2   3 4   5 6   ;
// s = ""
// s += `${n} `
// s += `${n}   `
// let n = +prompt()
// let result = ""
// if (30 > n && n > 0) {
//     for (let i = 0; n >= i; i++) {
//         if (i % 2 == 0) {
//             result += `${i}   `
//         } else {
//             result += `${i} `
//         }
//     }
// } 
// console.log(result) // 0   1 2   3 4   5 6 
// task 6
// uch xonali son berilgan siz aniqlashingiz kerak: 
// son teskari o'qilganda nechchi bo'ladi va 2-sonini o'rniga  nuqta qoyilganda nechi bo'ladi : 556 >> 655 , 5.6


// task 4
// bankga omonat qoymoqchi bolgan odam bank taklifini eshitib chalgib qoldi  bank taklifi : agar siz bizga  1000 som omonat qoysangiz biz uni har oyda 2.5% ga oshirmaiz va 3 yil davomida har 12-oyda 3% ga oshiramiz. 3 yildan to 5 yilgacha 3.5% ga oshirib 5 yildan ko'proq muddatga omonat qo'ysangiz 4% dan oshiriladi omonatni summasini va qo'ymoqchi bo'lgan oylar sonini kiritilsa hisoblab beruvchi dastur tuzing