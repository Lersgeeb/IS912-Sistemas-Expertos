var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var trendingRouter = require('./routes/trending-router');
var tweetRouter = require('./routes/tweet-router');
var usuarioRouter = require('./routes/usuario-router');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/trending', trendingRouter);
app.use('/tweet', tweetRouter);
app.use('/usuario', usuarioRouter);




app.listen(8888, () => {
    console.log('Servidor del backend levantado en 8888');
});
