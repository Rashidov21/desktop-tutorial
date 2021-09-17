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
let res = [];
for(let i = 0; i < 20;i++){
    if(i % 2 !== 0){
        res.push(i)
    }
}
console.log(res)
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