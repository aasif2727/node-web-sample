const 
    chalk = require('chalk');
    path = require('path'),
    express = require('express'),
    hbs = require('hbs'),
    ejs = require('ejs'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');
/*********************/
app.set('view engine','hbs');
app.set('view engine','ejs');
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*********************/
app.get('/',(req,res)=>{
    res.render('index.hbs',{
        name:'Index',
        skills:[
        'NodeJS','AngularJS','MVC Core']
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'About Us',
        aboutus:'This is rendered by hbs engine'
    });
});

app.get('/help',(req,res)=>{
    res.render('help.ejs',{
        title:'help page',
        help:'This is rendered by ejs engine'
    });
});
/*********************/
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening at: ${chalk.green(port)}`);
});