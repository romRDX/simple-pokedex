import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { usePokeAPI, PokeAPIProvider } from '../../hooks/usePokeAPI';

// tentei mockar o fetch para testar o retorno da requisição, mas também não deu muito certo

describe('usePokeAPI hook', () => {

  //   beforeEach(() => {
  //     fetch.resetMocks();
  //   });

  test('Should be able to use PokeAPI hook', () => {
  
    const { result } = renderHook(() => usePokeAPI(), {
      wrapper: PokeAPIProvider,
    });    
    
    expect(typeof result.current.currentPage).toBe('number');
    expect(typeof result.current.pokesList).toBe('object');
    expect(typeof result.current.nextPage).toBe('function');
    expect(typeof result.current.previousPage).toBe('function');
    
    // pokesList, nextPage, previousPage, currentPage:
  });
    
  test('Should be able to go to next page', () => {
    
    const { result } = renderHook(() => usePokeAPI(), {
      wrapper: PokeAPIProvider,
    });
    
    act(() => {
      result.current.nextPage();
    });
    
    expect(result.current.currentPage).toBe(2);
  });

  test('Should be able to go to previous page', () => {
    
    const { result } = renderHook(() => usePokeAPI(), {
      wrapper: PokeAPIProvider,
    });
    
    act(() => {
      result.current.nextPage();
      result.current.nextPage();
      result.current.nextPage();
      result.current.previousPage();
    });

    // fetch.mockResponse(JSON.stringify({ rates: { CAD: 1.42 } }));
    // console.log('ASD: ', result.current.pokesList);
    
    expect(result.current.currentPage).toBe(3);
  });
});