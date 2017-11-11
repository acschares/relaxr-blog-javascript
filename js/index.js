$(document).ready(function(){
  $('.readmore').click(function(event){
    event.preventDefault();

    $("#show-this-on-click").slideDown("slow", function(){
        $(".readless").show();
        $(".readmore").hide();
    });
  })
});