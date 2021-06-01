import React from 'react';
import { BrowserRouter as RouterDOM } from 'react-router-dom';
import Layout from '@src/components/Layout';
import Header from '@src/components/Header';
import Router from '@src/components/Router';

const App: React.FC = () => {
  return (
    <Layout>
      <RouterDOM>
        <Header />
        <Router />
      </RouterDOM>
    </Layout>
  );
};

export default App;
