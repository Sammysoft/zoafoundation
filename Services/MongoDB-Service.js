const mongoose =  require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://Foundation:${process.env.DB_PASS}@zoa.z1ov7.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
 if(err) console.log('Unable to connect...')
 else console.log('DB Connection established...')
})

require('../Models/Users-schema');