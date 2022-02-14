// get / notes should  return the notes.html

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, '../../notes.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

// get should return index.html
// get /api/notes should read the db.json file
// 
