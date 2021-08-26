// Boolean() >> true , false : 1 , 0
// console.log(10 > 5) // katta
// x = 10 < 5
// // console.log(typeof x)
// console.log(10 < 5) // KICHIK
// console.log(5 >= 5) //true >> katta yoki teng
// console.log(5 <= 5) //true >> kichik yoki teng
// console.log(10 <= 5) //false >> kichik yoki teng
// console.log(5 == 5) // teng true
// console.log(5 != 5) //teng emas false >> ! agar true false qiladi yoki aksiga
// x = true;
// console.log(!x)
// console.log(Boolean(0)) // har qanaqangi son bu true , 0 esa false
// console.log(Boolean("")) // har qanaqangi qator string true agar bosh bosa false
// console.log(Boolean(null)) // :false: har qanaqangi qator string true agar bosh bosa false
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(1))
// console.log(Boolean(0))
// console.log(true - 1)
// console.log(false + 1)
// console.log("ананас" > "яблоко")
// console.log("A" < "a") //true
// console.log("a" < "A") //false
// console.log('A' === 'А') // qatiiy tenglash

// && >> and , va , || >> or , yoki
// let value = 0 || null || 2 || 10 // eng birinchi true qiymatni oladi
// value = 5 && 20 && 10 // eng birinchi false qiymatni oladi
// console.log(value)

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
let  count = 0;
if (year == 2015 || year == 2009) {
    count += 1;
    let age = prompt("Yoshiz")
    if(age > 18){
        count += 1;
        console.log("Siz JS ni oranishiz mumkin")
    }
    else{
        console.log("Siz JS ni oranishiz mumkin EMAS.")
    }
}
else if (year == 2006){
    alert("Bu Ecma script 4 chiqgan yil")
}
else{
    alert("False")
}
console.log(count)