const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    accomodations: {
        type: String,
        enum: ['AirBnb', 'Hotel', 'Staying with family'],
    },

    address: {
        type: String,
    },

    confirmationNumber: {
        type: Number,
        min: 0
    },

   checkInDate: {
        type: Date,
        min: 0
    },

    checkOutDate: {
        type: Date,
        min: 0
    },

    national: {
        type: Schema.Types.ObjectId, ref: "National"

    }
});

module.exports = mongoose.model('Hotel', hotelSchema);