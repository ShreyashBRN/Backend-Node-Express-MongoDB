const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Hello from First middleware");
    next();
    
})
app.use((req, res, next) => {
    console.log("Hello from Second middleware");
    
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT http://localhost:${PORT}`);
    
})