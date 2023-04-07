import React, { useCallback } from 'react';
import { PokeItem } from '../types';

export const useLocalStorage = () => {

  const handleSaveFavorites = useCallback((list: PokeItem[]) => {
    localStorage.setItem('favorites-pokemons', JSON.stringify(list));
  }, []);

  const handleGetFavorites = useCallback(() => {
    const pokeList = localStorage.getItem('favorites-pokemons');
    return pokeList ? JSON.parse(pokeList) : [];
  }, []);

  return { handleSaveFavorites, handleGetFavorites};
};