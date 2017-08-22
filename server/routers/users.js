const express = require('express');
const router = express.Router();

// routes for /users
router.get('/', function(req, res) {
    res.send('users GET')
})

module.exports = router;


