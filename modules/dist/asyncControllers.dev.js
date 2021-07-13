"use strict";

var stripe = require('stripe')('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');

var myclass = require("../server.js"); // DATABASE CONNECT --------------------------------------------------------------------------


var _require = require('express'),
    Router = _require.Router,
    json = _require.json;

var _require2 = require('pg'),
    Pool = _require2.Pool;

var _require3 = require("ejs"),
    render = _require3.render;

var pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://pyfknayxfztfsj:fbd5f1ac8efb6b24c0f50d995ccdc9522204a4a1a13b84214422a6b46f0b9211@ec2-34-195-233-155.compute-1.amazonaws.com:5432/d1tta51r8si4ki",
  ssl: {
    rejectUnauthorized: false
  }
}); // SignUP Page -------------------------------------------------------------------------------

function signUP(req, res) {
  var firstName, lastName, emailAdress, client, result;
  return regeneratorRuntime.async(function signUP$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          firstName = req.body.fName;
          lastName = req.body.lName;
          emailAdress = req.body.emailAdd;
          _context.prev = 3;

          if (!(firstName == undefined && lastName == undefined && emailAdress == undefined)) {
            _context.next = 8;
            break;
          }

          res.render("signUp");
          _context.next = 21;
          break;

        case 8:
          if (!(firstName != undefined && lastName != undefined && emailAdress != undefined)) {
            _context.next = 21;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(pool.connect());

        case 11:
          client = _context.sent;
          _context.next = 14;
          return regeneratorRuntime.awrap(client.query('INSERT INTO signUp (firstName, lastName, email) VALUES (' + "'" + firstName + "'" + ', ' + "'" + lastName + "'" + ', ' + "'" + emailAdress + "')"));

        case 14:
          result = _context.sent;
          res.render('signUp');
          firstName = undefined;
          lastName = undefined;
          emailAdress = undefined;
          console.log("Sign up successful");
          client.release();

        case 21:
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](3);
          console.error(_context.t0);
          res.send("Error " + _context.t0);

        case 27:
          console.log("You are at the Sign Up Page!");
          res.end();

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 23]]);
}

module.exports = {
  signUP: signUP
};