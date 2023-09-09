import { Input, Button, Box, Text, Image, Stack, Card, CardBody, Heading, VStack } from "@chakra-ui/react"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchCard from './SearchCard';
import { SearchIcon } from "@chakra-ui/icons"
function SearchList() {
  const backend = 'https://movie-deploy-api.vercel.app'
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search)
  const query = searchQuery.get('query')
  const [flag, setFlag] = useState(false);
  const [end, setEnd] = useState(false);
  const [search, setSearch] = useState(query);
  const [pageNo, setPageNo] = useState(1);
  const [list, setList] = useState([])
  const fetch = async (query) => {
    const { data } = await axios.get(`${backend}/search?query=${query}&page=${pageNo}`)
    if (pageNo === 1 && data.results.length === 0) {
      setFlag(true);
    }
    if (data.results.length === 0) {
      setEnd(true);
    }
    if (pageNo === 1) {
      setList(data.results)
    }
    else {
      setList(prev => [...prev, ...data.results])
    }
  }
  useEffect(() => {
    fetch(query)
  }, [pageNo])
  useEffect(() => {
    const handleScroll = () => {
      const reachedBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;

      if (reachedBottom && !end) {
        setPageNo(prev => prev + 1);
      }

    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  function handleSearch() {
    if (search === '') {
      alert('Search cannot be empty')
      return;
    }
    setFlag(false);
    setEnd(false);
    setList([])
    setPageNo(1)
    navigate(`/search?query=${search}`)
    fetch(search)
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  if (list.length === 0 && !flag) {
    return <Text fontSize='2xl' textAlign='center'>Loading...</Text>
  }
  return (
    <div>
      <Box w={['90vw', '80vw']} m='auto auto' mt='3'>
        <Input
          maxW='70vw'
          bg='white'
          variant='outline'
          placeholder='Search for a movie...'
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          zIndex={1}
          value={search}
        />
        <Button colorScheme='blue' leftIcon={<SearchIcon />}
          onClick={(e) => handleSearch(e)}
        >Search</Button>
      </Box>
      <VStack>
        {(flag) ?
          <Text fontSize='2xl'>Movie you are looking for is not available. Try searching for other movies or check spelling.</Text>
          : list.map((e) =>
            <SearchCard key={e.id} data={e} />
          )}
      </VStack>
    </div>
  )
}

export default SearchList