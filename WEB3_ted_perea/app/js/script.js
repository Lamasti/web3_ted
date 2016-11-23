$(document).ready(function($){

    console.log('jquery est loadé 🎉');


    $("#video").click(function(){
        $("#tiroir").addClass('tiroir_out');
        $("#tiroir").removeClass("tiroir_visible");
        $(".open_tiroir").css('display', 'block');

    });

    $(".open_tiroir").click(function(){
        $("#tiroir").addClass("tiroir_visible");
        $("#tiroir").removeClass('tiroir_out');
        $(".open_tiroir").css('display', 'none');


    });

});