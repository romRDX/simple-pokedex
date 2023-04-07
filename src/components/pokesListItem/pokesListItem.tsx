import React from 'react';
import styles from './pokesListItem.module.scss';
import { PokeItem } from '../../types';

interface PokeListItemProps {
  pokeData: PokeItem,
  isSelected?: boolean,
  setSelectedPoke?: React.Dispatch<React.SetStateAction<PokeItem | undefined>>,
  handleDeletePoke?(poke: PokeItem): void;
}

const PokesListItem = ({ pokeData, isSelected, setSelectedPoke, handleDeletePoke }: PokeListItemProps) => {
  return (
    <li
      key={pokeData.name}
      className={ isSelected ? styles['pokes-list-item--selected'] : styles['pokes-list-item'] }
      onClick={ setSelectedPoke && (() => setSelectedPoke(pokeData))}
      data-testid="pokes-list-item"
    >
      <p>{pokeData.name}</p>
      {
        handleDeletePoke && (
          <button onClick={() => handleDeletePoke(pokeData) } data-testid="pokes-list-item-delete-button" >X</button>
        )
      }
    </li>
  );
};

export default PokesListItem;
