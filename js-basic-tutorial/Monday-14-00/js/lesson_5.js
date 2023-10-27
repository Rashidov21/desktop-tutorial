// For Loop 
// for , while 
// for - sanoqli takrorlanish
// while - cheksiz takrorlanish

// console.log(1)
// console.log(2)
// console.log(3)
// ... 
// for(condition){action}

// for(shart,holat){harakat} 

// for(sanoq boshi ; boolean ifoda; tsikldagi harakat){}

// for(let i = 0; i < 10; i++){
//     // console.log(i) // 0
//     // console.log(i) // 1
//     // console.log(i) // 2
//     // console.log(i) // ...
//     console.log("Hello world")
// }

// for(let k =0; k<3;k++){
//     let num = +prompt() // 1,2,3
//     console.log(num * 2) // 
// }
// i , k , x , j 

let users = ["john",'kim','mike']
for(let user = 0; user < users.length; user++){
    console.log(users[user])
}
// task 1
let k = 5;
let n = 3;

if(n>0){
    for(let i = 0; i < n; i++){
        console.log(k)
    }
}else{
    console.log("n 0 dan kichik.")
}

// task 2
let a = +prompt('a')
let b = +prompt('b')
if(a<b){
    let count = 0
    for(b;a<=b;b--){
        console.log(b)
        count++
    }
    console.log(count)
}