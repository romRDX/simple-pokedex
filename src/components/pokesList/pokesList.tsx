import React, { ReactNode } from 'react';
import styles from './pokesList.module.scss';
import { PokeItem } from '../../types';
import PokesListItem from '../../components/pokesListItem/pokesListItem';

interface PokeListProps {
  header: ReactNode,
  pokesList: PokeItem[],
  selectedPoke?: PokeItem,
  setSelectedPoke?: React.Dispatch<React.SetStateAction<PokeItem | undefined>>,
  handleDeletePoke?(poke: PokeItem): void;
}

const PokesList = ({ header, pokesList, selectedPoke, setSelectedPoke, handleDeletePoke }: PokeListProps) => {
  return (
    <div className={styles['pokes-list']}>
      <div className={styles.list__header}>
        { header }
      </div>
      <ul>
        {
          pokesList && pokesList.map((poke) =>
            <PokesListItem
              key={poke.name}
              pokeData={poke}
              setSelectedPoke={setSelectedPoke}
              isSelected={poke.name === selectedPoke?.name}
              handleDeletePoke={handleDeletePoke}
            />
          )
        }
      </ul>
    </div>
  );
};

export default PokesList;