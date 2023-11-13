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


let arr = [1,2,3,4,5]
arr.forEach(item =>{
    console.log(`${item} , ${item * 2}`)
    // console.log(item + 1)
})
function checkString(word){
    if(word.includes('on')){
        console.log("OK");
    }
}
let gap = ["Pyhton","Java", "C","Ruby on rails",""]
gap.forEach(item => checkString(item))

gap.forEach((value,index,arr) =>{
    console.log(value)
    console.log(index)
    console.log(arr)
    arr.forEach()
})
// task 1 
// Math random orqali  0 dan 100 gacha bolgan tasodify sonlardan iborat 20 ta elementlik massiv tuzing
// forEach orqali masivdagi barcha sonlarni 2 ga bo'lib natijani ekranga chiqaring