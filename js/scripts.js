$(document).ready(function(){
    $(".large-pizza").hover(function(){
        $("#large").fadeIn();
        $(".choice").show();
    }, function(){
        $(".choice").hide();
    });

});