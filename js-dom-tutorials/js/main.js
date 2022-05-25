// $(".box"); // class orqqali 
// $("#main"); // id orqqali
// $("ul"); // teg orqqali
// $("ul li"); // ul ni ichidagi barcha li teglari
// document.ready -  DOM butunlay yuklanib bolgan keyin
// $(document).ready(function() {
//     $(".btn-slide").click(function() {
//         $("#panel").slideToggle("slow");
//         $(this).toggleClass("active");
//     });
// });
$(document).ready(function() {
    // $("#button").click(function() {
    //     $(".panel").show() // display:block;
    // })

    $("#button").click(function() {
        // $(this).addClass("test") // class qoshis
        // $(this).addClass("test2") // class qoshis
        // $(this).removeClass("test2") // class ochirish

        // $(this).parent(".container").click(function() {
        //     console.log("container mouse");
        // })
        // $(".box").animate({ opacity: "0.1", left: "+=400" }, 1200)
        //     .animate({ opacity: "0.4", top: "+=160", height: "20", width: "20" }, "slow")
        //     .animate({ opacity: "1", left: "0", height: "100", width: "100" }, "slow")
        //     .animate({ top: "0" }, "fast")
        //     .slideUp()
        //     .slideDown("slow")
        return true;
    });

    $("#tool").click(function() {
        // $('em').animate({ opacity: "show", top: "-75" }, "slow");
        // $("#content").append("<h4>Hello</h4>")
        $(this).width("100px")
        $(this).height("100px")
        $(".container").toggleClass("blue-bg")
    })

    // $("form").submit(function(event) {
    //     event.preventDefault();
    //     let budget = parseInt($("#budget").text());
    //     let value = $("#num").val();
    //     $("#budget").text(budget - value)
    // })

    $(".panel").click(function() {
        $(".panel").find("p").slideUp("fast")
        $(this).find("p").slideToggle("fast")
    })

})