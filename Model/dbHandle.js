// DATABASE CONNECT 
const { Router, json } = require('express');
const { Pool } = require('pg');
const { render } = require("ejs");
const dbURL = myPostgresUrl;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || dbURL,
    ssl: {
        rejectUnauthorized: false
    }
});

class dataBaseReturn {

    // SignUP Database Handling
    signUpDb = async (req, res, firstName, lastName, emailAdress)=>{

        try{
            const client = await pool.connect();
            if(firstName == undefined && lastName == undefined && emailAdress == undefined){
              res.render("signUp");
              client.release();
              res.end();
            }
            else if(firstName != undefined && lastName != undefined && emailAdress != undefined){
                const result = await client.query('INSERT INTO signUp (firstName, lastName, email) VALUES (' 
                        + "'"  + firstName + "'" + ', ' + "'"  + lastName + "'" +', ' + "'"  + emailAdress + "')");
                const userInfo = {'userInfo': [{firstName: firstName}, {email: emailAdress}]};
                firstName = undefined; 
                lastName = undefined; 
                emailAdress = undefined;
                console.log("Sign up successful");
                res.render('signUpSucc', userInfo);
                client.release();
                res.end();
                
            }
        }catch(err){
            console.error(err);
            res.redirect("/signUpErr")
            res.send("Error " + err);
        }
    }

    // Articles Database Handling
    articlesDb = async (req, res)=>{
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT DISTINCT title FROM articles');
            const results = { 'results': (result) ? result.rows : null};
            res.render('articles', results );
            client.release();
            res.end();
        }catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }

    // SEARCH QUERIES Database Handling
    searchDb = async (req, res, title)=>{
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT DISTINCT title FROM articles WHERE title LIKE ' + "'%" + title + "%'");
      
            const results = { 'results': (result) ? result.rows : null};
            res.render('search', results );
            client.release();
            res.end();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    } 

    //Article Database Handling
    articleDb = async (req, res, theTitle) =>{
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT title, content FROM articles WHERE title=' + "'"  + theTitle + "'");
            const results = { 'results': (result) ? result.rows : null};
            res.render('article', results );
            client.release();
            res.end();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    }
}

module.exports = {
    dataBaseReturn: dataBaseReturn
}
