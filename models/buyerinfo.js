const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    batch: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Buyer = mongoose.model('buyerinfo', BuyerSchema);