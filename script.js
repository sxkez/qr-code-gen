$(document).ready(function () {
  $("#generate-button").click(function () {
    var url = $("#url-input").val();
    if (url !== "") {
      $("#qrcode").empty();
      var qrcode = new QRCode(document.getElementById("qrcode"), url);

      // Add the 'show' class to the QR code container to trigger the animation
      $("#qrcode").addClass("show");
    }
  });
});
