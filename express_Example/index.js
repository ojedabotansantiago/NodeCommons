const express = require('express');
const app = express(express.json());

//const apiCars = require('./Apis/Api_Cars');

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

gethome = () => {
  app.get('/', (req, res) => {
    res.send('Hello App!');
  });
};

app.get('/api/cars/list', (req, res) => {
  res.send(cars);
});


