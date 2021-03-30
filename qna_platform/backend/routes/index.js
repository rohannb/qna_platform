var express = require('express');
var router = express.Router();
const request = require('request'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("test");
});

router.post('/signup',function(req,res){
  //console.log("asd: ", req.body.name , " ads");
  //res.redirect("/");
  /*var MongoClient=mongodb.MongoClient;

	var url = 'mongodb://localhost:27017/expressdb'

	MongoClient.connect(url, function(err, db){
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');

        // Get the documents collection
        var collection = db.collection('user');

        // Get the student data passed from the form
        var user1 = {organisation:req.body.organisation, sector:req.body.sector,
          name:req.body.name, email:req.body.email, phone:req.body.phone,
          address:req.body.address,
          city:req.body.city, state:req.body.state, zip:req.body.zip, country: req.body.country,
          password:req.body.pw};

        // Insert the student data into the database
        collection.insert([user1], function (err, result){
          if (err) {
            console.log(err);

          } else {

            // Redirect to the updated student list
            res.redirect("thelist");
            res.redirect("login");
          }

          // Close the database
          db.close();
        });
      }
    });*/
  });



module.exports = router;