import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios'
import MovieCard from './MovieCard'
import { Box, Flex, Heading } from "@chakra-ui/react"
function Home() {
  const backend = 'http://localhost:400'
  const [popularList, setPopularList] = useState([])
  function fetchPopular() {
    const fetch = async () => {
      const { data } = await axios.get(`${backend}/popular`)
      setPopularList(data.results)
    }
    fetch();
  }
  const [trendingList, setTrendingList] = useState([])
  function fetchTrending() {
    const fetch = async () => {
      const { data } = await axios.get(`${backend}/trending`)
      console.log(data.results)
      setTrendingList(data.results)
    }
    fetch();
  }
  useEffect(() => {
    fetchPopular();
    fetchTrending();
  }, [])
  return (
    <div>
      <div id="container">
        <Search />
        <Box maxW='80vw' m='auto auto'>
          <Heading>Trending Movies</Heading>
          <Box id="trending" overflowX='auto' sx={{ scrollbarWidth: 'none', '::-webkit-scrollbar': { display: 'none' } }}>
            <Flex direction='row'>
              {trendingList.map((e) =>
                <MovieCard data={e} />
              )}
            </Flex>
          </Box>
        </Box>
        <Box maxW='80vw' m='auto auto'>
          <Heading>Popular Movies</Heading>
          <Box id="popular" overflowX='auto' sx={{ scrollbarWidth: 'none', '::-webkit-scrollbar': { display: 'none' } }}>
            <Flex direction='row'>
              {popularList.map((e) =>
                <MovieCard data={e} />
              )}
            </Flex>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Home