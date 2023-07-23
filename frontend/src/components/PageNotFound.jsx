import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="gray"
    >
      <Heading fontSize="6xl" color="red">
        404
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" mt={4}>
        Oops! Page not found.
      </Text>
      <Text fontSize="lg" color="gray" mt={2}>
        The page you are looking for might have been removed or does not exist.
      </Text>
      <Link to='/'>
        <Button
          colorScheme="teal"
          mt={6}
        >
          Go Back Home
        </Button>
      </Link>
    </Flex>
  );
};

export default PageNotFound;
