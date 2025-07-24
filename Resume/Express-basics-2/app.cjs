const express = require('express');
const app = express();

app.use('/',(req, res, next) => {
    console.log("Hello from First middleware");
//     res.send(`
//     <h1>Welcome to the Backend Server</h1>
//     <p>Click below to submit your data:</p>
//     <a href="/submit">Submit</a>
//   `);
next();
    
    
})
app.use('/submit',(req, res, next) => {
    console.log("Hello from Second middleware");
    next()
    
    
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT http://localhost:${PORT}`);
    
})