// Object 

// attr - sifat 
// methot - usul , harakat , funksiya

// let obj = new Object();
// let obj = {}

// let obj = {
//     // obyekt sifatlari 
//     name:"John",
//     surname:"Doe",
//     age:23,
//     // obyekt methodlari
//     talk:function(){
//         console.log("Hello !", "My name is", this.name + ' ' + this.surname)
//     }
// }
// console.log(obj.name); //John
// console.log(obj["surname"]); // Doe
// console.log(obj.age); // 23
// obj.talk() // Hello ! My name is John Doe
// console.log(obj.date); // undefined

// ochirish
// delete obj.age
// console.log(obj.age); //undefined
// // yozish
// obj["date"] = "23-10-2005"
// console.log(obj.date); //23-10-2005

// // takrorlanish 
// console.log("name" in obj) // true
// console.log("price" in obj) // false

// for(let key in obj){
//     console.log(obj[key])
// }

// murakkab malumot tuzilmasi 
let arrObj = [
    {
        data:[[1,2,3],[4,5,6],[7,8,9]],
    },
    {
        data:[[1,2,3],[4,5,6],[7,8,9]],
    },
    {
        data:[[1,2,3],[4,5,6],[7,8,9]],
    },
]
// ushbu arrObj da berilgan object va massiv ichidagi barcha sonlar yigindisini topadigan dastur tuzing