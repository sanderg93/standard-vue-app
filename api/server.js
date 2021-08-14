const express = require('express');
const path = require('path');
const app = express(),
      port = 3080;

// place holder for the data
const users = [];

app.use(express.static(path.join(__dirname, '../app/dist')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../app/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});