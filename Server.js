const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const hbs = require('express-handlebars');

const path = require('path');
const bodyparser = require('body-parser');
const Home = require('./Routes/Home');
const About = require('./Routes/About');
const Contact = require('./Routes/Contact');
const Dashboard = require('./Routes/Dashboard');
const Join = require('./Routes/Join');
require('./Services/MongoDB-Service')

app.listen(port, '0.0.0.0', ()=>{
    console.log(`Listening For Requests at Port ${port}`)
})

app.use(express.static('public'))
//Initiating the view engine express-handlebars

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'MainLayout', layoutsdir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname + '/views/'));
app.set('view engine', 'hbs');

//Configuring middleware for BodyParser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));



// Using the routes middleware

app.use('/', Home);
app.use('/', About);
app.use('/', Contact);
app.use('/Home', Dashboard);
app.use('/Home', Join);