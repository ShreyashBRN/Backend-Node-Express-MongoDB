const path = require('path')
const express = require('express');

const userRouter = express.Router();

// const rootDir = require("../utils/pathUtil.cjs");
const { registeredHomes } = require('./hostRouter.cjs');

userRouter.get('/', (req, res, next) => {
  console.log(registeredHomes);
  
  res.render('home.ejs', {registeredHomes: registeredHomes})
  
});

module.exports = userRouter;