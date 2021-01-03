const express = require('express');
const route = express.Router()

route.get('/Dashboard', (req,res,next)=>{
    res.render('Users/Dashboard', {
        title: 'Dashboard | ZOA Foundation'
    })
})

module.exports = route;