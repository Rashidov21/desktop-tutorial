// Logika 
// and , or , not 
// && - va 
// || - yoki 
// ! - emas 

// console.log(14!true) // false

// && - mantiqiy VA , birinchi false ni oladi 
// console.log(1 && "t" && false && true) // false
// console.log(1 > 0 && 10 < 20) // true
// console.log(1 > 0 && 10 > 20) // false
// let x = 15;
// console.log(x > (5 * 3) + 2 / 2 && true == (x * 2) / 3 > 7 || 1 > 0) // 
// let x = 10.5
// console.log(x > (3.5 * 2) + 2 / 2.5 || true == (x * 2.5) / 2 > 9 && 1 > x == 7.5) // true

// console.log(true = 56) // error
// console.log(true == 56) // false
// || - mantiqiy YOKI , birinchi true ni oladi 
// console.log(0 || 1) // 1
// console.log(1 > 0 || 0 > 1) // true
// console.log("" || 0 ) // 0

// console.log(10 > "100" && 1 > 0 || false > !true && 0 == null) //false
// let x = (7 % 2) * -1;
// // console.log(x)
// let z = !x
// console.log(x >= -1 && z > "-1") //true

// if(){}
// else if(){}
// else{}

// if - agar
// else if - aks holda yoki 
// else - aks holda

// if(shartlar){harakat}
// else if(shart){harakat }
// else{harakat}

// let weight = +prompt("Bagaj ogirligi ?")

// if(weight > 40){
//     alert("Vazn ogir")
// }else if(weight == 25){
//     alert("Sizga bonus bor!")
// }else if(weight == 35)
//     alert("Sizga 2x bonus bor!")
// else{
//     alert('Vazn maqul')
// }

// if(weight > 40){
//     alert("Vazn ogir")
// }else if(weight >= 25 && weight <= 35){
//     alert("Sizga bonus bor!")
// }else{
//     alert('Vazn maqul')
// }

// task 1 
// foydalanuvchidan son qabul qiling va son agar toq bolsa "Toq son" agar juft bolsa "Juft son" deb console ga chiqaring






let num = +prompt("Num ?")

if(num % 2 == 0){
    console.log(++num)
}else{
    console.log(num)
}

// if(num > 0){
//     if(num % 2 == 0){
//         console.log("Musbat Juft")
//     }else{
//         console.log("Musbat Toq")
//     }
// }else{
//     if(num % 2 == 0){
//         console.log("Manfiy Juft")
//     }else{
//         console.log("Manfiy Toq")
//     }
// }


