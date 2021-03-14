const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:false}));

//app.use(bodyParser.json());

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).send('<title>Error 404</title><h1>Page Not Found</h1>');
})

app.listen(3000);