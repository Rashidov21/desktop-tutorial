// let arr = [] // 
// let a = new Array() //
// // feOffeeb = 10


// let arr = [1,2,3,4,5]
// console.log(arr[4]) // 5
// console.log(arr[5]) // undefined

// console.log(arr[0]) // 1 - birinchi elementni olish 
// console.log(arr[arr.length - 1]) // 5 - oxirgi elementni olish


// method - usul , funktsiya
// let arr = [1,2,3,4,5]
// arr.push(6) // oxiriga element qoshish
// arr.pop() // oxiridan element ochirish

// arr.shift(1) // boshidan element ochirish 
// arr.unshift(0) // boshidan element qoshish
// console.log(arr);// [ 0, 2, 3, 4, 5 ]


// let arr = [1,2,3,4,5]
// splice - korsatilgan indexdan korsatilgan son miqdorida elementlarni ochirish 
// arr.splice(2,2)
// console.log(arr); // [ 1, 2, 5 ]

// slice - korsatilgan indexdan korsatilgan indexgacha elementlarni nusxasini olish
// let arrCopy = arr.slice(5,21)
// console.log(arrCopy) //  []
// console.log(arr.slice(2,4))//[ 3, 4 ]
// console.log(arr) // [ 1, 2, 3, 4, 5 ]

// let a = [1,2,3]
// let b = [4,5,6]
// console.log(a.concat(b)); //[ 1, 2, 3, 4, 5, 6 ]


// let arr = [1,2,3,4,5]
// arr.forEach(item =>{
//     console.log(`${item} , ${item * 2}`)
//     // console.log(item + 1)
// })
// function checkString(word){
//     if(word.includes('on')){
//         console.log("OK");
//     }
// }
// let gap = ["Pyhton","Java", "C","Ruby on rails",""]
// gap.forEach(item => checkString(item))

// gap.forEach((value,index,arr) =>{
//     console.log(value)
//     console.log(index)
//     console.log(arr)
//     arr.forEach()
// })


// task 1 
// Math random orqali  0 dan 100 gacha bolgan tasodify sonlardan iborat 20 ta elementlik massiv tuzing
// forEach orqali masivdagi barcha sonlarni 2 ga bo'lib natijani ekranga chiqaring


// task 2 
// user ismini kiritganda ismida necha marta a harfi ishtirok etganini topuvcho dastur tizing

// let count = 0;
// let name = "Abdullajon"
// for(let i = 0; i < name.lentgh;i++){
//     if(name[i].toLowerCase() == "a"){
//         count++
//     }
// }
// console.log(count) // 2

// task 3
// n soni berilgan (30 > n > 0) 0 dan n gacha bo'lgan sonlarni orasida probellar bilan chiqaring
// agar son toq bo'lsa bitta probel bilan uni keyingi son orasini belgilaysiz agar juft bo'lsa 2 ta probel bilan. misol : 1 2  3 4  5

// let n = 13;
// let result = "";
// if(30 > n > 0){
//     for(let i = 0; i < n;i++){
//         if(i % 2 == 0){
//             result = result + `${i}  `
//         }else{
//             result = result + `${i} `
            
//         }
//     }
// }
// console.log(result)

// task 1 
// foydalanuvchi kiritgan 2 ta son orasida tasodifiy 5 ta sonlardan iborat string hosil qiling
let a = 2;
let b = 53;
let arr = [];
let numberString = '';
for(a; a<b;a++){
    arr.push(a)
}
for(let i = 0; i < 5; i++){
    let randomIndex = Math.round(Math.random() * arr.length);
    let num = arr[randomIndex]
    numberString = numberString + num
}

console.log(numberString) //