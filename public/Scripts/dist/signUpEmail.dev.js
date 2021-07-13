"use strict";

function sendEmail(firstName, Email) {
  Email.send({
    SecureToken: "0bb5c96e-0e47-4383-82aa-fba3e839e76d",
    To: "".concat(Email),
    Bcc: "alexfbrazil123@gmail.com",
    From: "alexfbrazil123@gmail.com",
    Subject: "Welcome to Programming God",
    Body: "<img src=\"https://i.ibb.co/ts3rxMJ/Screen-Shot-2021-06-23-at-5-45-13-PM.png\" width=\"900\" height=\"250\" alt=\"Programming God Channel\"><br>\n        <br>Hello ".concat(firstName, "!<br> <br>Thank you for signing up with Programming God. Now your are part of our family!\n        Every time we post a new video on the <a href=\"https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw\">YouTube channel</a>, or add a new article to our website, \n        you will be one of the first people to know. Don't forget to <a href=\"https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw/videos\">like our videos</a> and subscribe \n        to <a href=\"https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw\">Programming God channel<a>.<br>\n        <br>\n        I'll see you next time!<br>\n        <br>\n        Alex Brasil")
  });
}

module.exports = {
  sendEmail: sendEmail
};