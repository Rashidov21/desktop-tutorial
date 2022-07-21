// console.log($('body'))

// document.querySelector("a")
// let box = $('.box')
// console.dir(box[0].className)

// $(".box").click((event) => {
//     console.log(event.target)
// });

$("#reset").click(function () {
    for (let el of $("form")[0].elements) {
        el.value = ''
    }
})

// let form = document.forms[0]
// // console.log(form.elements)
// let resetButton = document.querySelector("#reset")
// resetButton.addEventListener("click", function () {
//     for (let el of form.elements) {
//         el.value = ''
//     }
// });

$(".box").mouseenter(function () {
    $(".box")[0].style.width = `350px`
})

$(".box").dblclick(function () {

    // $(".box")[0].style.width = `250px`
    $(".box").hide() // display none 
})
$(".showBox").click(function () {
    // $(".box").show() // display block
    $(".item-1").fadeIn();
    $(".item-2").fadeIn("slow");
})
$(".hideBox").click(function () {
    // $(".box").show() // display block
    $(".item-1").fadeOut(1000);
    $(".item-2").fadeOut(1200);
})
$(".toggleBox").click(function () {
    // $(".box").show() // display block
    $(".item-1").fadeToggle(1000);
    $(".item-2").fadeToggle(1200);
})
$(".slideBox").click(function () {
    // $(".box").show() // display block
    // $(".box").slideDown("slow");
    // $(".box").slideUp("slow");
    $(".box").slideToggle("slow");

})