// $(document).ready(function(){
//     $("#design-image").click(function(){
//       $("#design-image").slideDown('1500').hide('1000');
//       $("#design").show('1500');
//     });
//   });
$(document).ready(function(){
    $("#design").hide();
    $("#development").hide();
    $("#product").hide();
    $(".imgtoggle-1, .imgtoggle-1").click(function(){
        $("#design").hide();
        $(".imgtoggle-1").hide();
    });

    $(".imgtoggle-2, .imgtoggle-2").click(function(){
        $("#development").hide();
        $(".imgtoggle-2").hide();
    });

    $(".imgtoggle-3, .imgtoggle-3").click(function(){
        $("#product").hide();
        $(".imgtoggle-3").hide();
    });
});


