const express= require('express');
const route = express.Router();

route.get('/About', (req,res,next)=>{
    res.render('Pages/AboutPage', {
        title: 'ZOA Foundation | About'
    })
})

module.exports = route;