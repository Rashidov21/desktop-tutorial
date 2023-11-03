// function - nomlangan kod bo'lagi , uni dasturni istalgan joyida istalgan marta ishga tushirish mumkin

// Javascript functions :
    // function declaration - e'lon qilingan funksiyalar
    // arrow function - strelka funksiyalari
    // anonim function - nomsiz funksiyalar
    // callback function - qayta javob berish funksiyalari 

// function declaration 
// for(){}
// if(){}

// function twoNumberPlus(x,y){
//     return x + y
// }

// let result = twoNumberPlus(2,2)
// console.log(result) // 4

// let action = "*";
// let a = 2;
// let b = 4;

// function plus(x,y){return x + y}
// function minus(x,y){return x - y}
// function division(x,y){return x / y}
// function multiple(x,y){return x * y}

// if(action == "+"){
//     console.log(plus(a,b))
// }else if(action == "-"){
//     console.log(minus(a,b))
// }else if(action == "/"){
//     console.log(division(a,b))
// }else{
//     console.log(multiple(a,b))
// }
// // 0 dan 10 gacha bolgan sonlar uchun 2 ni qoshib barchasini yigindisini hisoblash
// let summa = 0;
// for(let i = 0; i < 10; i++){
//     summa = summa + plus(2,i)
// }
// console.log(summa) //65

// task 1
// foydalanuvchidan matn qabul qilng va matnda ishtirok etgan barcha sonlar yigindisini 
// qaytaruvchi funksiya tuzing
// input: "Salom bugun havo 10 gradus, noyabr 4 kuni."
// output: 14

let t = "Salom bugun havo 10 gradus, noyabr 4 kuni. 2 3 5"
function getSumOfNumbersInText(text){
    let summa = 0
    // console.log(text.split(" "))
    for(let i = 0; i < text.split(" ").length; i++){
        if(parseInt(text.split(" ")[i])){
            summa = summa + parseInt(text.split(" ")[i])
        }
    }
    // function body
    return summa 
}
console.log(getSumOfNumbersInText(t))


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