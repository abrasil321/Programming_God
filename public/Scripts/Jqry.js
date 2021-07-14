// pops term of conditions on sign Up page
$(document).hover(()=>{
    $('[data-toggle="popover"]').popover();
});

// loading icons for videos page
setTimeout(function(){ 
    $(window).ready(function() {
        $('#loading-image').stop( true, true ).fadeOut();
        $("#loading").stop( true, true ).fadeOut();
    })
}, 6000);


function alertMessage(){
    alert(`Thank you for signing up with Programming God ${document.getElementById("userFname").value}! 
        You will receive an email from us every time
                a new video or article is posted.`)
}

function setCookie(){
    let FName = document.getElementById("userFname").value;
    let UEmail = document.getElementById("userEmail").value;
    document.cookie = "name=" + FName + ",email=" + UEmail;
}

// send welcome email
function sendEmail() {
	let getFirstName = document.getElementById("userFirstName").value;
    let getEmail = document.getElementById("userEmailAddr").value;

	Email.send({
        SecureToken : "0bb5c96e-0e47-4383-82aa-fba3e839e76d",
        To : `${getEmail}`,
        Bcc: "alexfbrazil123@gmail.com",
        From : "alexfbrazil123@gmail.com",
        Subject : "Welcome to Programming God",
        Body : `<img src="https://i.ibb.co/ts3rxMJ/Screen-Shot-2021-06-23-at-5-45-13-PM.png" width="900" height="250" alt="Programming God Channel"><br>
        <br>Hello ${getFirstName}!<br> <br>Thank you for signing up with Programming God. Now your are part of our family!
        Every time we post a new video on the <a href="https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw">YouTube channel</a>, or add a new article to our website, 
        you will be one of the first people to know. Don't forget to <a href="https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw/videos">like our videos</a> and subscribe 
        to <a href="https://www.youtube.com/channel/UC-5N7PgDO_22jgm3RCq1_gw">Programming God channel<a>.<br>
        <br>
        I'll see you next time!<br>
        <br>
        Alex Brasil`,
	});
}

// enable button after filling form
function subBtn(){
    let userFirst = document.getElementById("userFname").value;
    let userLast = document.getElementById("userFname").value;
    let userEmail = document.getElementById("userEmail").value;
    let userTerms = document.getElementById("defaultUnchecked").checked;

    if(userFirst == undefined || userLast == undefined || userEmail == undefined || userTerms == false){
        document.getElementById("signBtn").disabled = true;
    }
    else{
        document.getElementById("signBtn").disabled = false;
    }
}

