// function expression 


// console.log(p(4,4)) // 

// let p = function(x,y){
//     return x + y 
// }

// console.log(p(2,2)) // 4

// arrow function 

// let data = d => console.log(d)

// console.log(data(10)) 

// let plus = (a,b) => {return a + b}

// console.log(plus(2,2))

// callback function

// function yes(){
//     console.log("Yes, OK.")
// }

// function no(){
//     console.log("No, Wrong.")
// }
// // // callback function
// function askMe(question,func1,func2){
//     if(question){
//         return func1()
//     }else{
//         return func2()
//     }
// }

// askMe(confirm("Yes or No ?"), yes,no)

// task 1 
// foydalanuvchidan matn qabul qiling va har bir matndagi so'zni tekshiring agar so'z unli harf bilan tugagan bo'lsa u sozni uppercase stiliga o'tkazin aks holda so'zni lowercase stiliga o'tkazing
// input : "Salom qale ishlar ?"
// output: "salom QALE ishlar ?"

// console.log("text".endsWith("t")) // true
// console.log("text".endsWith("o")) // false

// function checkLastLetterInWord(text){
//     res = []
//     for(let item of text.split(" ")){
//         // console.log(item)
//         if(item.endsWith("a") || item.endsWith("e")||item.endsWith("u")||item.endsWith("i")||item.endsWith("o'")||item.endsWith("o")){
//             item = item.toUpperCase()
//         }
//         res.push(item)
//     }
//     return res
// }

// console.log(checkLastLetterInWord("Salom qale ishlar ?").join(" ")) // Salom QALE ishlar ?

// task 2
// foydalanuvchidan matn qabul qiling va matnda berilgan har bir so'zlardagi belgilar sonidan iborat massiv hosil qiling
// input :"Ishlar yaxshimi ?"
// output: [6,14]

// let userInput = "Vazifa qila olmadim !";

// function getCountOfLetters(text){
//     let result = [];
//     // console.log(text.split(" "))
//     for(let word of text.split(" ")){
//         if(word.length > 1){
//             result.push(word.length)
//         }
//     }
//     return result
// }

// console.log(getCountOfLetters(userInput)) //[ 6, 4, 7 ]

// task 3
// foydalanuvchidan ikita son qabul qiling va shu sonlar orasidagi barcha 5 ga qoldiqsiz bo'linadiganlarini console ga chiqaring 
// input : 2 , 15
// output: 5 , 10 , 15
// let a = 2;
// let b = 30;

// for(a; a <= b; a++){
//     if(a % 5 == 0){
//         console.log(a)
//     }
// }

// task 4
// foydalanuvchidan matn qabul qiling va undagi barcha maxsus belgilarni o'chirib tashlab console ga chiqaring
// maxsus belgilar: !@#$%^&*()_?/\,'<>{}[]"
// input: "Javasc_ript juda# zo'r til!"
// output: "Javascript juda zor til"