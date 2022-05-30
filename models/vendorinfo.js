const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
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
    shopName : {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    opentime: {
        type: String,
        required: true
    },
    closetime: {
        type: String,
        required: true
    }
});

module.exports = Vendor = mongoose.model('vendorinfo', VendorSchema);