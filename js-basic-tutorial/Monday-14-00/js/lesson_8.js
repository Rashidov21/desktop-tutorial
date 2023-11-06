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

function checkLastLetterInWord(text){
    res = []
    for(let item of text.split(" ")){
        // console.log(item)
        if(item.endsWith("a") || item.endsWith("e")||item.endsWith("u")||item.endsWith("i")||item.endsWith("o'")||item.endsWith("o")){
            item = item.toUpperCase()
        }
        res.push(item)
    }
    return res
}

console.log(checkLastLetterInWord("Salom qale ishlar ?").join(" ")) // Salom QALE ishlar ?

// task 2
// foydalanuvchidan matn qabul qiling va matnda berilgan har bir so'zlardagi belgilar sonidan iborat massiv hosil qiling
// input :"Ishlar yaxshimi ?"
// output: [6,14]