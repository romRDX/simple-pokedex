import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { PokeItem } from '../types';

interface PokesContextData {
  pokesList: PokeItem[],
  currentPage: number,
  nextPage(): void,
  previousPage(): void,
}

const PokesContext = createContext<PokesContextData>({} as PokesContextData);

type Props = {
  children?: React.ReactNode
};

export const PokeAPIProvider: React.FC<Props> = ({ children }) => {
  const [offset, setOffset] = useState<number>(0);
  const [pokesList, setPokesList] = useState<PokeItem[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setPokesList(data.results);
      });
  }, [offset]);

  const nextPage = useCallback(() => {
    setOffset(prev => prev+20);
  }, []);

  const previousPage = useCallback(() => {
    setOffset(prev => {
      if(prev >= 20){
        return prev-20;
      } else {
        return prev;
      }
    });
  }, []);

  return (
    <PokesContext.Provider value={{ pokesList, nextPage, previousPage, currentPage: (offset/20)+1 }}>
      { children }
    </PokesContext.Provider>
  );
};

export function usePokeAPI(): PokesContextData {
  const context = useContext(PokesContext);

  return context;
}

