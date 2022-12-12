const National = require('../models/national');
const Hotel = require('../models/hotel');

module.exports = {
    new: newHotel,
    create,
}


function create(req, res) {
	console.log(req.params.id, 'params id')
	req.body.national = req.params.id
    console.log(req.body, '<------ SUPPPPPP')
	Hotel.create(req.body, function (err, hotelDocument) {

		if (err) {
			console.log("=======err");
			console.log(err);
			console.log("========");

			return res.send('ERROR');
		}
		console.log("========Hotel information");
		console.log(hotelDocument);
		console.log("===================");

        // req.body.airport= req.body.airport
		res.redirect(`/nationals/${req.params.id}`)
	});

}

function newHotel (req,res){
    res.render('nationals/show', {national: req.params.id})
}