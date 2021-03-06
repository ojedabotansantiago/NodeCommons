const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.send(carsList);
});

router.get('/id/:id', (req, res) => {
  const data = carsList.find((car) => car.id === parseInt(req.params.id));
  if (!data) {
    res.status(404);
    res.send({});
    return;
  }
  res.send(data);
});


const carsList = [
  {
    id: 1,
    Name: 'chevrolet chevelle malibu',
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Acceleration: 12,
    Year: '1970-01-01',
    Origin: 'USA',
  },
  {
    id: 2,
    Name: 'buick skylark 320',
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 3693,
    Acceleration: 11.5,
    Year: '1970-01-01',
    Origin: 'USA',
  },
  {
    id: 3,
    Name: 'plymouth satellite',
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 318,
    Horsepower: 150,
    Weight_in_lbs: 3436,
    Acceleration: 11,
    Year: '1970-01-01',
    Origin: 'USA',
  },
  {
    id: 4,
    Name: 'amc rebel sst',
    Miles_per_Gallon: 16,
    Cylinders: 8,
    Displacement: 304,
    Horsepower: 150,
    Weight_in_lbs: 3433,
    Acceleration: 12,
    Year: '1970-01-01',
    Origin: 'USA',
  },
  {
    id: 5,
    Name: 'ford torino',
    Miles_per_Gallon: 17,
    Cylinders: 8,
    Displacement: 302,
    Horsepower: 140,
    Weight_in_lbs: 3449,
    Acceleration: 10.5,
    Year: '1970-01-01',
    Origin: 'USA',
  },
  {
    id: 6,
    Name: 'ford galaxie 500',
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 429,
    Horsepower: 198,
    Weight_in_lbs: 4341,
    Acceleration: 10,
    Year: '1970-01-01',
    Origin: 'USA',
  },
];

module.exports = router;