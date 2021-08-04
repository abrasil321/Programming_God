// enable button after filling form
function subBtnTutoring(){
    let fName  = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let uEmail = document.getElementById("uEmail").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if(fName == "" || lName == "" || uEmail == "" || date == ""){

        document.getElementById("checkout-button").disabled = true;

    }else if(fName != "" || lName != "" || uEmail != ""|| date != ""){

        document.getElementById("checkout-button").disabled = false;
    }
}

// send email about tutoring request
const sendtutoringEmail = () => {
    let tFName = document.getElementById("fName").value;
    let tFEmail = document.getElementById("uEmail").value;
    let tFdate = document.getElementById("date").value;
    let tFtime = document.getElementById("time").value;

    Email.send({
        SecureToken : "MyKey",
        To : `${tFEmail}`,
        Bcc: "alexfbrazil123@gmail.com",
        From : "alexfbrazil123@gmail.com",
        Subject : "Tutoring Request",
        Body : `<img src="https://i.ibb.co/ftysG5x/Webp-net-resizeimage.jpg" width="900" height="250" alt="Programming God Channel"><br>
        <br>Hello ${tFName}!<br> <br>Thank you for requesting a tutoring section with me! Your request will be done after the payment.<br>
        I am very excited to meet you on ${tFdate} at ${tFtime}. I will send you a zoom link that day, and I'll do my best to assist you.<br>
        <br>
        See you soon!<br>
        <br>
        Alex Brasil`,
    });
};

// display calendar input on Safari
let dateClass = ".datechk";
$(document).ready(function () {
  if (document.querySelector(dateClass).type !== "date") {
    var oCSS = document.createElement("link");
    oCSS.type = "text/css";
    oCSS.rel = "stylesheet";
    oCSS.href =
      "//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css";
    oCSS.onload = function () {
      var oJS = document.createElement("script");
      oJS.type = "text/javascript";
      oJS.src =
        "//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
      oJS.onload = function () {
        $(dateClass).datepicker();
      };
      document.body.appendChild(oJS);
    };
    document.body.appendChild(oCSS);
  }
});



// display time input on Safari
$(document).ready(function(){
  $('.timepicker').timepicker({
      timeFormat: 'h:mm p',
      interval: 15,
      minTime: '10:00am',
      maxTime: '6:00pm',
      startTime: '10:00am',
      dynamic: true,
      dropdown: true,
      scrollbar: true
  });
  subBtnTutoring();
});
