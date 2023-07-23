const express = require('express');
const cors = require('cors')
require('dotenv').config();
const axios = require('axios')
const app = express();
app.use(express.json());
const router = require('./routes/appRoutes')
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(router);
app.get('/', (req, res) => {
  res.send("Hi from express");
})


app.listen(400, () => {
  console.log('listening at 400')
})