function subBtnTutoring(){
    let fName  = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let uEmail = document.getElementById("uEmail").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if(fName == "" || lName == "" || uEmail == "" || date == "" || 
        time == ""){

        document.getElementById("checkout-button").disabled = true;

    }else if(fName != "" || lName != "" || uEmail != ""|| date != "" || 
        time != ""){

        document.getElementById("checkout-button").disabled = false;
    }
}


const sendtutoringEmail = () => {
    let tFName = document.getElementById("fName").value;
    let tFEmail = document.getElementById("uEmail").value;
    let tFdate = document.getElementById("date").value;
    let tFtime = document.getElementById("time").value;

    Email.send({
        SecureToken : "0bb5c96e-0e47-4383-82aa-fba3e839e76d",
        To : `${tFEmail}`,
        Bcc: "alexfbrazil123@gmail.com",
        From : "alexfbrazil123@gmail.com",
        Subject : "Tutoring Request",
        Body : `<img src="https://i.ibb.co/ts3rxMJ/Screen-Shot-2021-06-23-at-5-45-13-PM.png" width="900" height="250" alt="Programming God Channel"><br>
        <br>Hello ${tFName}!<br> <br>Thank you for requesting a tutoring section with me! Your request will be done after the payment.<br>
        I am very excited to meet you on ${tFdate} at ${tFtime}. I will send you a zoom link that day, and I'll do my best to assist you.<br>
        <br>
        See you soon!<br>
        <br>
        Alex Brasil`,
    });
};
