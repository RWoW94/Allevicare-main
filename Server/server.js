const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// ✅ Connect to MongoDB

// ✅ Middleware
app.use(express.static(path.join(__dirname, '../Html'))); // Already serving Html
app.use('/Styles', express.static(path.join(__dirname, '../Styles')));
app.use('/img', express.static(path.join(__dirname, '../img')));
app.use('/Script', express.static(path.join(__dirname, '../Script')));

  
app.get('/username', (req, res) => {
  res.sendFile(path.join(__dirname, '../Html/home.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
