$(document).ready(function () {

    $('.maintitle img').click(function () {
        alert('HAHAHA YOU FELL FOR IT! ( ͡° ͜ʖ ͡°)');
    });


    $("#flip").click(function () {
        $("#panel").slideDown("slow");
    });

    $("#flip").click(function () {
        $("#panel").slideUp("slow");
    });

    $(".header2 .suffering").click(function () {
        $("input:text").val("Suffering");
    });


    $(".header2 .positivity").click(function () {
        $(".header2 .positivity").toggle();
    });


    $("#seeyousoon").click(function () {
        $("#panda").fadeOut();
    });

    $("#comeback").click(function () {
        $("#panda").fadeIn(200);
    });

    $("#angry").click(function () {
        // $('#animegirl').fadeOut(200);
        // $('#animegirl').fadeIn(200);
        console.log("#angry click");
        if($("#animegirl").is(":visible")){
            $("#animegirl").fadeOut();
        console.log("image is visible")
        }
        else{
            $("#animegirl").fadeIn();
        console.log("entered else case")    
        }
    
    });
    // event: basically and interaction with the page
    // event: handling is what happens after

    $("#uba").click(function () {
        $(".structure #wait").text("Tubaas");
    });

    $("#atryellow").click(function () {
        $("#pokemon").attr({ height: "500", width: "500" });
    });

    // $("#secret").hover(function(){
    //     $("#secret").before("<p>You Rock</p>");
    //     $("#secret").after("<p>You Rock</p>");
    // });
    $("#secret").on("mouseenter", function () {
        $("#wow").show();
    }).on("mouseleave", function () {
        console.log("mouseleave")
        $("#wow").hide();
    });


});

console.log("hello")