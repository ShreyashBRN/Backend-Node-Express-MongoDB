
const additionRequestHandler = require('./addition.cjs');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <p><a href="/calculator">Go to Calculator</a></p>
      </body>
      </html>
    `);
    return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator'){
        res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Here is the Calculator</h1>
        <form action="/calculate-result" method="POST">
          <input type="number" name="num1" placeholder="Enter first number" required />
          <input type="number" name="num2" placeholder="Enter second number" required />
          <input type="submit" value="Sum">
        </form>
      </body>
      </html>
    `);
    return res.end();
    }
    else if(req.url.toLowerCase() === '/calculate-result' && req.method == 'POST'){
      return additionRequestHandler(req, res);
    }

    res.setHeader('Content-Type', 'text/html');
        res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <h1> NOTfound!!the Home Page</h1>
        <p><a href="/">Go to Home</a></p>
      </body>
      </html>
    `);
       return res.end();
    
}

module.exports = requestHandler;