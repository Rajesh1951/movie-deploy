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
  const searchTerm = req.query.query;
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
// response
/*
{
  "adult": false,
  "backdrop_path": null,
  "belongs_to_collection": null,
  "budget": 0,
  "genres": [],
  "homepage": "",
  "id": 1137094,
  "imdb_id": null,
  "original_language": "es",
  "original_title": "Las cosas indefinidas",
  "overview": "Eva, a film editor, and her assistant Rami are working on a film about blind people. A melancholy reflection on cinema and images.",
  "popularity": 2.52,
  "poster_path": "/qIZaa0SV6bKPhgHPa4iKAhbhGOw.jpg",
  "production_companies": [],
  "production_countries": [
    {
      "iso_3166_1": "AR",
      "name": "Argentina"
    }
  ],
  "release_date": "2023-07-06",
  "revenue": 0,
  "runtime": 80,
  "spoken_languages": [
    {
      "english_name": "Spanish",
      "iso_639_1": "es",
      "name": "Español"
    }
  ],
  "status": "Released",
  "tagline": "",
  "title": "Undefined Things",
  "video": false,
  "vote_average": 0,
  "vote_count": 0
}
*/