const express = require('express');
const beerRouter = express.Router();


beerRouter.get('/', (req, res) => {
  res.send('(Pretend you just got a list of beers!)')
})

beerRouter.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Saved your ${req.body.name} to the DB!`)
})

beerRouter.use('/', (req, res) => {
  res.send("Beer router is working!");
});



module.exports = beerRouter;