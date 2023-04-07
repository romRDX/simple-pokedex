import { addFavorite, removeFavorite, setSavedInitialState, FavoritesSlice } from '../../store/features/FavoritesSlice';
import { configureStore } from '@reduxjs/toolkit';
import { fakePokesData } from '../../__mocked__/mockedData';

const mockCallbackFunc = () => jest.fn();

describe('Store', () => {
  let fakeStore: any;
    
  beforeEach(() => {
    fakeStore = configureStore({
      reducer: {
        favorites: FavoritesSlice.reducer,
      }
    });
  });

  test('Should be able to access store data', () => {
    const state = fakeStore.getState().favorites;

    expect(state.favorites).toEqual([]);
  });

  test('Should be able to set the initial state', () => {
    const result = fakeStore.dispatch(setSavedInitialState([fakePokesData[0], fakePokesData[1]]));

    const state = fakeStore.getState().favorites;

    expect(result.payload).toEqual([fakePokesData[0], fakePokesData[1]]);
    expect(state.favorites).toEqual([fakePokesData[0], fakePokesData[1]]);
  });

  test('Should be able to add a favorite pokemon', () => {
    const result = fakeStore.dispatch(addFavorite({ poke: fakePokesData[0], callback: mockCallbackFunc}));

    const state = fakeStore.getState().favorites;

    expect(result.payload.poke).toEqual(fakePokesData[0]);
    expect(result.payload.callback).toEqual(mockCallbackFunc);
    expect(state.favorites).toEqual([fakePokesData[0]]);
  });

  test('Should be able to remove a favorite pokemon', () => {
    fakeStore.dispatch(addFavorite({ poke: fakePokesData[0], callback: mockCallbackFunc}));
    fakeStore.dispatch(addFavorite({ poke: fakePokesData[1], callback: mockCallbackFunc}));

    const state = fakeStore.getState().favorites;

    expect(state.favorites).toEqual([fakePokesData[0], fakePokesData[1]]);

    fakeStore.dispatch(removeFavorite({ poke: fakePokesData[0], callback: mockCallbackFunc}));

    const state2 = fakeStore.getState().favorites;

    expect(state2.favorites).toEqual([fakePokesData[1]]);
  });
});

