$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('./assets/images/bcfinal.mp4',{ambient:true});
});

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