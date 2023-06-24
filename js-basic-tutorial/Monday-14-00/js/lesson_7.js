// function - nomlangan kod bo'lagi , uni dasturni istalgan joyida istalgan marta ishga tushirish mumkin

// function declaration 
// let myName = showFullName("Abdurahmon", "Rashidov")
// console.log(myName)

// function showFullName(name,surname){
//     return `${name} ${surname}`
// }

// let name = showFullName("John","Doe")
// console.log(name)

// // hoisting - qiymatlarni mavjud zonasi

// console.log(x) // Cannot access 'x' before initialization
// let x = 10;
// console.log(x) // 10

// function plus(a,b){
//     // return a + b;
//     if(a<b){
//         return a + b
//     }else{
//         return a - b
//     }
// }

// console.log(plus(7,5))// 2

// function plus(x,y){
//     return x+y;
// }
// function minus(x,y){
//     return x-y;
// }
// function multiple(x,y){
//     return x*y;
// }
// function division(x,y){
//     return x/y;
// }

// let plusTwoNumber = plus
// console.log(plusTwoNumber(2,2)) // 4
// console.log(plus(2,2)) // 4
// console.log(minus(2,2)) // 0
// console.log(multiple(2,2)) // 4
// console.log(division(2,2)) // 1

// let b;
// console.log(b)
// Positonal arguments and Not Positonal arguments

// function showResult(x,y='y is not defined'){
//     return x +" "+ y ;
// }

// console.log(showResult("John" , "Doe"))

// function pow(number1,number2){
//     return number1 ** number2
// }
// let four = pow(2,2) // 4
// console.log(8 - four) // 4

// global variables
// let x = 5;
// let y = 5; 

// function main(){
//     // local variables
//     let x = 10
//     console.log(x)
//     y = 2
// }
// x = 20
// main()
// console.log(x) // 20
// console.log(y) //2

// task 1
// function powerA3(num){
//     return num ** 3
// }

// let userNum = +prompt("Num") // 2
// console.log(powerA3(userNum)) // 8