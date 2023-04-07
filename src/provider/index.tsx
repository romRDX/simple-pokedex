import React from 'react';

import { store } from '../store';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';
import { PokeAPIProvider } from '../hooks/usePokeAPI';

type Props = {
  children?: React.ReactNode
};

const AppProvider: React.FC<Props> = ({ children }) => (
  <Provider store={store}>
    <PokeAPIProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </PokeAPIProvider>
  </Provider>
);

export default AppProvider;