var express = require('express');
var router = express.Router();

// Get home page
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/data', function(req, res) {
  var fs = require('fs');
  fs.readdir('./data', function(err, files) {
    res.send(JSON.stringify(files));
  });
});

module.exports = router;
