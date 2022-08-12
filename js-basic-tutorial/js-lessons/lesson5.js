// Arrays 
// let arr = new Array(1, true, "string", undefined, null, [1, 2, 3])
// let arr = [1, true, "string", undefined, null, [1, 2, 3], 50]
// // console.log(typeof arr) // object
// console.log(arr[0]) // birinchi element 
// console.log(arr[3]) // 4- element 
// console.log(arr[arr.length - 1]) // oxirgi element

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// Ro'yhat ko'rinishida ma'lumotlarni saqlash
// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] ** 2)
// }
// console.log(typeof arr) // object
// Obyekt - uni sifatlari va hatti harakatlari mavjud 
// sifatlari - atribut (qanday ? qanaqa ?)
// harakatlari - metod (nima qiladi ?)
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.length) // bu atribut | sifat
// arr.reverse() // method | harakat
// console.log(arr)

// let arr = [1, 2, 3]
// arr.push(4) // oxiriga element qo'shish
// arr.unshift(0) // boshiga element qo'shish
// console.log(arr) // [0, 1, 2, 3, 4]
// arr.pop() // oxiridan element o'chirish
// arr.shift() // boshidan element o'chirish
// console.log(arr) //[1, 2, 3]

// task 1
// 0 dan 10 gacha bo'lgan faqat juft sonlardan iborat massiv hosil qiling 
// [0, 2, 4, 6, 8]
// let arr = []
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         arr.push(i)
//     }
// }
// console.log(arr)[0, 2, 4, 6, 8]

// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(i++)
// }
// console.log(arr) //[0, 2, 4, 6, 8]

// task 2
// users degan bo'sh massiv hosil qiling uni 3 ta userdan username so'rab ular kiritgan
// username lar orqali to'ldiring va console ga chiqaring 
// let users = []
// for (let i = 0; i < 3; i++) {
//     // let user = prompt("username ?")
//     // users.push(user)
//     users.push(prompt("username ?"))
// }
// console.log(users)

// task 3
// user kiritgan so'zlardan faqat 'b' harflarini olib alohida massivga yozing
// let arr = []
// let b = prompt("write your text here ...")
// for (let i = 0; i < b.length; i++) {
//     if (b[i].toLowerCase() == "b") {
//         arr.push(b[i])
//     }
// }
// console.log(arr)

// task 4 
// 0 dan 100 gacha bo'lgan sonlar orasidan tasodify 10 tasini yangi massivga yozing 

// array 1 
// let n = 10;
// let arr = []
// for (let i = 0; i < n; i++) {
//     if (i % 2 == 1) {
//         arr.push(i)
//     }
// }
// console.log(arr)

// array 2 
// let n = 5;
// let arr = []
// for (let i = 1; i <= n; i++) {
//     arr.push(2 ** i)
// }
// console.log(arr)

// array 3
// let n = 10;
// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(n += 2)
// }
// console.log(arr)

// array 4 
// let n = 10;
// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(n += 2)
// }
// console.log(arr)



// let reversed_arr = []
// for (let end = arr.length - 1; end >= 0; end--) {
//     reversed_arr.push(arr[end])
// }
// console.log(reversed_arr)

// let arr = [1, 5, 4, 8, 9, 3, 22, 10]
// let end = arr[arr.length - 1]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == end - 1) {
//         console.log(arr[i])
//     } else {
//         console.log(0)
//     }
// }

// let arr = [1, 5, 4, 8, 9, 3, 22, 10, 2]
// let evens = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         evens.push(arr[i])
//     }
// }

// console.log(evens.sort((a, b) => { return b - a })[evens.length - 1]) // 2


// task 6
// uzunligi 10 ga teng random sonlardan iborat massiv hosil qiling va  birinchi , oxirgi elementlarini console ga chiqaring agar birinchi va oxirgi elementlari toq son bo'ls
// a u holda ularni o'chirib tashlang

// task 7
// Choyhonada 10 kishi uchun 1kg guruch , 0.75 kg go’sht,0.25kg dumba, 1kg sabzi dan iborat palov tayyorlanadi . Choyhona uchun necha kishi kelishiga qarab masalliqlarni va ular uchun harjatni hisoblaydigan dastur tuzing.
// 1 kg guruch = 25.000
// 0.75kg gosht = 50.000
// 0.25 dumba = 20.000
// 1kg sabzi = 5000 

// task 8 
// Listda  butun son berilgan bo'lsa, uning elementlari yig'indisini topadigan funksiya yozing.
// Masalan, agar arr = [1,2,3] massivi bo'lsa,  qaytish = 6




// task 9 
// 7 ta butun sondan iborat Listdan 6 ta sonni hisoblash orqali list sonlarini     
// umumiy   yigindisini minimal va maksimalini toping . 
// Masalan.  arr = [1,3,5,7,9] massivi uchun minimal yig’indi 1+3+5+7 = 16 maksimal 
// 3+5+7+9= 24
// Siz uchun berilgan massiv : arr = [8,2,4,5,7,9,6]

// task 10 
// Avtoparkda n ta mashina uchun turar joy bor mashinalar birin ketin avtoparkga kirishadi avtopark qoidasi shuku hech qachon bir xil rangdagi mashinalar yonma-yon turishlari mumkin emas . Siz mashinalarni turgan joylari boyicha tekshirib agar bir hil rangdagi mashinalar yonma-yon turgan bo'lsa unda ulardan birini boshqa joyga olib o'tishingiz kerak 
// input : n = mashina soni
// output : mashinalar har hil ranglari boyicha turgani
// Eslatma : Mashinalar rangi faqat 3 hil OQ, SARIQ , QIZIL

// 0 qizil
// 5 sariq
// -5 oq  
