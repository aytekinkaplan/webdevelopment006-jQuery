$("body").css("background-color", "turquoise");
$("h1").css("color", "blue");
$("p").css("color", "green");
$("button").css("background-color", "yellow");
$("input").css("border", "1px solid black");
$("p.error").css("color", "red");

$("button").click(function () {
  $("body").css("background-color", "blue");
  $("h1").css("color", "white");
  $("p").css("color", "white");
  $("button").css("background-color", "green");
  $("input").css("border", "1px solid white");
  $("p.error").css("color", "white");

  $("body").toggleClass("dark-mode");

  $("body").toggleClass("light-mode");

  $("body").toggleClass("dark-mode");

  $("body").toggleClass("light-mode");
});

$("button").dblclick(() => {
  $("body").css("background-color", "red");
  $("h1").css("color", "white");
  $("p").css("color", "white");
  $("button").css("background-color", "green");
  $("input").css("border", "1px solid white");
  $("p.error").css("color", "white");
});
