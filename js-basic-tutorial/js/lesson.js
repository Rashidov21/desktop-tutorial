// let date = new Date()
// console.log(date.getFullYear()) // xozirgi yil | 2022 >> number
// console.log(date.getMonth()) // xozirgi oy | 5 >> number
// console.log(date.getDay()) // xozirgi hafta kuni (1, 7) | 6 >> number
// console.log(date.getDate()) // xozirgi kun | 25 >> number
// console.log(date.getHours()) // xozirgi soat
// console.log(date.getMinutes()) // xozirgi minut
// console.log(date.getSeconds()) // xozirgi sekund
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

function timer() {
    var minute = document.getElementById("time").value;
    var sec = 59;
    setInterval(function () {
        document.getElementById("timer")
            .innerHTML = parseInt(minute) + ":" + sec;
        sec--;
        if (sec == 00) {
            minute--;
            sec = 59;
            if (minute == 0) {
                alert("End timer !");
            }
        }
    }, 1000);
}