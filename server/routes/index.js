var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list',function(req, res, next){
  connection.query("select * from test",function(error, results, fields){
    console.log( results );
    res.json(results)
  })

  // res.json({
  //   a:1,
  //   b:2
  // })
})
module.exports = router;
