const express = require('express');
const app = express();

// routers for /users
const users = require('./routers/users.js');
app.use('/users', users);

// routers for /user/:id details
const user = require('./routers/user.js');
app.use('/user', user);

app.get('/', function(req, res) {
   res.send('home')
})

app.listen(3001)