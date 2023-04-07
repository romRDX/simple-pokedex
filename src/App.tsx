import React, { useEffect } from 'react';
import './App.css';
import AppProvider from './provider';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/layout';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
