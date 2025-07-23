const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  fs.readFile('counter.txt', 'utf8', (err, data) => {
    if (err) {
      return res.end("Error reading file");
    }

    let count = parseInt(data) || 0;
    count++;

    fs.writeFile('counter.txt', count.toString(), (err) => {
      if (err) {
        return res.end("Error in writing file");
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This site has been visited ${count} times.`);
    });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
