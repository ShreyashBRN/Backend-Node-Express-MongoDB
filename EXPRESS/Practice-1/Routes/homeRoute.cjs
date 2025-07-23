const path = require('path')
const express = require('express')
const rootDir = require('../utils/pathUtils.cjs')
const homeRoute = express.Router();


homeRoute.get('/', (req, res, next) => {
    console.log("Handling / for GET", req.url, req.method);
   res.sendFile(path.join(rootDir, "views", "homee.html"))
})

module.exports = homeRoute;