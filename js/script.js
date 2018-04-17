
$(document).ready(function(){
  $(".btnMenu").click(function(){
    console.log("menu is clicked");
    $(".menu").toggle();
  });
  $(".btnMenu").click(function(){
    console.log("menu color is clicked");
    $(".btnMenu").toggleClass("btnMenuClicked");
  });
});
