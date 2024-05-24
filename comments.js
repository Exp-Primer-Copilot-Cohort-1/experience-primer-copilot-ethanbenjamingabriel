// Create web server
// Run the server
// Go to localhost:3000

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the root route');
});

app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});