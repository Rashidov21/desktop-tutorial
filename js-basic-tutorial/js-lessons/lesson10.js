// array methods 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.slice(startIndex, stopIndex) >> copy
// arr.splice(startIndex, deleteCount) >> cut
// let a = arr.splice(0, 3)
// console.log(arr.length)  // 7
// console.log(a)  // [1, 2, 3]

// let arrB = [11, 12, 13]

// arr.concat(arrB)
// console.log(arr.concat(arrB)) //[4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// let arr = [1, 2, 3, 4, 5,]
// arr.forEach(element => {
//     console.log(element ** 2)
// })


// let names = ['mike', 'john', 'sara']
// names.forEach(name => {
//     for (let letter of name) {
//         if (letter == 'r') {
//             console.log(name)
//         }
//     }
// })

// task 0
// ixtiyoriy butun sonlardan iborat massiv berilgan siz massiv ichida
//  agar 7 soni bolsa uni turgan joyidan ochirib yuboruvchi funksiya yozing
// input array: [1, 2, 7, 8, 9]
// output array : [1, 2, 8, 9]
// for (let num of arr) {

//     if (num == 7) {
//         let index = arr.indexOf(num)
//         arr.splice(index, 1)

//     }
//     // console.log(arr[index - 1])
//     // console.log(arr[index])
//     // console.log(arr[index + 1])
// }
// console.log(arr)


// task 1
// let arr = [1, 0, 5, 7, 15, 8, 20,]
// arr massividan 5 ga qoldiqsiz bolinadigan sonlarni olib tashlovchi kod yozing

// task 2 
// let users = ["hakimov", 'hakimova', 'suyunov', 'suyunova', 'qobulova']
// forEach orqali barcha "va" bilan tugagan familyalarni o'chirib tashlang

// task 3
// foydalanuvchidan so'z kiritishini sorang sozda har bir harfni tekshiring
// va nechta katta harf nechta kichik harf kirtganini chiqaring

// input : AssA 
// output : katta = 2 , kichik = 2

// task 4 
// foydalanuvchidan string qabul qiling va unda ishtirok etgan barcha mahsus belgilarni
// o'chiring 
// input text : a$d/l&*-jd
// output text : adljd

