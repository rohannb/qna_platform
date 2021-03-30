var express = require('express');
var router = express.Router();
const request = require('request'); 
var mongodb = require ('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("test");
});

//Post request handlers here-on.

router.post('/signup',function(req,res){
  //console.log("asd: ", req.body , " ads");
  var MongoClient=mongodb.MongoClient;

	var url = 'mongodb://localhost:27017'

	MongoClient.connect(url, function(err, client){
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');

        // Get the documents collection
        var db = client.db('qna_db');

        var collection = db.collection('users');

        // Get the user data passed from the form
        var user1 = {name:req.body.name, email:req.body.email,
          phone:req.body.phone, location:req.body.location, age:req.body.age,
          password:req.body.pw};

        // Insert the user data into the database
        collection.insert([user1], function (err, result){
          if (err) {
            console.log(err);
          } else {
                      // Redirect to the updated student list
            
          }

          // Close the database
          client.close();
        });
      }
    });
  });

  router.post('/login', function(req, res){

    var MongoClient=mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/qna_db'
  
    MongoClient.connect(url, function(err, db){
      if (err) {
            console.log('Unable to connect to the Server:', err);
          } else {
            console.log('Connected to Server');
          var collection = db.collection('users');
          var query = {email: req.body.email, password: req.body.pw}
          console.log(query);
          collection.findOne(query, function(err, user){
              if(err) throw new Error(err);
              if(!user)
              {
                console.log('Not found');
                res.redirect("loginfail");
              }
              else {
                console.log('Found');
                res.redirect("home");         // add redirect
              }
          })
      }
    });
  });

  router.post('/addques',function(req,res){
    //console.log("asd: ", req.body , " ads");
    var MongoClient=mongodb.MongoClient;
  
    var url = 'mongodb://localhost:27017'
  
    MongoClient.connect(url, function(err, client){
        if (err) {
          console.log('Unable to connect to the Server:', err);
        } else {
          console.log('Connected to Server');
  
          // Get the documents collection
          var db = client.db('qna_db');
  
          var collection = db.collection('questions');
  
          // Get the user data passed from the form
          var question = {ques:req.body.qtext};
  
          // Insert the user data into the database
          collection.insert([question], function (err, result){
            if (err) {
              console.log(err);
            } else {
                        // Redirect to the updated student list
              
            }
  
            // Close the database
            client.close();
          });
        }
      });
    });

module.exports = router;