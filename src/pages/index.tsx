import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const HomeLazy = React.lazy(() => import(`./Home`));
const WrongLazy = React.lazy(() => import(`./WrongPage`));

// A react component with react-router routes.
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeLazy />} />
      <Route path="*" element={<WrongLazy />} />
    </Route>
  </Routes>
);
