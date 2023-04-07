import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import ListPage from '../pages/list/listPage';

const RoutesConfig: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list" element={<ListPage />} />
  </Routes>
);

export default RoutesConfig;