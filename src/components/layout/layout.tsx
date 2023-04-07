import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';

type Props = {
  children?: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__content}>
        { children }
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
