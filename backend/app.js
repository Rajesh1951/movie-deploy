const express = require('express');
require('dotenv').config();
const axios = require('axios')
const app = express();
const router = require('./routes/appRoutes')
app.use(router);
app.get('/', (req, res) => {
  const datafun = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular';
    const { data } = await axios.get(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    })
    console.log(data)
  }
  // datafun()
  res.send("Hi from express");
})


app.listen(400, () => {
  console.log('listening at 400')
})