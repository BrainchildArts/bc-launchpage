$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('https://docs.google.com/uc?authuser=0&id=0B2oLskYH6EgjMmxUZjhGWkdrY2M&export=download',{ambient: true});
  

  $("#sound").click( function (){
    if( $(this).hasClass('muted') )
    {
      BV.getPlayer().volume(1);
      $(this).removeClass('muted');
      $(".splash").addClass('vhs-flicker vhs-reverse');
      setTimeout(hide, 400);
    }
    else {
      BV.getPlayer().volume(0);
      $(this).addClass('muted');
      $(".splash").removeClass('hidden');
      $(".splash").addClass('vhs-flicker');
      setTimeout(clean, 400);
    }
  });

});

function hide(){
  $(".splash").addClass('hidden')
  $(".splash").removeClass('vhs-flicker vhs-reverse');
}

function clean(){
  $(".splash").removeClass('vhs-flicker');
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
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});
