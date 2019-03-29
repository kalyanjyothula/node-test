const express = require('express');
const hbs = require('hbs');


let app = express();
app.set('view engine', hbs);
app.use('/home', express.static(__dirname+'/public'));



app.get('/', (req, res) => {
    res.render('home.hbs',{
        title: 'Home',
        p: 'This is home page',
    });
});

app.get('/about', (req,res) => {
    res.render('about.hbs', {
        title: 'About',
        p: 'This is about page',
    })
});

app.listen(3000,(err) => {
    if(err) throw err
    console.log(1,'> Running server in PORT',3000)
});
