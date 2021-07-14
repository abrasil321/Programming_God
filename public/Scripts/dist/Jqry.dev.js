"use strict";

// pops term of conditions on sign Up page
$(document).hover(function () {
  $('[data-toggle="popover"]').popover();
}); // loading icons for videos page

setTimeout(function () {
  $(window).ready(function () {
    $('#loading-image').stop(true, true).fadeOut();
    $("#loading").stop(true, true).fadeOut();
  });
}, 6000);

function alertMessage() {
  alert("Thank you for signing up with Programming God ".concat(document.getElementById("userFname").value, "! \n        You will receive an email from us every time\n                a new video or article is posted."));
}

function setCookie() {
  var FName = document.getElementById("userFname").value;
  var UEmail = document.getElementById("userEmail").value;
  document.cookie = "name=" + FName + ",email=" + UEmail;
} // send welcome email


function sendEmail() {
  var getFirstName = document.getElementById("userFirstName").value;
  var getEmail = document.getElementById("userEmailAddr").value;
  Email.send({
    SecureToken: "0bb5c96e-0e47-4383-82aa-fba3e839e76d",
    To: "".concat(getEmail),
    Bcc: "alexfbrazil123@gmail.com",
    From: "alexfbrazil123@gmail.com",
    Subject: "Welcome to Programming God",
    Body: "<img src=\"https://i.ibb.co/ts3rxMJ/Screen-Shot-2021-06-23-at-5-45-13-PM.png\" width=\"900\" height=\"250\" alt=\"Programming God Channel\"><br>\n        <br>Hello ".concat(getFirstName, "!<br> <br>Thank you for signing up with Programming God. Now your are part of our family!\n        Every time we post a new video on the <a href=\"https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw\">YouTube channel</a>, or add a new article to our website, \n        you will be one of the first people to know. Don't forget to <a href=\"https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw/videos\">like our videos</a> and subscribe \n        to <a href=\"https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw\">Programming God channel<a>.<br>\n        <br>\n        I'll see you next time!<br>\n        <br>\n        Alex Brasil")
  });
} // enable button after filling form


function subBtn() {
  var userFirst = document.getElementById("userFname").value;
  var userLast = document.getElementById("userFname").value;
  var userEmail = document.getElementById("userEmail").value;
  var userTerms = document.getElementById("defaultUnchecked").checked;

  if (userFirst == undefined || userLast == undefined || userEmail == undefined || userTerms == false) {
    document.getElementById("signBtn").disabled = true;
  } else {
    document.getElementById("signBtn").disabled = false;
  }
}