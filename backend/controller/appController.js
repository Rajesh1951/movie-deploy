const axios = require('axios')
require('dotenv').config();
module.exports.getTrending = async (req, res) => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  };
  const { data } = await axios.get(url, options)
  res.json(data)
}

module.exports.getPopular = async (req, res) => {
  const url = 'https://api.themoviedb.org/3/movie/popular';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`
      , mode: 'cors'
    },
  };
  const { data } = await axios.get(url, options)
  res.json(data)
}
module.exports.getSearch = async (req, res) => {
  const searchTerm = req.params.query;
  console.log(searchTerm)
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  };
  const { data } = await axios.get(url, options)
  res.json(data)
}

module.exports.getDetails = async (req, res) => {
  const movieId = req.params.id;
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    };
    const { data } = await axios.get(url, options)
    res.json(data)
  }
  catch (error) {
    res.json(error);
  }
}