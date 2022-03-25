// sessionStorage
// localStorage
// localStorage.setItem("apple", "semeranka ")
// console.log(localStorage.getItem("apple"))
// localStorage.removeItem("apple")
// localStorage.clear()
// sessionStorage.setItem("phone", "samsung")
// console.log(sessionStorage.getItem("phone"))
// sessionStorage.removeItem("phone")
// sessionStorage.clear()
let data = JSON.stringify({
    avatar: "./src/indus2.png",
    name: "Raj Kumar",
    address: "New Dehli Panjabi 44",
    job: "php developer",
    stars: 5,
    email: "gandi123@mail.com",
    phone: "+6695965332",
    brthday: "02/03/1820",
    skills: ["PHP", "FrontEnd", "MySQL", "Db", "API"]
})
localStorage.setItem("user", data)


$(document).ready(() => {
    $(".modal").hide();
    let user = JSON.parse(localStorage.getItem("user"))
    $("#avatar")[0].src = user.avatar;
    $("#name")[0].innerHTML = user.name;
    $("#name2")[0].innerHTML = user.name;
    $("#address")[0].innerHTML = user.address;
    $("#job")[0].innerHTML = user.job;
    $("#stars")[0].innerHTML = user.stars;
    $("#email")[0].innerHTML = user.email;
    $("#phone")[0].innerHTML = user.phone;
    $("#brth")[0].innerHTML = user.brthday;
    for (let i = 0; i < user.skills.length; i++) {
        $(".skills").append(`<div class="tag">${user.skills[i]}</div>`)
    }


})
$("#edit").click(function() {
    $(".modal").slideToggle()
})
$(".close").click(function() {
    $(".modal").slideToggle()
})