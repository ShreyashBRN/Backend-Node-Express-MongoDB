const express = require('express')
const app = express();
const userRouter = require('./Router/userRouter.cjs')
const hostRouter = require('./Router/hostRouter.cjs')

const rootDir = require("./utils/pathUtil.cjs")/

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);

app.use("/host", hostRouter);



app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT http://localhost:${PORT}`);  
});























































// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use((req, res, next) => {
//     console.log("This is first dummy middleware",req.url);
//     next();
// })

// app.use((req, res, next) => {
//     console.log("This is second dummy middleware");
//     next();
// })

// // app.use((req, res, next) => {
// //     res.send("<h1> Welcome to complete coding </h1>");
// // })
// app.use(express.urlencoded({ extended: true }));

// app.get('/',(req, res, next) => {
//     res.send(`
//     <html>
//       <head>
//         <title>Welcome</title>
//         <style>
//           body { font-family: Arial, sans-serif; text-align: center; padding-top: 50px; }
//           a { text-decoration: none; color: white; background-color: #007BFF; padding: 10px 20px; border-radius: 5px; }
//           a:hover { background-color: #0056b3; }
//         </style>
//       </head>
//       <body>
//         <h1>Welcome to Our Website</h1>
//         <p>Click the button below to visit the contact page.</p>
//         <a href="/contact-us">Go to Contact Page</a>
//       </body>
//     </html>
//   `)
// })

// app.get('/contact-us', (req, res, next) => {
//     res.send(`
//     <html>
//       <head>
//         <title>Contact Us</title>
//         <style>
//           body { font-family: Arial, sans-serif; text-align: center; padding-top: 50px; }
//           form { display: inline-block; text-align: left; }
//           label, input { display: block; margin: 10px 0; width: 100%; }
//           input[type="text"], input[type="email"] { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
//           input[type="submit"] { padding: 10px 20px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; }
//           input[type="submit"]:hover { background-color: #218838; }
//         </style>
//       </head>
//       <body>
//         <h1>Contact Us</h1>
//         <form action="/contact-us" method="POST">
//           <label for="name">Name:</label>
//           <input type="text" id="name" name="name" required />

//           <label for="email">Email:</label>
//           <input type="email" id="email" name="email" required />

//           <input type="submit" value="Submit" />
//         </form>
//         <br />
//         <a href="/">Back to Home</a>
//       </body>
//     </html>
//   `)
// })


// app.post('/contact-us', (req, res, next) => {
//     const {name, email} = req.body;
//     res.send(`Form is submitted Name:${name} and Email:${email}`);
    
// })


// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on the PORT http://localhost:${PORT}`);  
// });