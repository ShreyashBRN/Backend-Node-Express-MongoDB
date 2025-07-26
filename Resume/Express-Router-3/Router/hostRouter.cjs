const path = require('path')
const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil.cjs")


hostRouter.get('/add-home', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','add-home.html'));
});


const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
  console.log("Home registered successfully!", req.body, req.body.hoiseName);
  registeredHomes.push({hoiseName: req.body.hoiseName})
  res.sendFile(path.join(rootDir, 'views','home-added.html'));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;