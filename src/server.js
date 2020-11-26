const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', function (req, res) {
  const pathToHtml = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtml = fs.readFileSync();
});

app.listen(3000, function () {
  console.log('Application is runningon http://localhost:3000');
});
