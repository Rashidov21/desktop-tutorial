const peoples = [
    {
        name:"john",
        age:12
    },
    {
        name:"mike",
        age:15
    },
    {
        name:"david",
        age:10
    } , 
    {
        name:"bruce",
        age:18
    } 
]
let sortedList = []
peoples.sort(function(x,y){
    if(x.age > y.age){
        sortedList.push(x)
    }else{
        // sortedList.shift(y.age)
    }
})
console.log(sortedList)
// for(let k = 0 ; k < peoples.length; k++){
//     console.log(peoples[k]);
// }
// let sortedUsers = peoples.sort((a)=>{
//     return a.age

//   if(a.age > b.age){
//     return a
//   }
// })
// console.log(sortedUsers)