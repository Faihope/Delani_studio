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
    // hover effect on image three
    $(".three").mouseenter(function () {
        $("#three").show();

    });
    $(".three").mouseleave(function () {
        $("#three").hide();

    });
    // hover effect on image four
    $(".four").mouseenter(function () {
        $("#four").show();

    });
    $(".four").mouseleave(function () {
        $("#four").hide();

    });
    // hover effect on image five
    $(".five").mouseenter(function () {
        $("#five").show();

    });
    $(".five").mouseleave(function () {
        $("#five").hide();

    });
    // hover effect on image six
    $(".six").mouseenter(function () {
        $("#six").show();

    });
    $(".six").mouseleave(function () {
        $("#six").hide();

    });
    // hover effect on image seven
    $(".seven").mouseenter(function () {
        $("#seven").show();

    });
    $(".seven").mouseleave(function () {
        $("#seven").hide();

    });
    // hover effect on image eight
    $(".eight").mouseenter(function () {
        $("#eight").show();

    });
    $(".eight").mouseleave(function () {
        $("#eight").hide();

    });

})
function submit() {
    var enteredName = validName();
    enteredName = document.getElementById("user").value;
    validEmail()
    message();
    alert("Hey " + enteredName + " ,We have received your message. Thank you for reaching out to us.");


}

function validName() {
    var name = document.getElementById("user").value;
    if (name == "") {
        alert("please provide your name");
        document.getElementById("user").focus();
        return false;
    }
}

function validEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("please provide your email");
        document.email.email.focus();
        return false;
    }
}


function message() {
    var message = document.getElementById("message").value;
    if (message == "") {
        alert("please input your message");
        document.message.message.focus();
        return true;
    }



}
