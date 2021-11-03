const express = require('express');
const app = express();
const morgan = require('morgan');
const router = express.Router();
const user = require('./db/userData.json')

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.listen(3030);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(router);

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/guntingbatukertas', (req, res) => {
    res.render('guntingbatukertas')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const getEmail = user.find(x => x.email === email);
    const getPassword = user.find(x => x.password === password);

    if (getEmail == undefined) {
        res.json("Maaf Email Tidak Ditemukan");
    } else if (getEmail != undefined && getPassword == undefined) {
        res.json("Kata Sandi yang Anda Masukkan Salah!!!");
    } else {
        res.json(getEmail);
    }
})
app.use(function(err, req, res, next) {
    console.error(err)
    res.status(500).json({
        status: 'fail',
        errors: err.message
    })
})
app.use(function(err, req, res, next) {
    console.error(err)
    res.status(500).json({
        status: 'fail',
        errors: err.message
    })
})

app.use((req, res, next) => {
    res.status(404).json({
        status: 'fail',
        errors: 'Page not found'
    })
    next();
})