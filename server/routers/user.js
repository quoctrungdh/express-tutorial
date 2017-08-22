const express = require('express');
const router = express.Router();

// routers for user/:id
router.get('/:id', function(req, res) {
    const { id } = req.params;
    res.send(`User with id ${id} details`);
})

module.exports = router;
