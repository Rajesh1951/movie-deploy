import React from 'react'
import { Badge, Heading, Card, Stack, Image, Text, CardBody } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function MovieCard({ data }) {
  return (
    <Link to={`details/${data.id}`}>
      <Card
        minW={['40vw', '30vw', '20vw']}
        minH={['30vh', '20vh']}
      >
        <CardBody>
          <Image
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
            alt={`${data.original_title}`}
            borderRadius='lg'
          />
          <Badge variant='solid' fontSize='1em' colorScheme='green' m='0' mt='-6' ml='0'>
            {data.vote_average * 10}%
          </Badge>
          <Stack mt='0' spacing='2'>
            <Heading size={['sm', 'md']}>{data.original_title}</Heading>
            <Text>
              {data.release_date}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  )
}

export default MovieCard