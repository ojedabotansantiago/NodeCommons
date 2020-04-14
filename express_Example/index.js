const express = require('express');
const app = express(express.json());

const cValidators = require('js_regex_librarie');
cValidators.emailValidator('asd@asd.com');
/* middleware */
cacheMiddleWare = require('./midelwares/cacheMidelWare');
app.use(cacheMiddleWare.cacheManager());
/* modules */
const apiCars = require('./routes/api_cars');
app.use('/api/cars/', apiCars);

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
