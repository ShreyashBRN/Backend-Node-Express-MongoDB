const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeRoute = require('./Routes/homeRoute.cjs');
const contactRouter = require('./Routes/contactRouter.cjs');
const path = require('path')
const rootDir = require('./utils/pathUtils.cjs')

app.use(express.urlencoded());
app.use(homeRoute);
app.use(homeRoute)
app.use(contactRouter);
app.use((req, res, next) => {
     res.sendFile(path.join(rootDir, "views", "404.html"))
  
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT http://localhost:${PORT}`);
    
})