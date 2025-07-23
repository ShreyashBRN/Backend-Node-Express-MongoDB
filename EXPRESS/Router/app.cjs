const path = require('path')

const express = require('express');

const userRouter = require("./routes/userRouter.cjs")
const hostRouter = require("./routes/hostRouter.cjs")

const app = express();
const rootDir = require('./utils/pathUtils.cjs')

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port is running on http://localhost:${PORT}`);
    
})