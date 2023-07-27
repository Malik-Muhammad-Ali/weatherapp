const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 6001;
const viewPath = path.join(__dirname, '../templates/views');
const imagePath = path.join(__dirname, '../public/images')
const stylePath = path.join(__dirname, '../public/css');
const jsPath = path.join(__dirname, '../public/js');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
app.use('/images', express.static(imagePath));
app.use('/css', express.static(stylePath));
app.use('/js', express.static(jsPath));

// Routing
app.get('', (req, res)=>{
    res.render('index');
})

app.get('/about', (req, res)=>{
    res.render('about');
})

app.get('/weather', (req, res)=>{
    res.render('weather');
})

app.get('*', (req, res)=>{
    res.render('error');
})

app.listen(port, (err)=>{
    if(err){
        console.log('Error Occured');
    }else{
        console.log(`Server Started at Port ${port}`);
    }
})