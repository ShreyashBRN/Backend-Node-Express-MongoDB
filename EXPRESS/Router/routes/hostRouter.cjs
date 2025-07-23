const path = require('path')
const expresss = require('express');
const hostRouter = expresss.Router();

hostRouter.get('/add-home', (req, res, next) => {
       res.sendFile(path.join(__dirname, '../', 'views', 'add-home.html'));
   
    
})
hostRouter.post('/add-home', (req, res, next) => {
    console.log(req.body);
        res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'));
    
    
})


module.exports = hostRouter;