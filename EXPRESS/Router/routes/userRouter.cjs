const path = require('path')

const expresss = require('express');
const userRouter = expresss.Router();



userRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
    
})

module.exports = userRouter;