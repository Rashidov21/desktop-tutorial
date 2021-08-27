

let msg = document.getElementById("msg");
let number = document.getElementById("number");

function SendMessage(){
    number = number.value;
    msg = msg.value;
    console.log(number,msg)
    let url = `https://semysms.net/api/3/sms.php?token=11b5e8fea2df7b0466749418885489f3&device=287993&phone=${number}&msg=${msg}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}