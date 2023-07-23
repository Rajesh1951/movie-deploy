import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Image, HStack, VStack, Heading, Text, Badge, Link } from '@chakra-ui/react'
import axios from 'axios'
function MovieDetails() {
  const { id } = useParams();
  const backend = 'http://localhost:400'
  const [data, setData] = useState({});
  const fetch = async () => {
    const { data } = await axios.get(`${backend}/details/${id}`);
    setData(data);
  }
  useEffect(() => {
    fetch();
  }, [])
  if (Object.keys(data).length === 0) {
    return "Loading ..."
  }
  return (
    <Box bg='#1a202c' color='#cbd5e0' minH='89vh' p='2'>
      <Box w={['90vw', '80vw']} m='auto auto' >
        <HStack minH='60vh' >
          <Image
            boxSize='lg'
            objectFit='cover'
            src={data.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}` : 'https://cdn3.vectorstock.com/i/1000x1000/93/57/movie-roll-reel-vector-19519357.jpg'}
            alt='movie poster'
          />
          <VStack
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
          >
            <Heading color='white'>{data.original_title}({data.release_date.slice(0, 4)})</Heading>
            <Text fontSize='lg' as='b'color='white'>Overview</Text>
            <Text>{data.overview}</Text>
            <Text as='b' color='white'>User Score :<Text display='inline' fontSize='md' color='white'>{Math.floor(data.vote_average * 10)}%</Text></Text>
            <HStack>
              <Text as='b' display={'inline'}color='white'>Budget :</Text>
              <Text as='sam' display={'inline'}>${data.budget}</Text>
            </HStack>
            <HStack>
            <Text as='b'color='white'>Genres :</Text>
              {data.genres.map((e) =>
                <Badge variant='solid' bg='green'>
                  {e.name}
                </Badge>
              )}
            </HStack>
            {data.homepage &&
              <HStack>
                <Text as='b' display={'inline'} color='white'>Wesite : </Text>
                <Link as='sam' display={'inline'}>{data.homepage}</Link>
              </HStack>
            }
            <HStack>
                <Text as='b' color='white'>Release date : </Text>
                <Text>{`${data.release_date.slice(8)}-${data.release_date.slice(5,7)}-${data.release_date.slice(0,4)}`}</Text>
              </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  )
}

export default MovieDetails
/*
{
  "adult": false,
  "backdrop_path": "/xGIeqQunSj5dxGZVKzNNr9W4vps.jpg",
  "belongs_to_collection": null,
  "budget": 190000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": "https://www.dc.com/theflash",
  "id": 298618,
  "imdb_id": "tt0439572",
  "original_language": "en",
  "original_title": "The Flash",
  "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
  "popularity": 5813.664,
  "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
  "production_companies": [
    {
      "id": 174,
      "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      "name": "Warner Bros. Pictures",
      "origin_country": "US"
    },
    {
      "id": 152809,
      "logo_path": null,
      "name": "Double Dream",
      "origin_country": "US"
    },
    {
      "id": 170335,
      "logo_path": null,
      "name": "The Disco Factory",
      "origin_country": "US"
    },
    {
      "id": 128064,
      "logo_path": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
      "name": "DC Films",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2023-06-13",
  "revenue": 267481043,
  "runtime": 144,
  "spoken_languages": [
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "Spanish",
      "iso_639_1": "es",
      "name": "Español"
    },
    {
      "english_name": "Russian",
      "iso_639_1": "ru",
      "name": "Pусский"
    }
  ],
  "status": "Released",
  "tagline": "Worlds collide.",
  "title": "The Flash",
  "video": false,
  "vote_average": 6.92,
  "vote_count": 1365
}
*/