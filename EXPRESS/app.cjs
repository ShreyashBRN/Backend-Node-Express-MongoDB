
const express = require('express');
const app = express();
// const server = http.createServer(app)
app.use('/', (req, res, next) => {
    console.log("Came in First middleware ", req.url, req.method);
    // res.end("<p>Came from first middleware</p>");
    next()
})
app.use('/submit-details', (req, res, next) => {
    console.log("Came in Second middleware ", req.url, req.method);
    res.send("<p>Welcome to complete Coding Tutorial</p>")
})








const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT http://localhost:${PORT}`);
})