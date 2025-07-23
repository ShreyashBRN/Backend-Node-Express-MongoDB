const additionRequestHandler = (req, res) => {
    console.log("In addition request handler", req.url);
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        
        body.push(chunk);
    })
    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyOBJ = Object.fromEntries(params);
        console.log(bodyOBJ);
        
        const result = Number(bodyOBJ.num1) + Number(bodyOBJ.num2);
        console.log(result);
        res.setHeader('Content-Type', 'text/html');
         res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <h1> Your result is ${result}</h1>
      </body>
      </html>
    `);
        return res.end();
    })
}

module.exports = additionRequestHandler;