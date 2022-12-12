const National = require("../models/national");

module.exports = {
  create,
};

function create(req, res) {
 
 National.findById(req.params.id, function (err, nationalDocument) {
    if (err) {
      console.log(err, " <- error ");
      return res.send("can't find flightsssss");
    }

    console.log("==========================================");
    console.log(nationalDocument, " <- flight from database!");
    console.log("==========================================");
   
   req.body.airport= req.body.airport
    nationalDocument.flights.push(req.body);

   console.log(req.body, '<--- this is req.body')
   

    nationalDocument.save(function (err) {
    
	  console.log(err, " <- err from ")
      
      res.redirect(`/nationals/${req.params.id}`);
    });
  });
}