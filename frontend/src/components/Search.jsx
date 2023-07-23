import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  function handleSearch() {
    if (search === '') {
      alert('Search cannot be empty')
    }
    navigate(`/search?query=${search}`)
  }
  return (
    <Flex id="search-box"
      bgImage="url('https://png.pngtree.com/thumb_back/fh260/background/20191113/pngtree-blue-movie-film-texture-background-image_321897.jpg')"
      h='30vh'
      justifyContent='center'
      alignItems='center'
    >
      <Input
        maxW='80vw'
        bg='white'
        variant='outline'
        placeholder='Search for a movie...'
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <Button colorScheme='blue' leftIcon={<SearchIcon />}
        onClick={(e) => handleSearch(e)}
      >Search</Button>
    </Flex>
  )
}

export default Search