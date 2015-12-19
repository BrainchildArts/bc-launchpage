$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('../assets/images/bcfinal.mp4',{ambient: true});
  

  $("#sound").click( function (){
    if( $(this).hasClass('muted') )
    {
      BV.getPlayer().volume(1);
      $(this).removeClass('muted');
      $(".splash-content").addClass('vhs-flicker vhs-reverse');
      setTimeout(hide, 400);
    }
    else {
      BV.getPlayer().volume(0);
      $(this).addClass('muted');
      $(".splash-content").removeClass('hidden');
      $(".splash-content").addClass('vhs-flicker');
      setTimeout(clean, 400);
    }
  });
});


function hide(){
  $(".splash-content").addClass('hidden')
  $(".splash-content").removeClass('vhs-flicker vhs-reverse');
}

function clean(){
  $(".splash-content").removeClass('vhs-flicker');
}



// var BV = new $.BigVideo();
// BV.init();
// if ($(window).width() < 480) {
//     BV.show('video-poster.jpg');
// } else {
//     BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true});
// }

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
      $("#sound").addClass("disabled");
    } else {
      $("body").removeClass("modal-open");
      $("#sound").removeClass("disabled");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
