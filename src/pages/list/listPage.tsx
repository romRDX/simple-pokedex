import React, { useCallback, useState, useEffect } from 'react';
import styles from './listPage.module.scss';
import { usePokeAPI } from '../../hooks/usePokeAPI';
import { RootState, useAppDispatch } from '../../store';
import { addFavorite, removeFavorite, setSavedInitialState } from '../../store/features/FavoritesSlice';
import { useSelector } from 'react-redux';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { PokeItem } from '../../types';
import Pagination from '../../components/pagination/pagination';
import PokesList from '../../components/pokesList/pokesList';

const ListPage = () => {
  const { pokesList } = usePokeAPI();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const dispatch = useAppDispatch();
  const { handleSaveFavorites, handleGetFavorites } = useLocalStorage();

  const [selectedPoke, setSelectedPoke] = useState<PokeItem>();

  useEffect(() => {
    const pokeList = handleGetFavorites();
    
    if(pokeList){
      dispatch(setSavedInitialState(pokeList));
    }
  }, []);

  const handleAddFavorite = () => {
    if(selectedPoke){
      dispatch(addFavorite({ poke: selectedPoke, callback: handleSaveFavorites }));
      setSelectedPoke(undefined);
    }
  };

  const handleRemoveFavorite = useCallback((poke: PokeItem) => {
    dispatch(removeFavorite({poke, callback: handleSaveFavorites }));
  },[dispatch, handleSaveFavorites]);

  return (
    <div className={styles.list}>
      <h1>List</h1>

      <PokesList
        pokesList={favorites}
        handleDeletePoke={handleRemoveFavorite}
        header={<h2>My favorite pokemons</h2>}
      />

      <PokesList
        pokesList={pokesList}
        selectedPoke={selectedPoke}
        setSelectedPoke={setSelectedPoke}
        header={<Pagination />}
      />

      <button className={styles['list__add-favorite']} onClick={handleAddFavorite}>
        ADD TO FAVORITE
      </button>
    </div>
  );
};

export default ListPage;
