var express = require('express');
var router = express.Router();

var getOptions = (function(){
    return {
        root: __dirname + '/../',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        imageUrl:'/webcam-image.png',
                        refreshInterval: 500});
});

router.get('/webcam-image.png', function(req, res, next){
    res.sendFile('public\\images\\wc.png', getOptions());
});

module.exports = router;
