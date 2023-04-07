import React from 'react';
import { usePokeAPI } from '../../hooks/usePokeAPI';
import styles from './pagination.module.scss';

const Pagination = () => {

  const { currentPage, nextPage, previousPage } = usePokeAPI();

  return (
    <div className={styles.pagination}>
      <button onClick={previousPage}>Previous</button>
      <div>{ currentPage }</div>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
