const express = require('express'); 
const app = express(); 
const bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

//Route to the Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });

  // Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });
  
  // Route to Login Page
  app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html');
  });

  app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });

  const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));