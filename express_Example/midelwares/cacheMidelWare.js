/* middleware*/
const express = require('express');
const router = express.Router();
var meld = require('meld');
const Window = require('window');

const window = new Window();
const oldXHROpen = window.XMLHttpRequest.prototype.open;
const oldEval = window.eval;
/* const cacheManager = () => {
 
  window.eval = function (str) {
    // do something with the str string you got
    return oldEval(str);
  };
  window. = function (
    method,
    url,
    async,
    user,
    password
  ) {
    // do something with the method, url and etc.
    this.addEventListener('load', function () {
      // do something with the response text
      console.log('load: ' + this.responseText);
    });

    return oldXHROpen.apply(this, arguments);
  };
}; */

/*const cacheManager = () => {
  meld.after(router.get,(req)=>{
    console.log(req);
  });
};*/
const cacheManager = () => {
  return router.use('/api/cars/list', (req, res, next) => {
    console.log('get list');
    res.writeHead(200, {
      'Cache-Control': 'public',
      'Cache-Control': 'max-age=31536000',
    });
    next();
  });
};

exports.cacheManager = cacheManager;
