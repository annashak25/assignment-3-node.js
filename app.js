// importing express module
const express = require('express');
// initialzing express application
const app = express();
// declaring the port
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

// defining the route for submitting the form
app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    if (!username || username.trim() == "")
    {
    res.send ('Username not given. ')
    }
    else
    {
    res.send(`Username is ${username}`);
    }
});

// running the code on the port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
