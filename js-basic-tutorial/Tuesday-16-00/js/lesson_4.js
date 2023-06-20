// Loops 
// for - sanoqli takrorlanish 
// while - cheksiz takrornlanish

// console.log(1)
// console.log(2)
// console.log(3)
// ... 

// for(sanoq boshi; ifoda;sanoqdagi harakat){takroranish}
// for(let i = 0; i < 10;i++){
//     console.log(i)
// }
// for(let k = 10; k > 0;k--){
//     console.log(k)
// }
// i (iteration) , k , j ,x 

// for(let j = 0; j <= 100; j++){
//     if(j % 2 == 0){
//         continue // takrorlanishni tashlab keyingisiga o'tish
//     }else if(j > 50){
//         break // tsiklni to'xtatish
//     }else{
//         console.log(j)
//     }
// }
// console.log("for tugadi")

// task 1
// let k = 5
// let n = 3
// for(let i = 0; i < n; i++){
//     console.log(k)
// }

// task 2
// let a = 5
// let b = 15
// let count = 0
// for(a; a <= b; a++){
//     console.log(a)
//     count++
// }
// console.log(count)
// task 4
let price = 5000
let n = price / 10
for(let i =1; i<=10;i++){
    console.log(`${i*100}gram = ${i * n}som`)
}