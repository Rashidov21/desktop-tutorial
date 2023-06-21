// while loop
// let i = 0;
// while(i < 10){
//     i++ // +1
//     console.log(i)
// }

// do{
//     i++
//     console.log(i)
// }
// while(i < 10)

// for(let i = 0; i < 10;i++){
//     if(i % 2 == 0){
//         continue // keyingi tsiklga otish
//     }
//     console.log(i)
//     if(i == 7){
//         break // tsiklni toxtatish
//     }
// }
// let n = +prompt()
// for(let i = 0; i < 100; i++){
//     if(n == 3 ** 2){
//         console.log("3 ni darajasi ")
//     }else{
//         console.log("3 ni darajasi emas")

//     }
// }
let a, b, c;
a = -5;
b = 8;
c = 12;

// console.log(Math.max(a,b,c)) // 12
// console.log(Math.min(a,b,c)) // -5
// let i = Math.min(a,b,c)
// let count = 0
// for(i; i < Math.max(a,b,c); i++){
//     if(i>0){
//         count++
//     }
// }
// console.log(count)

let count = 0;
if (a > 0) {
  count++;
}
if (b > 0) {
  count++;
}
if (c > 0) {
  count++;
}
console.log(count)
