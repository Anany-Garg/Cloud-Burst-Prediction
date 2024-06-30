const express =require('express');
const app =express();
const path =require('path');
const ejsMate = require('ejs-mate');    
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }));
const {validateWeather} =require("./middleware");
const expressError =require('./utils/expressError');

app.get('/home' ,(req,res)=>{
    res.render('home');
})


app.get('/home/information' ,(req,res)=>{
    res.render('information');
})


                                                                                                                                
app.post('/home/information' , validateWeather ,(req,res)=>{
    const data = req.body;
    console.log(data)
   res.render('result' ,{data});

})



app.all('*', (req, res, next) => {
    next(new expressError('Page Not Found', 404))
})



app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})


app.listen(3000 ,()=>{
    console.log('connected to port 3000')
})