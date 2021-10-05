// let videoTitle = $("#video-title").text();
// if (999 < window.innerWidth < 1150) {
//   $("#video-title").text(videoTitle.substring(0, 38) + "...");
// } else {
//   console.log("hello");
// }

$(".other-videos").hover(
  function () {
    $(this).find(".fa-clock").addClass("show");
    $(this).find(".fa-stream").addClass("show");
    $(this).find(".fa-ellipsis-v").addClass("show");
  },
  function () {
    $(this).find(".fa-clock").removeClass("show");
    $(this).find(".fa-stream").removeClass("show");
    $(this).find(".fa-ellipsis-v").removeClass("show");
  }
);
