const express = require('express');
const route = express.Router()

route.get('/', (req,res,next)=>{
    res.render('Pages/HomePage', {
        title: 'ZOA Foundation | Serving Humanity'
    })
})
route.get('/Home', (req,res,next)=>{
    res.render('Pages/HomePage', {
        title: 'ZOA Foundation | Serving Humanity'
    })
})

module.exports = route;