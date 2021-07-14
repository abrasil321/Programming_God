const stripeKey = myPrivateKey;
const stripe = require('stripe')(stripeKey);
const callDbClass = require("../Model/dbHandle.js");
const dbClass = new callDbClass.dataBaseReturn();


class asyncClass {

  // SignUP Page 
  signUP = async (req, res)=>{
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let emailAdress = req.body.emailAdd;

    dbClass.signUpDb(req, res, firstName, lastName, emailAdress);
    console.log("You are at the Sign Up Page!");
  }

  // Articles Page ------------------------------------------------------------------------------
  articles = async (req, res)=>{
    dbClass.articlesDb(req, res)
    console.log("You are at the Articles Page!");
  }

  // SEARCH QUERIES 
  search = async (req, res)=>{
    const titl = req.query.title;
    const title = titl.charAt(0).toUpperCase() + titl.slice(1);
    
    dbClass.searchDb(req, res, title)
    console.log("Received a request for the search.ejs");
  }


  //Article Page 
  article = async (req, res)=>{
    const theTitle = req.body.title;
    dbClass.articleDb(req, res, theTitle)
    console.log("You are at the Article Page!");
  }


  // Payment page 
  payment = async (req, res)=>{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Tutoring',
            },
            unit_amount: 800,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://www.programminggod.com/success`,
      cancel_url: `http://www.programminggod.com/cancel`,
    })
    res.redirect(session.url);
    res.end();
  }
}

module.exports = {
  asyncClass: asyncClass
}
