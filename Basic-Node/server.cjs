// const http = require('http');
const fs = require('fs');
const ServerRender = (req, res) => {
    console.log(req.url, req.method);

    if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Simple Form</title>
      </head>
      <body>
        <h2>Registration Form</h2>
        <form action="/Submitfor" method="POST">
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name" required><br><br>

          <label>Gender:</label><br>
          <input type="radio" id="male" name="gender" value="male" required>
          <label for="male">Male</label><br>
          <input type="radio" id="female" name="gender" value="female">
          <label for="female">Female</label><br><br>

          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
  return res.end();
    }

    else if (req.url.toLowerCase() === '/submitfor' && req.method == 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const params = new URLSearchParams(parseBody);
            // const jsonObject = {};
            // for(const[key, value] of params.entries()){
            //     jsonObject[key] = value;
            // }
            // console.log(jsonObject);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            
            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }

    res.write('<html>');
res.write('<head><title>Code code code!</title></head>');
res.write('<body><h1>This is Irrelevant</h1></body>');
res.write('</html>');
    res.end();
};

// const PORT = 3001;
// server.listen(PORT, () => {
//     console.log(`Server is running on PORT http://localhost:${PORT}`);
// });


module.exports = ServerRender;