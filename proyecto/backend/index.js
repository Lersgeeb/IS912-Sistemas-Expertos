var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var dotenv = require('dotenv');

var customersRouter = require('./routes/customer-router');
var categoriesRouter = require('./routes/categories-router');
var adminRouter = require('./routes/admin-router');
var orders = require('./routes/orders-router');
var delivery_men = require('./routes/delivery-men-router');


var app = express();

dotenv.config({ path: '.env' });
app.get('./env');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/customers', customersRouter);
app.use('/categories', categoriesRouter);
app.use('/admin', adminRouter);
app.use('/orders', orders);
app.use('/delivery', delivery_men);


app.listen(8888, () => {
    console.log('Servidor del backend levantado en 8888');
});


/*
  

*/