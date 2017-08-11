$(document).ready(function() {
  //Variables
  lock = false;
  //Listen
  $("#1").click(function(){keypress(1);});
  $("#2").click(function(){keypress(2);});
  $("#3").click(function(){keypress(3);});
  $("#4").click(function(){keypress(4);});
  $("#5").click(function(){keypress(5);});
  $("#6").click(function(){keypress(6);});
  $("#7").click(function(){keypress(7);});
  $("#8").click(function(){keypress(8);});
  $("#9").click(function(){keypress(9);});
  $("#0").click(function(){keypress(0);});
  $("#plu").click(function(){lock = false; keypress("+");});
  $("#dec").click(function(){if (lock === false){lock = true;keypress(".");}});
  $("#minus").click(function(){lock = false; keypress("-");});
  $("#tim").click(function(){lock = false; keypress("*");});
  $("#div").click(function(){lock = false; keypress("/");});
  $("#equ").click(function(){equal();});
  $("#clr").click(function(){clear();});
  //Execute
  function keypress(key) {
    $("#display").append(key);
    var display = $("#display").text();
    if(display.charAt(0) === "0" && display.charAt(1) !== ".") {
      display = display.slice(1);
      $("#display").text(display);
    }
    if(display.charAt(display.length-1) === "." && display.charAt(display.length-2) === ".") {
      display = display.slice(0,-1);
      $("#display").text(display);
    }
    checkDisplay();
  }

  function equal() {
    var display = $("#display").text();
    var result = eval(display);
    if (display.charAt(display.length-1) === "0" && display.charAt(display.length-2) === "/") {
      result = "I'm melting...   ";
      $("#display").text(result);
      $(".main").fadeOut(3000);
      $(".main").fadeIn("slow");
    }
    $("#display").text(result);
    lock = false;
    checkDisplay();
  }

  function checkDisplay() {
    var display = $("#display").text();
    if (display.length > 16) {
      $("#display").css("font-size", "calc(100% + 1vw)");
    }
    if (display.length > 20) {
      $("#display").css("font-size", "calc(100% + .5vw)");
    }
    if (display.length > 28) {
      $("#display").css("font-size", "calc(100% + .25vw)");
    }
  }

  function clear() {
    $("#display").empty().append(0);
    $("#display").css("font-size", "calc(100% + 1.5vw)");
    lock = false;
  }
});
