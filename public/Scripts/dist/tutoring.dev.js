"use strict";

function subBtnTutoring() {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var uEmail = document.getElementById("uEmail").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  if (fName == "" || lName == "" || uEmail == "" || date == "" || time == "") {
    document.getElementById("checkout-button").disabled = true;
  } else if (fName != "" || lName != "" || uEmail != "" || date != "" || time != "") {
    document.getElementById("checkout-button").disabled = false;
  }
}

var sendtutoringEmail = function sendtutoringEmail() {
  var tFName = document.getElementById("fName").value;
  var tFEmail = document.getElementById("uEmail").value;
  var tFdate = document.getElementById("date").value;
  var tFtime = document.getElementById("time").value;
  Email.send({
    SecureToken: "0bb5c96e-0e47-4383-82aa-fba3e839e76d",
    To: "".concat(tFEmail),
    Bcc: "alexfbrazil123@gmail.com",
    From: "alexfbrazil123@gmail.com",
    Subject: "Tutoring Request",
    Body: "<img src=\"https://i.ibb.co/ts3rxMJ/Screen-Shot-2021-06-23-at-5-45-13-PM.png\" width=\"900\" height=\"250\" alt=\"Programming God Channel\"><br>\n        <br>Hello ".concat(tFName, "!<br> <br>Thank you for requesting a tutoring section with me! Your request will be done after the payment.<br>\n        I am very excited to meet you on ").concat(tFdate, " at ").concat(tFtime, ". I will send you a zoom link that day, and I'll do my best to assist you.<br>\n        <br>\n        See you soon!<br>\n        <br>\n        Alex Brasil")
  });
};