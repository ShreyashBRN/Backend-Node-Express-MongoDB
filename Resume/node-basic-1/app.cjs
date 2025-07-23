const http = require('http');
const fs = require('fs')
const requestHandler = require('./request.cjs');
const server = http.createServer(requestHandler);
// console.log(req.url);
// if(req.url === '/'){
//     res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write(`
//   <h1>Registration Form</h1>
//   <form action="/submit" method="POST">
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name" required><br><br>

//     <label>Gender:</label>
//     <input type="radio" id="male" name="gender" value="male" required>
//     <label for="male">Male</label>
    
//     <input type="radio" id="female" name="gender" value="female">
//     <label for="female">Female</label><br><br>

//     <button type="submit">Submit</button>
//   </form>
// `);
// return res.end();
// } else if(req.url.toLowerCase() === '/submit' && req.method == "POST"){
// fs.writeFileSync('user.txt', 'Prashagggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggnt-Jain');
// res.statusCode = 302;
// res.setHeader('Location', 'https://iamankitsrivastava.com/')
// return res.end();
// }
// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write(`
//   <h1>Welcome to Our Website</h1>
// `);
// res.end();



// })


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on the server http://localhost:${PORT}`);
    
})