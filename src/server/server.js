import dotenv from 'dotenv';
const express = require('express');

const app = express();
dotenv.config();

const { PORT, ENV } = process.env;

app.get('*', (req, res) => {
  res.send({ 'hola': 'mundo' });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log('the server listening on port http://localhost:3000');
});
