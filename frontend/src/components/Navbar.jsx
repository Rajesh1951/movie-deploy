import { Box, Button, HStack, Heading, List, Menu, MenuButton, MenuItem, MenuList, Show, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{ top: '0', position: 'sticky', zIndex: '1' }}>
      <HStack h='20' bg='black' color='white' justifyContent='space-between' pr='5'>
        <Link to={"/"} >
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='6xl'
          >
            Movie Search
          </Text>
        </Link>
        <Box w='30' dir='row' justifyContent='space-evenly' >
          <Show below='425px'>
            <Menu >
              <MenuButton as={Button} ><HamburgerIcon size={['lg']} /></MenuButton>
              <MenuList>
                <Link to={"/"} >
                  <MenuItem>
                    Home
                  </MenuItem>
                </Link>
                <Link to={'/about'}>
                  <MenuItem>
                    About
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Show>
          <Show above='425px'>
            <HStack flexWrap='wrap'>
              <Text fontSize={['md', 'lg', 'xl', '3xl']}><Link to={"/"} >Home</Link></Text>
              <Text fontSize={['md', 'lg', 'xl', '3xl']}><Link to={"/about"} >About</Link></Text>
            </HStack>
          </Show>
        </Box>
      </HStack>
    </div>
  )
}

export default Navbar