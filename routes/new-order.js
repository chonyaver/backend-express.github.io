const express = require('express');
const router = express.Router();

const sells = [];

const buys = [];

router.get('/sell', function (req, res) {
  if (req.method === 'GET') {
    res.status(200).end(JSON.stringify(sells, null, ' '));
  }
});

router.get('/buy', function (req, res) {
  if (req.method === 'GET') {
    res.status(200).end(JSON.stringify(buys, null, ' '));
  }
});

module.exports = router;
