const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const controlAsy = require("./Controller/asyncControllers.js");
const controlOth =  require("./Controller/otherControllers.js");
const asyncClass = new controlAsy.asyncClass();
const otherClass = new controlOth.otherControllersClass();

//  USE's
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// SET's 
app.set("views", "View")
app.set("view engine", "ejs")

// GET's
app.get("/", otherClass.home) //------------------- Home Page
app.get("/playlist", otherClass.playlist) //------- Playlist Page 
app.get("/articles", asyncClass.articles) //------- Articles Page 
app.get("/search", asyncClass.search) //----------- Search Page 
app.get("/success", otherClass.success) //--------- Success Payment page 
app.get("/cancel", otherClass.cancel) //----------- Cancel Payment page
app.get("/signUpErr", otherClass.signUpErr) //----- Sign Up Error Page
app.get("/signUpSucc", otherClass.signUpSucc) //--- Sign Up Success Page
app.get("/tutoring", otherClass.tutoring) //------------------ Tutoring Request Page 

// POST's
app.post("/signUp", asyncClass.signUP) //---------------------- Sign Up Page 
app.post("/article", asyncClass.article) //-------------------- Article Page 
app.post("/create-checkout-session", asyncClass.payment ) //--- Payment page 

app.listen(port, ()=>{
    console.log("The server is up and listening on port " + port);
})

