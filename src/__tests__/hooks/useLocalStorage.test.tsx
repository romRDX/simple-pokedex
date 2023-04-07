import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useCallback } from 'react';
import { fakePokesData } from '../../__mocked__/mockedData';

// aqui eu tentei mockar o localStorage, mas dai o useCallback deu problema pra mockar, dai tbm não rolou

jest.mock('react');

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('usePokeAPI hook', () => {

  //   beforeEach(() => {
  //     fetch.resetMocks();
  //   });

  test('Should be able to use PokeAPI hook', () => {
  
    useCallback.mockReturnValue(() => {
      // localStorage.setItem('favorites-pokemons', JSON.stringify(fakePokesData));
      return 5;
    });

    const { handleSaveFavorites } = useLocalStorage();
    
    handleSaveFavorites(fakePokesData);

    useCallback.mockReturnValue(() => {
      localStorage.setItem('favorites-pokemons', JSON.stringify(fakePokesData));
    });
    
  });
});