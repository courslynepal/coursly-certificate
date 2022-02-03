const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    id:{
        type:String,
        required: [true, 'A certificate must have a id'],
        trim: true,
    },
    file: {
        type:String,
        required: [true, 'A certificate must have a certificate file to downlaod']
    }
})

const Certificate = mongoose.model('Certificate',certificateSchema);
module.exports = Certificate;