const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to Pipeops NodeJS Deployment!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});