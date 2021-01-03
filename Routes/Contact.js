const express = require('express');
const route = express.Router();

route.get('/Contact', (req,res,next)=>{
    res.render('Pages/ContactPage', {
        title: 'ZOA Foundation | Contact Us'
    })
})

module.exports = route;