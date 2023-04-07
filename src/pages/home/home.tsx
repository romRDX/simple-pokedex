import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from '@chakra-ui/react';

const Home = () => {

  const navigate = useNavigate();

  return (
    <Box as="div">
      <Heading as="h1" fontSize={164} mt="25px">Pokedex</Heading>
      <Heading as="h2" fontSize={40} mt="40px" mb="40px">Welcome trainer!</Heading>

      <Button
        p="20px"
        fontSize="24px"
        color="#FFF"
        _hover={{ background: '#0075BE'}}
        background='#0A285F'
        onClick={() => navigate('/list')}
      >
        See the pokemons list here!
      </Button>
    </Box>
  );
};

export default Home;
