const express = require('express');
const route = express.Router();


route.get('/Join', (req,res,next)=>{
    res.render('Pages/JoinPage', {
        title: 'Join The Team'
    })
})

module.exports = route;