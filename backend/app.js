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