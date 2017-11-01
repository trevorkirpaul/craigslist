const express = require('express');
const app = express();
const livereload = require('livereload');
const server = livereload.createServer();

//livereload
server.watch('public');

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server created...');
})