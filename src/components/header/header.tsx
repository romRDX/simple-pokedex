import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List, ListItem, Text } from '@chakra-ui/react';

const Header = () => {

  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="row" as='header' bg="#DFDFDF" p="15px">
      <List display="flex" flexDirection="row" gap="10" pl="20">
        <ListItem
          display="flex"
          alignItems="center"
          onClick={() => navigate('/')}
          cursor="pointer"
        >
          <img src='/pokeball.png' />
          <Text as="p" ml="3">Home</Text>
        </ListItem>
        <ListItem
          display="flex"
          alignItems="center"
          onClick={() => navigate('/list')}
          cursor="pointer"
        >
          <img src='/pokeball.png' />
          <Text as="p" ml="3">List</Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
