import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="div" bg="#DFDFDF" h="60px" display="flex" alignItems="center" justifyContent="center">
      <Text as="p" fontSize="20px" fontWeight="bold">Pokedex</Text>
    </Box>
  );
};

export default Footer;
