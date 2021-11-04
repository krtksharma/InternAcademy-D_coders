//responsive navbar
var a = document.getElementById("right");
var b = document.querySelector(".ham");
var c = document.querySelector(".ham1");

function visible() {
    a.style.visibility = "visible";
    b.style.display = "none";
    c.style.display = "block";

}
function visible1() {

    a.style.visibility = "hidden";
    b.style.display = "block";
    c.style.display = "none";
}

//   responsive navabar ends here 


//sign in starts from here
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");

var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
btn1.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
span1.onclick = function () {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

  //sign in ends here 


//   nav color Change
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".nav").css("background" , "white");
          $(".nav1").css("background" , "white");
          $(".right1").css("background" , "white");
        }
  
        else{
            $(".nav").css("background" , "cyan");  	
            $(".nav1").css("background" , "cyan"); 
            $(".right1").css("background" , "cyan"); 	
        }
    })
  })


