import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios'
import MovieCard from './MovieCard'
import { Box, Flex, Heading } from "@chakra-ui/react"
function Home() {
  const backend = 'https://movie-search-cb0s.onrender.com'
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
      setTrendingList(data.results)
    }
    fetch();
  }
  useEffect(() => {
    fetchTrending();
    fetchPopular();
  }, [])
  return (
    <Box >
      <div id="container">
        <Search />
        <Box maxW='80vw' m='auto auto'>
          <Heading>Trending Movies</Heading>
          <Box id="trending" overflowX='auto' sx={{ scrollbarWidth: 'none', '::-webkit-scrollbar': { display: 'none' } }}>
            <Flex direction='row'>
              {trendingList.map((e) =>
                <MovieCard key={e.id} data={e} />
              )}
            </Flex>
          </Box>
        </Box>
        <Box maxW='80vw' m='auto auto'>
          <Heading>Popular Movies</Heading>
          <Box id="popular" overflowX='auto' sx={{ scrollbarWidth: 'none', '::-webkit-scrollbar': { display: 'none' } }}>
            <Flex direction='row'>
              {popularList.map((e) =>
                <MovieCard key={e.id} data={e} />
              )}
            </Flex>
          </Box>
        </Box>
      </div>
    </Box>
  )
}

export default Home