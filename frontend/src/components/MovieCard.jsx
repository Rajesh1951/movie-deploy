import React from 'react'
import { Badge, Heading, Card, Stack, Image, Text, CardBody, HStack, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function MovieCard({ data }) {
  return (
    <Box >
      <Link to={`details/${data.id}`}>
        <Card
          minW={['40vw', '30vw', '20vw']}
          minH={['30vh', '20vh']}
        >
          <CardBody>
            <Image
              src={data.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}` : 'https://cdn3.vectorstock.com/i/1000x1000/93/57/movie-roll-reel-vector-19519357.jpg'}
              alt={`${data.original_title}`}
              borderRadius='lg'
            />
            <Badge variant='solid' fontSize='1em' colorScheme='green' m='0' mt='-6' ml='0'>
              {Math.floor(data.vote_average * 10)}%
            </Badge>
            <Stack mt='0' spacing='2'>
              <Heading size={['sm', 'md']}>{data.original_title}</Heading>
              <HStack>
              <Text>{`${data.release_date.slice(8)}-${data.release_date.slice(5,7)}-${data.release_date.slice(0,4)}`}</Text>                
              </HStack>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </Box >
  )
}

export default MovieCard