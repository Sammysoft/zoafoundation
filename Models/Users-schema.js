const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  
    FisrtName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    PhoneNumber:{
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Quote: {
        type: String,
        required: true
    },
    DOB:{
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('user', UserSchema);