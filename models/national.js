const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['United' , 'Jetblue', 'American', 'Delta', 'Spirit']
    },

    confirmationNumber:{
        type: Number, 
        required: true, 
        min: 10,
        max: 9999,
    },
    departureAirport: {
        type: String,
        enum: ['EWR' , 'LGA', 'JFK', 'IND', 'ATL', 'ORD', 'MCO'],
        default: 'EWR'
    },
    arrivalAirport: {
        type: String,
        enum: ['EWR' , 'LGA', 'JFK', 'IND', 'ATL', 'ORD', 'MCO'],
    },

    arrival: {
        type: Date,
        default: function() {
            let.date = new Date();
            date.setFullYear(date.getFullYear() +1);
            return date;
        },
    },
});

const nationalSchema = new Schema({
    name: {
        type: String, 
        enum: ['Jamfest Super Nationals', 'Cheer Sport Nationals', 'The Grand Nationals Championship', 'All-Star Cheerleading Worlds']
    },
    location: {
        type: String,
        enum: ['Indianapolis, ID','Atlanta, GA', 'Virginia Beach, VA','Orlando, FL']
    },
    startDate: {
        type: Date,
        default: function() {
            let.date = new Date();
            date.setFullYear(date.getFullYear() +1);
            return date;
        },
    },

    flights: [flightSchema] 
});


module.exports = mongoose.model('National', nationalSchema);


