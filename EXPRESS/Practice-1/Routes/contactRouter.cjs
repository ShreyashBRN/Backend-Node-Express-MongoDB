const path = require('path')
const express = require('express')
const rootDir = require('../utils/pathUtils.cjs')
const contactRouter = express.Router();

contactRouter.get('/contact-us', (req, res, next) => {
     res.sendFile(path.join(rootDir, "views", "contact-us.html"))
  
});


contactRouter.post('/contact-us', (req, res, next) => {
    console.log(req.body);
    
      res.sendFile(path.join(rootDir, "views", "contact-succe.html"))
   
})

module.exports = contactRouter;