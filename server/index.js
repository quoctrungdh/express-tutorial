const express = require('express');
const app = express();

// routers for /users
const users = require('./routers/users.js');
// routers for /user/:id details
const user = require('./routers/user.js');

app.get('/', function(req, res) {
    res.send('home')
 })

// middleware to protect authenticated APIs
app.use(function(req, res, next) {
    if(true) {
        next();
    }
    res.send('Authentication is required!')
})

// place authen APIs behind middleware to be protect
app.use('/users', users);
app.use('/user', user);

app.listen(3001)