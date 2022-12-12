const National = require('../models/national');
const Hotel = require('../models/hotel');

module.exports = {
    show,
    index,
    new: newNational,
    create, 
    delete: deleteNational,
    edit,
    update,
};

function show(req, res) {
    National.findById(req.params.id, function (err, nationalDocument) {
        Hotel.find({national: nationalDocument._id}, function(err, hotelDocument){
        console.log(nationalDocument, '<-- nationalllllll helllloooo')
        console.log(hotelDocument, '<---------- HELLLOOOO')
        res.render('nationals/show', {national: nationalDocument, hotel: hotelDocument})
    })
})
}

function index(req, res){
    National.find({}, function (err, nationalDocument) {
        console.log(nationalDocument); 

        res.render('nationals/index', {nationals: nationalDocument, name: 'sophia'});
    });
}

function create(req, res) {
    req.body.user = req.user.id;
    console.log(req.user.id, 'this is the id')
    National.create(req.body, function (err, nationalDocument) {
        if (err) {
            return res.send('err creating check the terminal')
        }
        res.redirect(`/nationals/${nationalDocument._id}`);
    });
}

function newNational(req, res) {
    res.render("nationals/new");
  }

function edit(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc

    National.findOne({_id: req.params.id, user: req.user._id}, function(err, nationalDocument) {
        if (err || !nationalDocument) return res.redirect('/nationals');
      // Render the comments/edit.ejs template, passing to it the comment
      res.render('nationals/edit', {nationals: nationalDocument}); 
    });
  }
  
function update (req, res){
    console.log('update function works just fine')
        National.findOneAndUpdate(
            {_id: req.params.id, user: req.user._id},
            req.body,
            {new: true},
            function(err, nationals) {
                if (err || !nationals) return res.redirect('/nationals');
                res.redirect('/nationals');
            })
        }

function deleteNational(req, res) {
    National.findByIdAndRemove(req.params.id, function () {
        res.redirect('/nationals')
    });
}


   