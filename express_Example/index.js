const express = require('express');
const app = express(express.json());
const apiCars = require('./routes/api_cars');
app.use('/api/cars/', apiCars);
/* middleware*/
// app.use((req, res, next) => {
//   console.log('time', Date.now());
//   next();
// });

// app.use('/api/cars/list', (req, res, next) => {
//   console.log('get list');
//   next();
// });

/*
 * in case use environment port OS W10 = set port XXX
 */
const port = process.env.PORT || 2021;
app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port}!`);
});


app.get('/', (req, res) => {
  res.send('Hello App!');
});




