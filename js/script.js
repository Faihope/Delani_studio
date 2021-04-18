$(document).ready(function () {
    $("#design").click(function () {
        $("#describe-design").show();
        $("#design").hide();

    });
    $("#describe-design").click(function () {
        $("#design").show();
        $("#describe-design").hide();

    });
    $("#develop").click(function () {
        $("#describe-develop").show();
        $("#develop").hide();

    });
    $("#describe-develop").click(function () {
        $("#develop").show();
        $("#describe-develop").hide();

    });
    $("#product").click(function () {
        $("#describe-product").show();
        $("#product").hide();

    });
    $("#describe-product").click(function () {
        $("#product").show();
        $("#describe-product").hide();

    });
    // hover effects on portfolio image one
    $(".one").mouseenter(function () {
        $("#one").show();

    });
    $(".one").mouseleave(function () {
        $("#one").hide();

    });
    // hover effect on image two
    $(".two").mouseenter(function () {
        $("#two").show();

    });
    $(".two").mouseleave(function () {
        $("#two").hide();

    });

})