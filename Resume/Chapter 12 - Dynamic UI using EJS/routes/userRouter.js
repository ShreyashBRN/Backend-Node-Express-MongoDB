// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();
const homesController = require("../controllers/homes.cjs");

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;