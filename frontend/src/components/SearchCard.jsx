import React, { useState } from 'react'
import { Input, Button, Box, Text, Image, Stack, Card, CardBody, Heading, HStack } from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom'

function SearchCard({ data }) {
  return (
    <Box m='auto auto' w={['90vw', '80vw']}>
      <Link to={`/details/${data.id}`}>
        <Card
          bgColor='#e2e8f0'
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '150px' }}

            src={data.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}` : 'https://cdn3.vectorstock.com/i/1000x1000/93/57/movie-roll-reel-vector-19519357.jpg'}
            alt='Movie Poster'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{data.original_title}</Heading>
              <Text py='2'>
                {data.overview}
              </Text>
              <HStack>
                <Text as='b'>Release date:</Text>
                <Text>{`${data.release_date.slice(8)}-${data.release_date.slice(5,7)}-${data.release_date.slice(0,4)}`}</Text>
              </HStack>
            </CardBody>
          </Stack>
        </Card>
      </Link>
    </Box>
  )
}

export default SearchCard