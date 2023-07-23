import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { Heading, Box, Text, VStack, HStack } from '@chakra-ui/react'

function About() {
  return (
    <Box mt="2">
      <Box px='2'>
        <Heading as='b' pt='3' mb='4'>About the Website</Heading>
        <Text  >
          This website is developed solely for interview assignment & learning purposes.
        </Text>
        <Text as='b' mb='3' fontSize='3xl'>Technologies used</Text>
        <Box ml="2">
          <Text mb="2" fontSize='2xl' as='b'>Frontend:</Text>
          <HStack>
            <VStack justifyContent='center' alignItems='center'>
              <Box><FaReact className="text-1xl md:text-3xl lg:text-6xl"
                size={80} style={{ color: '#61DAFB' }} /></Box>
              <Box >React JS</Box>
            </VStack>
            <VStack justifyContent='center' alignItems='center'>
              <Box><BsFillLightningChargeFill size={80} style={{ color: 'green' }} /></Box>
              <Box>Chakra UI</Box>
            </VStack>
          </HStack>
          <Text mb="2" fontSize='2xl' as='b'>Backend:</Text>
          <HStack>
          <VStack justifyContent='center' alignItems='center'>
              <Box><IoLogoNodejs size={80} style={{ color: '#339933' }} /></Box>
              <Box >Node JS</Box>
            </VStack>
            <VStack justifyContent='center' alignItems='center'>
              <Box><SiExpress size={80} style={{ color: '#339933' }} /></Box>
              <Box >Express JS</Box>
            </VStack>
          </HStack>
        </Box>
      </Box >
    </Box>
  )
}

export default About