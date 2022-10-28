// Function
// 1-declaration
// arrow , anonim , callback
// let n1 = +prompt()
// let n2 = +prompt()
// console.log(n1 + n2)


// function plus(number1, number2) {
//     return number1 + number2
// }
// console.log(plus(2, 2))//4
// function funksiya nomi (qabul qilinuvchi qiymatlar) {
//     qiymatlar ustida amallar
//     return natijani qaytarish
// }

// function nomi (qiymatlar){funksiya tanasi}

// console.log(plus(4, 4)) // 8


// function powerA3(a, b, c) {
//     return `${a ** 3}\n${b ** 3}\n${c ** 3}`
// }
// console.log(powerA3(2, 3, 4))

// arrow function

let func = (arg) => { return arg * 2 }
console.log(func(2)) // 4

// anonim function
window.onload = function () {
    console.log("window load")
}

// Callback function

function yes() {
    console.log("Yes")
}
function no() {
    console.log("No")
}
function ask(question, func1, func2) {
    if (question) {
        return func1()
    } else {
        return func2()
    }
}
ask(confirm("Yes or No ?"), yes, no)
