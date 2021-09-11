let d = new Date();
console.log(d.toLocaleString())
let balance = 0;
let inputValue = document.getElementById("inputValue");
let divBalance = document.getElementById('balance');

function Add(){
    console.log(inputValue.value)
    balance += Number(inputValue.value);
    divBalance.innerText = `$ ${balance}`
}
function Remove(){
    console.log(typeof inputValue)
    balance -= inputValue.value;
    divBalance.innerText = `$ ${balance}`
}
