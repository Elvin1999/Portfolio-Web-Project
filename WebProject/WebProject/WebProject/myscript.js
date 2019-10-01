// Color Controller Click Start
let controller1 = document.getElementById("controller");
let colorCtrl = document.getElementById("colorContainer");
let mybody = document.getElementsByTagName("body");
controller1.onclick = ClickController;

let isClickedFirst = true;
function ClickController() {

    if (isClickedFirst) {
        isClickedFirst = false;
        colorCtrl.style.left = "5px";
        colorCtrl.style.animation = "colormove1";
        colorCtrl.style.animationDuration = "1s";
        colorCtrl.style.animationIterationCount = 1;
        controller1.style.animation = "ctrlmove1";
        controller1.style.animationDuration = "1s";
        controller1.style.animationIterationCount = 1;
        controller1.style.left = "211px";
    }
    else {
        isClickedFirst = true;
        colorCtrl.style.left = "-211px";
        colorCtrl.style.animation = "colormove2";
        colorCtrl.style.animationDuration = "1s";
        colorCtrl.style.animationIterationCount = 1;
        controller1.style.animation = "ctrlmove2";
        controller1.style.animationDuration = "1s";
        controller1.style.animationIterationCount = 1;
        controller1.style.left = "-2px";
    }
}

$("#colorContainer button").click(function (event) {
    let curColor = $(this).css("background-color");
    var bodyStyles = window.getComputedStyle(document.body);
    var fooBar = bodyStyles.getPropertyValue('--main-color'); //get
    document.body.style.setProperty('--main-color', curColor);//set

});
// Color Controller Click Finish


//Header
//does not work
// $("header > a").click(function (event) {
//     $(this).css("background-color","white");
// });
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>="120"){
        $("header").css("background-color","rgba(30,30,36,1)");
    }
    else{
        $("header").css("background-color","rgba(30,30,36,0)");
    }
});