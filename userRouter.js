const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bạn đã truy cập phương thức get');
});

router.post('/', (req, res) => {
    res.send('Bạn đa truy cập phương thức post');
});

module.exports = router;