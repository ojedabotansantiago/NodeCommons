/* middleware*/
const express = require('express');
const router = express.Router();

const cacheManager = () => {
  return router.use('/api/cars/list', (req, res, next) => {
    console.log('get list');
    next();
  });
};

exports.cacheManager = cacheManager;


// app.use('/api/cars/list', (req, res, next) => {
//   console.log('get list');
//   next();
// });