// str methods
// let single = 'single-quoted';
// let double = "double-quoted";

// // ES6 
// let backticks = `backticks`;

// console.log(single[3]) // g

// console.log("ali"[0] + "vali"[2]) // al 
// console.log(typeof single) // string 

// let num = 12
// example_text = "Javascript is better!"

// s = `Lorem ${num} ipsum dolor ${example_text}`
// console.log(s) // Lorem 12 ipsum dolor Javascript is better!


// let backticks = `backticks`;
// for (let i = 0; i < backticks.length; i++) {
//     console.log(backticks[i])
// }
// console.log(typeof backticks.length) // number
// console.log(backticks.length * 2) // 18


// console.log(backticks[0])
// console.log(backticks[1])
// console.log(backticks[2])
// console.log(backticks[3])
// console.log(backticks[4])
// console.log(backticks[5])
// console.log(backticks[6])


// let backticks = `\t\tbackticks`;
// let backticks = `qas\nbackticks`;
let backticks = `backticks`;
// console.log(backticks.toLowerCase())
// console.log(backticks.toUpperCase())
// console.log(backticks.indexOf("c")) // 2
// console.log(backticks.indexOf("z")) // -1
// console.log(backticks.includes("z")) // false
// console.log(backticks.includes("ks")) // true
console.log(backticks.endsWith("ks")) // true
console.log(backticks.startsWith("aaaa")) // false

// task 1
// function yozing , unga qator va belgi beriladi , function qator ichida belgi necha marta ishtirok
// etganini qaytarsin

function searchLettersCount(text, letter) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == letter) {
            count = count + 1
        }
    }
    return count
}

console.log(searchLettersCount("lorem ipsuM lorem", "m"))

// lorem ipsuml , l  >> 2


// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
