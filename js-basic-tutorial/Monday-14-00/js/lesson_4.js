// Logika 
// and , or , not 
// && - va 
// || - yoki 
// ! - emas 

// console.log(!true) // false

// && - mantiqiy VA , birinchi false ni oladi 
// console.log(1 && "t" && false && true) // false
// console.log(1 > 0 && 10 < 20) // true
// console.log(1 > 0 && 10 > 20) // false
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

// let num = +prompt("Num ?")
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

// task 15
// let a ,b ,c;
// a = +prompt("A")
// b = +prompt("B")
// c = +prompt("C")
// if(a == b -1 && b == a+1 && c == b + 1 ){

// }
// if(a==b && b == c && a == c){

// }


// if(a>0||b>0||c>0){
//     let count = 0;
//     let aState = a > 0; 
//     let bState = b > 0; 
//     let cState = c > 0;
//      if(aState){
//         count = count + 1
//         }
//     if(bState){
//          count = count + 1
//      }
//     if(cState){
//         count = count + 1
//      }
//     if(count == 2){
//          alert(true)        
//      }else{
//         alert(false)
//      }
//      console.log(count)
// }else{
//     alert(false)
// }
// task 16 
// let num = +prompt("2 xonali son")
// if(num > 9 && num <= 99 && num % 2 == 0){
//     alert(true)
// }else{
//     alert(false)
// }