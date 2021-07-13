class otherControllersClass {
    // Home Page -------------------------------------------
    home = (req, res)=>{
        console.log("You are at the Home Page!");
        res.render("home");
        res.end();
    }

    // Playlist Page ---------------------------------------
    playlist = (req, res)=>{
        console.log("You are at the Playlist Page!");
        res.render("playlist");
        res.end();
    }

    // Tutoring Request Page -------------------------------
    tutoring = (req, res)=>{
        console.log("You are at the Tutoring Request Page!");
        res.render("tutoring");
        res.end();
    }

    // Success Payment page --------------------------------
    success = (req, res)=>{
        console.log("Payment Success Page!");
        res.render("success");
        res.end();
    }

    // Cancel Payment page ---------------------------------
    cancel = (req, res)=>{
        console.log("Payment Cancel Page!");
        res.render("cancel");
        res.end();
    }

    // SignUp Error Page
    signUpErr = (req, res)=>{
        console.log("You are at the Sign Up Error Page!");
        res.render("signUpErr");
        res.end(); 
    }

    // SignUp Success Page
    signUpSucc = (req, res)=>{
        console.log("You are at the Sign Up Success Page!");
        res.render("signUpSucc");
        res.end(); 
    }
}   

module.exports = {
    otherControllersClass: otherControllersClass
}
    
