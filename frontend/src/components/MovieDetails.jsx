import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Image, HStack, VStack, Heading, Text, Badge, Link, Flex } from '@chakra-ui/react'
import axios from 'axios'
function MovieDetails() {
  const { id } = useParams();
  const backend = 'https://movie-search-cb0s.onrender.com'
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
      <Box w={['100vw','90vw', '80vw']} m='auto auto' >
        <Flex minH='60vh' flexDir={{base:'column',sm:'column',md:'row'}}>
          <Image
            boxSize='lg'
            objectFit='cover'
            src={data.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}` : 'https://cdn3.vectorstock.com/i/1000x1000/93/57/movie-roll-reel-vector-19519357.jpg'}
            alt='movie poster'
            mr='1'
          />
          <VStack
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
          >
            <Heading color='white'>{data.original_title}({data.release_date.slice(0, 4)})</Heading>
            <Text fontSize='lg' as='b' color='white'>Overview</Text>
            <Text>{data.overview}</Text>
            <Text as='b' color='white'>User Score :<Text display='inline' fontSize='md' color='white'>{Math.floor(data.vote_average * 10)}%</Text></Text>
            <HStack>
              <Text as='b' display={'inline'} color='white'>Budget :</Text>
              <Text as='sam' display={'inline'}>${data.budget}</Text>
            </HStack>
            <HStack>
              <Text as='b' color='white'>Genres :</Text>
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
              <Text>{`${data.release_date.slice(8)}-${data.release_date.slice(5, 7)}-${data.release_date.slice(0, 4)}`}</Text>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default MovieDetails