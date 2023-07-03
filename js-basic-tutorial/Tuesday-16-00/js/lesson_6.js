// function - harakat , nom berilgan kod bo'lagi

// function declaration | funktsoyani elon qilish
// function main(){
//     let x = 10;
//     return x**2;
// }
// let result = main()

// console.log(result) // 100

// function showFullName(name,surname){
//     return name + " " + surname
// }

// console.log(showFullName("John","Doe"))
// console.log(plus(4,4))
// arrow function , function expression , callback function

// function plus(x,y){
//     return x + y;
// }
// console.log(plus(2,2))

// function main(param1,param2){
    //     console.log(param1)
    //     console.log(param2)
    // }
    // // console.log(param1) // error
    // main(1)
    
    // task 1  qoshish , ayirish , bolish va kopaytirish uchun alohida alohida 
    // 4 ta function yozing 
// console.log(plus(1,2))  // 3 
// function plus(x,y){
//     return x + y;
// }
// // for(let i = 0; i < 10; i++){
// //     console.log(plus(i,2)) 
// // }
// // hoisting 
// // console.log(n) // error
// let n = 2;
// console.log(n) //2

// function expression - ifoda funktsiya
let textLen = function(text){
    return text.length;
}
// arrow function - strelka funktsiya
let wordLen = (text) => {return text.split(' ').length}

console.log(textLen("Javascript"))
console.log(wordLen("Javascript is better pl!"))


