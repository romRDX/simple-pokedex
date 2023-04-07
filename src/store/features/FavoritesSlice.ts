import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokeItem } from '../../types';

interface FavoritesState {
  favorites: PokeItem[]
}

const initialState: FavoritesState = {
  favorites: [],
};

interface FavoriteReducersArgs {
  poke: PokeItem,
  callback(data: PokeItem[]): void,
}

export const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setSavedInitialState: (state, action: PayloadAction<PokeItem[]>) => {
      state.favorites = [...action.payload];
    },
    addFavorite: (state, action: PayloadAction<FavoriteReducersArgs>) => {
      const exists = state.favorites.find((item) => item.name === action.payload.poke.name);
      
      if(!exists){
        state.favorites.push(action.payload.poke);
        action.payload.callback(state.favorites);
      }
    },
    removeFavorite: (state, action: PayloadAction<FavoriteReducersArgs>) => {
      const newFavoritesList = state.favorites.filter((item) => item.name !== action.payload.poke.name);
      state.favorites = newFavoritesList;
      action.payload.callback(newFavoritesList);
    }
  }
});

export default FavoritesSlice.reducer;

export const { addFavorite, removeFavorite, setSavedInitialState } = FavoritesSlice.actions;