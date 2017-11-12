$(document).ready(function(){
  $('.readmore').click(function(event){
    event.preventDefault();

    $("#show-this-on-click").slideDown("slow", function(){
        $(".readless").show();
        $(".readmore").hide();
    });
  })

  $('.readless').click(function(event){
    event.preventDefault();

    $("#show-this-on-click").slideUp("slow", function(){
        $(".readless").hide();
        $(".readmore").show();
    });
  })

  $('.learnmore').click(function(event){
    event.preventDefault();

    $("#learnmoretext").slideDown("slow", function(){
        $(".learnmore").hide();
    });
  })
});